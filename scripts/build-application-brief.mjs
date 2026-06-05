import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectsPath = path.resolve(scriptDir, "..", "data", "projects.json");
const ossPath = path.resolve(scriptDir, "..", "data", "oss-contributions.json");
const outputPath = path.resolve(scriptDir, "..", "docs", "codex-oss-application-brief.md");

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "unknown";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function markdownLink(label, url) {
  return `[${label}](${url})`;
}

function listRows(items, mapper) {
  return items.length ? items.map(mapper).join("\n") : "- None.";
}

function releaseReason(item) {
  const notes = {
    "maintainer-signal-board v0.7.0": "Released saved view presets; issue #12 closed; CI, Pages, local browser smoke, and live browser smoke passed.",
    "fun-20260604-b-safe-payout-card v0.2.0": "Released audit trail export; issue #1 closed; core tests and desktop/mobile browser smoke passed.",
    "fun-20260604-a-star-sling v1.0.1": "Released self-contained browser smoke verification; live GitHub Pages desktop/mobile checks passed.",
    "fun-20260604-c-construct-canvas v1.0.0": "Published the initial public release with Node tests, browser smoke verification, and a GitHub Pages demo."
  };
  return notes[item.name] || item.reason || "Public release evidence.";
}

function headingDate(meta, oss) {
  return oss.generatedAtShanghai || meta.generatedAtShanghaiDate || meta.runDate || "unknown";
}

function buildBrief(projectsData, ossData) {
  const meta = projectsData.meta || {};
  const metrics = projectsData.metrics || {};
  const highlights = meta.highlights || [];
  const pulls = ossData.pullRequests || [];
  const pullCounts = countBy(pulls, "category");
  const highlightCounts = countBy(highlights, "status");
  const mergedPulls = pulls.filter((pull) => pull.category === "merged");
  const openPulls = pulls.filter((pull) => pull.category === "open-green");
  const blockedPulls = pulls.filter((pull) => pull.category === "needs-user-action");
  const releases = highlights.filter((item) => item.status === "release");

  return `# Codex for OSS application evidence brief

Last generated: ${headingDate(meta, ossData)}.

This is a reviewer-facing summary of public OSS evidence for the bte808 GitHub account. It links only to public GitHub or GitHub Pages URLs, and separates completed evidence from open work and user-action blockers.

## Snapshot

- Public dashboard: ${markdownLink("fun-project-dashboard", "https://bte808.github.io/fun-project-dashboard/")}
- Dashboard source: ${markdownLink("bte808/fun-project-dashboard", meta.repositoryUrl || "https://github.com/bte808/fun-project-dashboard")}
- Public project snapshot: ${metrics.totalProjects || 0} tracked projects, ${metrics.todayUpdated || 0} updated today, ${metrics.todayCommits || 0} public commits today.
- External OSS PR snapshot: ${pulls.length} tracked PRs, ${pullCounts.merged || 0} merged, ${pullCounts["open-green"] || 0} open with no failing checks, ${pullCounts["needs-user-action"] || 0} requiring user action.
- Release and maintenance snapshot: ${highlightCounts.release || 0} own releases highlighted, ${highlightCounts.updated || 0} own projects updated today.

## Strongest Public Evidence

${listRows(mergedPulls, (pull) => `- ${markdownLink(`${pull.repoFullName}#${pull.number}`, pull.url)}: ${pull.statusText}`)}

## Open PRs With No Failing Checks

${listRows(openPulls, (pull) => `- ${markdownLink(`${pull.repoFullName}#${pull.number}`, pull.url)}: ${pull.statusText}`)}

## Own Project Releases

${listRows(releases, (item) => `- ${markdownLink(item.name, item.url)}: ${releaseReason(item)}`)}

## Known User-Action Blockers

${listRows(blockedPulls, (pull) => `- ${markdownLink(`${pull.repoFullName}#${pull.number}`, pull.url)}: ${pull.statusText}`)}

## Reproducibility

The dashboard evidence can be refreshed and checked locally:

\`\`\`bash
RUN_DATE=YYYY-MM-DD npm run collect
GITHUB_TOKEN="$(gh auth token)" npm run collect:oss
npm run brief
npm run check
\`\`\`

The generated artifacts are:

- ${markdownLink("dashboard page", "https://bte808.github.io/fun-project-dashboard/")}
- ${markdownLink("OSS contribution log", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md")}
- ${markdownLink("machine-readable OSS PR snapshot", "https://github.com/bte808/fun-project-dashboard/blob/main/data/oss-contributions.json")}
- ${markdownLink("this application evidence brief", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md")}
`;
}

async function main() {
  const [projectsData, ossData] = await Promise.all([
    readFile(projectsPath, "utf8").then(JSON.parse),
    readFile(ossPath, "utf8").then(JSON.parse)
  ]);
  await mkdir(path.dirname(outputPath), { recursive: true });
  const brief = buildBrief(projectsData, ossData);
  await writeFile(outputPath, `${brief.trim()}\n`, "utf8");
  console.log(outputPath);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
