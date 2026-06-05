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

const dashboardEvidenceInfrastructure = [
  {
    label: "Latest release: fun-project-dashboard v0.2.1",
    url: "https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.1",
    note: "Publishes the live reviewer packet dashboard with brief, CI, Pages, OSS status, license, and governance links."
  },
  {
    label: "Dashboard CI workflow",
    url: "https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml",
    note: "Public GitHub Actions workflow for Node syntax checks and committed-data smoke verification."
  },
  {
    label: "GitHub Pages deployment workflow",
    url: "https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment",
    note: "Public deployment workflow for the live dashboard."
  },
  {
    label: "MIT License",
    url: "https://github.com/bte808/fun-project-dashboard/blob/main/LICENSE",
    note: "GitHub license API recognizes the repository as MIT-licensed."
  },
  {
    label: "Contributing guide",
    url: "https://github.com/bte808/fun-project-dashboard/blob/main/CONTRIBUTING.md",
    note: "Documents local verification, public-data boundaries, and contribution expectations."
  },
  {
    label: "Security policy",
    url: "https://github.com/bte808/fun-project-dashboard/blob/main/SECURITY.md",
    note: "Documents token/privacy boundaries and coordinated reporting expectations."
  }
];

function releaseReason(item) {
  const notes = {
    "fun-project-dashboard v0.2.1": "Released the reviewer packet dashboard: live page now surfaces the application brief, CI workflow, Pages demo, OSS status log, MIT license, and governance docs in one public panel.",
    "maintainer-signal-board v0.7.0": "Released saved view presets; issue #12 closed; CI, Pages, local browser smoke, and live browser smoke passed.",
    "fun-20260604-b-safe-payout-card v0.2.0": "Released audit trail export; issue #1 closed; core tests and desktop/mobile browser smoke passed.",
    "fun-20260604-a-star-sling v1.0.1": "Released self-contained browser smoke verification; live GitHub Pages desktop/mobile checks passed.",
    "fun-20260604-c-construct-canvas v1.0.0": "Published the initial public release with Node tests, browser smoke verification, and a GitHub Pages demo."
  };
  return notes[item.name] || item.reason || "Public release evidence.";
}

function shanghaiDateTime(iso) {
  if (!iso) return "unknown";
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(new Date(iso));
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second} CST`;
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

Last generated: ${shanghaiDateTime(meta.generatedAt)}.

This is a reviewer-facing summary of public OSS evidence for the bte808 GitHub account. It links only to public GitHub or GitHub Pages URLs, and separates completed evidence from open work and user-action blockers.

## Snapshot

- Public dashboard: ${markdownLink("fun-project-dashboard", "https://bte808.github.io/fun-project-dashboard/")}
- Dashboard source: ${markdownLink("bte808/fun-project-dashboard", meta.repositoryUrl || "https://github.com/bte808/fun-project-dashboard")}
- Public project snapshot: ${metrics.totalProjects || 0} tracked projects, ${metrics.todayUpdated || 0} updated today, ${metrics.todayCommits || 0} public commits today.
- OSS PR snapshot last verified: ${ossData.generatedAtShanghai || "unknown"}.
- External OSS PR snapshot: ${pulls.length} tracked PRs, ${pullCounts.merged || 0} merged, ${pullCounts["open-green"] || 0} open with no failing checks, ${pullCounts["needs-user-action"] || 0} requiring user action.
- Release and maintenance snapshot: ${highlightCounts.release || 0} own releases highlighted, ${highlightCounts.updated || 0} own projects updated today.

## Dashboard Evidence Infrastructure

${listRows(dashboardEvidenceInfrastructure, (item) => `- ${markdownLink(item.label, item.url)}: ${item.note}`)}

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
DASHBOARD_DOM_SMOKE_ONLY=1 npm run check
\`\`\`

The generated artifacts are:

- ${markdownLink("dashboard page", "https://bte808.github.io/fun-project-dashboard/")}
- ${markdownLink("latest dashboard release", "https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.1")}
- ${markdownLink("Dashboard CI workflow", "https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml")}
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
