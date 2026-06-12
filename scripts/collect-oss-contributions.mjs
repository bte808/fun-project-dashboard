import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const apiBase = "https://api.github.com";
const token = process.env.GITHUB_TOKEN || "";
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.resolve(scriptDir, "..", "data", "oss-prs.json");
const outputPath = path.resolve(scriptDir, "..", "data", "oss-contributions.json");
const scriptOutputPath = path.resolve(scriptDir, "..", "data", "oss-contributions.js");
const markdownPath = path.resolve(scriptDir, "..", "docs", "oss-contribution-log.md");

function headers(extra = {}) {
  return {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "fun-project-dashboard-oss-log",
    ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    ...extra
  };
}

async function github(pathname) {
  const response = await fetch(`${apiBase}${pathname}`, { headers: headers() });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status} for ${pathname}: ${text.slice(0, 240)}`);
  }
  return response.json();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shanghaiTimestamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second} CST`;
}

function parsePullUrl(url) {
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)\/?$/);
  if (!match) {
    throw new Error(`Invalid pull request URL: ${url}`);
  }
  return {
    owner: match[1],
    repo: match[2],
    number: Number(match[3]),
    repoFullName: `${match[1]}/${match[2]}`
  };
}

function checkState(check) {
  if (check.conclusion) return check.conclusion.toLowerCase();
  if (check.status && check.status !== "completed") return check.status.toLowerCase();
  return "unknown";
}

function summarizeChecks(checkRuns = [], statuses = []) {
  const items = [
    ...checkRuns.map((check) => ({
      name: check.name,
      state: checkState(check),
      source: "check-run"
    })),
    ...statuses.map((status) => ({
      name: status.context,
      state: status.state,
      source: "status"
    }))
  ].filter((item) => item.name);

  const failedStates = new Set(["failure", "failed", "cancelled", "timed_out", "action_required", "error"]);
  const pendingStates = new Set(["queued", "in_progress", "pending", "requested", "waiting"]);
  const failed = items.filter((item) => failedStates.has(item.state));
  const pending = items.filter((item) => pendingStates.has(item.state));
  const passed = items.filter((item) => ["success", "neutral", "skipped"].includes(item.state));

  return {
    total: items.length,
    passed: passed.length,
    failed,
    pending,
    items
  };
}

function categoryFor(record) {
  if (record.mergedAt) return "merged";
  if (record.state === "closed") return "closed";
  if (record.blocker || record.checks.failed.length > 0 || record.isDraft) return "needs-user-action";
  return "open-green";
}

function statusText(record) {
  if (record.category === "merged") {
    const date = record.mergedAt.slice(0, 10);
    return `Merged on ${date}; ${record.note || checkPhrase(record)}.`;
  }

  if (record.category === "needs-user-action") {
    return record.blocker || failedPhrase(record);
  }

  if (record.category === "closed") {
    const date = record.closedAt ? record.closedAt.slice(0, 10) : "unknown date";
    const note = record.note ? ` ${record.note}.` : "";
    return `Closed without merge on ${date}.${note}`;
  }

  const note = record.note ? `${record.note}, ` : "";
  const mergeability = mergeabilityPhrase(record.mergeableState);
  return `Open, ${mergeability}, ${note}${checkPhrase(record)}, waiting for review or maintainer follow-up.`;
}

function mergeabilityPhrase(state) {
  if (["clean", "has_hooks", "unstable"].includes(state)) return "mergeable";
  if (state === "blocked") return "blocked by required review or repository policy";
  if (state === "dirty") return "merge conflict detected";
  return "mergeability not reported";
}

function checkPhrase(record) {
  if (record.checks.failed.length) {
    return `${record.checks.failed.length} failing check${record.checks.failed.length === 1 ? "" : "s"}`;
  }
  if (record.checks.pending.length) {
    return `${record.checks.pending.length} pending check${record.checks.pending.length === 1 ? "" : "s"}`;
  }
  return record.checks.total ? "no failing checks detected" : "no check runs detected";
}

function failedPhrase(record) {
  const failedNames = record.checks.failed.map((check) => check.name).join(", ");
  return failedNames ? `Failing checks: ${failedNames}.` : "Needs contributor action.";
}

function markdownTable(records, category, heading, columnTitle) {
  const rows = records.filter((record) => record.category === category);
  return [
    `## ${heading}`,
    "",
    `| PR | ${columnTitle} |`,
    "| --- | --- |",
    ...(rows.length
      ? rows.map((record) => `| [${record.repoFullName}#${record.number}](${record.url}) | ${statusText(record)} |`)
      : ["| None | No pull requests in this category. |"]),
    ""
  ].join("\n");
}

function buildMarkdown(data) {
  return [
    "# OSS contribution log",
    "",
    `Last verified: ${data.generatedAtShanghai}.`,
    "",
    "This log tracks public external OSS pull requests that can be verified from GitHub. It is intentionally factual: merged PRs are separated from open PRs, user-action blockers, and closed-without-merge work.",
    "",
    markdownTable(data.pullRequests, "merged", "Merged", "Evidence"),
    markdownTable(data.pullRequests, "open-green", "Open / No Failing Checks", "Current public state"),
    markdownTable(data.pullRequests, "needs-user-action", "Needs User Action", "Blocker"),
    markdownTable(data.pullRequests, "closed", "Closed / Not Merged", "Outcome")
  ].join("\n");
}

async function collect(configItem) {
  const parsed = parsePullUrl(configItem.url);
  let pull = await github(`/repos/${parsed.owner}/${parsed.repo}/pulls/${parsed.number}`);
  if (!pull.merged_at && (pull.mergeable === null || !pull.mergeable_state)) {
    await sleep(750);
    pull = await github(`/repos/${parsed.owner}/${parsed.repo}/pulls/${parsed.number}`);
  }
  const [checkRuns, statuses] = await Promise.all([
    github(`/repos/${parsed.owner}/${parsed.repo}/commits/${pull.head.sha}/check-runs?per_page=100`),
    github(`/repos/${parsed.owner}/${parsed.repo}/commits/${pull.head.sha}/status`)
  ]);

  const record = {
    ...parsed,
    url: configItem.url,
    title: pull.title,
    state: pull.state,
    isDraft: Boolean(pull.draft),
    mergeable: pull.mergeable_state === "clean" || pull.mergeable_state === "has_hooks" || pull.mergeable_state === "unstable",
    mergeableState: pull.mergeable_state || "unknown",
    reviewDecision: "",
    mergedAt: pull.merged_at,
    closedAt: pull.closed_at,
    headSha: pull.head.sha,
    note: configItem.note || "",
    blocker: configItem.blocker || "",
    checks: summarizeChecks(checkRuns.check_runs || [], statuses.statuses || [])
  };
  record.category = categoryFor(record);
  record.statusText = statusText(record);
  return record;
}

async function main() {
  const config = JSON.parse(await readFile(configPath, "utf8"));
  const pullRequests = [];
  for (const item of config.pullRequests || []) {
    pullRequests.push(await collect(item));
  }

  const data = {
    generatedAt: new Date().toISOString(),
    generatedAtShanghai: shanghaiTimestamp(),
    source: "GitHub public pull request API",
    pullRequests
  };

  await mkdir(path.dirname(outputPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await writeFile(
    scriptOutputPath,
    `window.FUN_PROJECT_DASHBOARD_OSS_CONTRIBUTIONS = ${JSON.stringify(data, null, 2)};\n`,
    "utf8"
  );
  await writeFile(markdownPath, `${buildMarkdown(data)}\n`, "utf8");

  const summary = pullRequests.reduce((acc, record) => {
    acc[record.category] = (acc[record.category] || 0) + 1;
    return acc;
  }, {});
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
