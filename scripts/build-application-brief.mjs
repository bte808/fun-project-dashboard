import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packagePath = path.resolve(scriptDir, "..", "package.json");
const projectsPath = path.resolve(scriptDir, "..", "data", "projects.json");
const ossPath = path.resolve(scriptDir, "..", "data", "oss-contributions.json");
const briefOutputPath = path.resolve(scriptDir, "..", "docs", "codex-oss-application-brief.md");
const reviewerPacketOutputPath = path.resolve(scriptDir, "..", "docs", "reviewer-packet.md");

const DASHBOARD_RELEASE_NOTE = "Freezes release automation hardening so dashboard version metadata and reviewer brief release links derive from package.json.";
const DASHBOARD_RELEASE_REASON = "Released release automation hardening: dashboard footer metadata and reviewer brief release links now derive from package.json, reducing manual drift in future evidence packets.";

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

function listInlineLinks(items, mapper) {
  return items.length ? items.map(mapper).join(", ") : "None.";
}

function buildDashboardRelease(packageData) {
  const tag = `v${packageData.version}`;
  return {
    name: `fun-project-dashboard ${tag}`,
    tag,
    url: `https://github.com/bte808/fun-project-dashboard/releases/tag/${tag}`,
    note: DASHBOARD_RELEASE_NOTE,
    reason: DASHBOARD_RELEASE_REASON
  };
}

function buildDashboardEvidenceInfrastructure(dashboardRelease) {
  return [
    {
      label: `Latest release: ${dashboardRelease.name}`,
      url: dashboardRelease.url,
      note: dashboardRelease.note
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
}

function releaseReason(item, dashboardRelease) {
  if (item.name === dashboardRelease.name) {
    return dashboardRelease.reason;
  }
  const notes = {
    "maintainer-signal-board v0.7.3": "Released REST Search API import support, deriving OWNER/REPO from repository_url and keeping closed REST search rows out of open maintainer load.",
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

function buildBrief(projectsData, ossData, dashboardRelease) {
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
  const dashboardEvidenceInfrastructure = buildDashboardEvidenceInfrastructure(dashboardRelease);

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

${listRows(releases, (item) => `- ${markdownLink(item.name, item.url)}: ${releaseReason(item, dashboardRelease)}`)}

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
- ${markdownLink("reviewer packet", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/reviewer-packet.md")}
- ${markdownLink("latest dashboard release", dashboardRelease.url)}
- ${markdownLink("Dashboard CI workflow", "https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml")}
- ${markdownLink("OSS contribution log", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md")}
- ${markdownLink("machine-readable OSS PR snapshot", "https://github.com/bte808/fun-project-dashboard/blob/main/data/oss-contributions.json")}
- ${markdownLink("this application evidence brief", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md")}
`;
}

function buildReviewerPacket(projectsData, ossData, dashboardRelease) {
  const meta = projectsData.meta || {};
  const metrics = projectsData.metrics || {};
  const highlights = meta.highlights || [];
  const pulls = ossData.pullRequests || [];
  const pullCounts = countBy(pulls, "category");
  const highlightCounts = countBy(highlights, "status");
  const mergedPulls = pulls.filter((pull) => pull.category === "merged");
  const openPulls = pulls.filter((pull) => pull.category === "open-green");
  const blockedPulls = pulls.filter((pull) => pull.category === "needs-user-action");

  return `# Reviewer packet

Last updated: ${shanghaiDateTime(meta.generatedAt)}.

This is the compact public checklist for reviewing the \`bte808\` daily fun project evidence surface. It only links to public GitHub or GitHub Pages URLs.

## Start here

- Live dashboard: ${markdownLink("bte808.github.io/fun-project-dashboard", "https://bte808.github.io/fun-project-dashboard/")}
- Source repository: ${markdownLink("bte808/fun-project-dashboard", "https://github.com/bte808/fun-project-dashboard")}
- Latest release: ${markdownLink(dashboardRelease.name, dashboardRelease.url)}
- Detailed application brief: ${markdownLink("Codex OSS application evidence brief", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md")}

## Evidence at a glance

- Public project snapshot: ${metrics.totalProjects || 0} tracked public projects, ${metrics.todayUpdated || 0} updated today, ${metrics.todayCommits || 0} public commits today.
- External OSS PR snapshot: ${pulls.length} tracked PRs, ${pullCounts.merged || 0} merged, ${pullCounts["open-green"] || 0} open with no failing checks, ${pullCounts["needs-user-action"] || 0} requiring user action.
- Release and maintenance snapshot: ${highlightCounts.release || 0} highlighted own releases, including the dashboard release itself.
- Live dashboard reviewer panel: exposes brief, CI, Pages, OSS log, MIT license, and governance links in one place.

## Verification links

- Dashboard CI workflow: ${markdownLink("actions/workflows/ci.yml", "https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml")}
- Pages deployment workflow: ${markdownLink("actions/workflows/pages/pages-build-deployment", "https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment")}
- Machine-readable project snapshot: ${markdownLink("data/projects.json", "https://github.com/bte808/fun-project-dashboard/blob/main/data/projects.json")}
- Machine-readable OSS PR snapshot: ${markdownLink("data/oss-contributions.json", "https://github.com/bte808/fun-project-dashboard/blob/main/data/oss-contributions.json")}

## OSS contribution evidence

- Merged PRs: ${listInlineLinks(mergedPulls, (pull) => markdownLink(`${pull.repoFullName}#${pull.number}`, pull.url))}
- Open PRs with no failing checks: ${openPulls.length ? markdownLink("OSS contribution log", "https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md") : "None."}
- Known user-action blockers: ${listInlineLinks(blockedPulls, (pull) => markdownLink(`${pull.repoFullName}#${pull.number}`, pull.url))}

## Maintenance and governance

- License: ${markdownLink("MIT License", "https://github.com/bte808/fun-project-dashboard/blob/main/LICENSE")}
- Contributing guide: ${markdownLink("CONTRIBUTING.md", "https://github.com/bte808/fun-project-dashboard/blob/main/CONTRIBUTING.md")}
- Security policy: ${markdownLink("SECURITY.md", "https://github.com/bte808/fun-project-dashboard/blob/main/SECURITY.md")}
- Code of conduct: ${markdownLink("CODE_OF_CONDUCT.md", "https://github.com/bte808/fun-project-dashboard/blob/main/CODE_OF_CONDUCT.md")}
- Issue templates: ${markdownLink("bug report", "https://github.com/bte808/fun-project-dashboard/blob/main/.github/ISSUE_TEMPLATE/bug_report.yml")}, ${markdownLink("improvement", "https://github.com/bte808/fun-project-dashboard/blob/main/.github/ISSUE_TEMPLATE/improvement.yml")}

## Reproducibility

\`\`\`bash
RUN_DATE=YYYY-MM-DD npm run collect
GITHUB_TOKEN="$(gh auth token)" npm run collect:oss
npm run brief
npm run check
npm run check:release
DASHBOARD_DOM_SMOKE_ONLY=1 npm run check
\`\`\`

The release-alignment check is intentionally part of CI so the package version, live dashboard footer, curated evidence, generated data, README summary, application brief, reviewer packet, and brief generator stay aligned to the same dashboard release.
`;
}

async function main() {
  const [packageData, projectsData, ossData] = await Promise.all([
    readFile(packagePath, "utf8").then(JSON.parse),
    readFile(projectsPath, "utf8").then(JSON.parse),
    readFile(ossPath, "utf8").then(JSON.parse)
  ]);
  const dashboardRelease = buildDashboardRelease(packageData);
  await mkdir(path.dirname(briefOutputPath), { recursive: true });
  const brief = buildBrief(projectsData, ossData, dashboardRelease);
  const reviewerPacket = buildReviewerPacket(projectsData, ossData, dashboardRelease);
  await Promise.all([
    writeFile(briefOutputPath, `${brief.trim()}\n`, "utf8"),
    writeFile(reviewerPacketOutputPath, `${reviewerPacket.trim()}\n`, "utf8")
  ]);
  console.log(briefOutputPath);
  console.log(reviewerPacketOutputPath);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
