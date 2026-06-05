import { readFile } from "node:fs/promises";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

const [
  packageData,
  html,
  evidenceData,
  projectsData,
  projectsScript,
  applicationBrief,
  reviewerPacket,
  briefBuilder,
  readme
] = await Promise.all([
  readJson("package.json"),
  readFile("index.html", "utf8"),
  readJson("data/evidence.json"),
  readJson("data/projects.json"),
  readFile("data/projects.js", "utf8"),
  readFile("docs/codex-oss-application-brief.md", "utf8"),
  readFile("docs/reviewer-packet.md", "utf8"),
  readFile("scripts/build-application-brief.mjs", "utf8"),
  readFile("README.md", "utf8")
]);

const version = packageData.version;
const tag = `v${version}`;
const releaseName = `fun-project-dashboard ${tag}`;
const releaseUrl = `https://github.com/bte808/fun-project-dashboard/releases/tag/${tag}`;
const footerText = `Dashboard version ${version}`;

assert(/^\d+\.\d+\.\d+$/.test(version), `package version is not semver-like: ${version}`);
assert(html.includes(footerText), "index.html footer version does not match package.json");
assert(html.includes("Reviewer packet / 申请包"), "index.html is missing the reviewer packet panel");
assert(html.includes("docs/reviewer-packet.md"), "index.html reviewer packet panel does not link to docs/reviewer-packet.md");
assert(readme.includes(releaseName), "README latest refresh summary does not mention the package release");
assert(readme.includes("docs/reviewer-packet.md"), "README does not link to docs/reviewer-packet.md");

const evidenceHighlights = Array.isArray(evidenceData.highlights) ? evidenceData.highlights : [];
assert(
  evidenceHighlights.some((item) => item.name === releaseName && item.url === releaseUrl),
  "data/evidence.json is missing the package release evidence item"
);

const generatedHighlights = projectsData.meta?.highlights || [];
assert(
  generatedHighlights.some((item) => item.name === releaseName && item.url === releaseUrl),
  "data/projects.json is missing the generated package release highlight"
);
assert(projectsScript.includes(releaseName), "data/projects.js is missing the generated package release name");
assert(projectsScript.includes(releaseUrl), "data/projects.js is missing the generated package release URL");

assert(applicationBrief.includes(releaseName), "application brief is missing the package release");
assert(applicationBrief.includes(releaseUrl), "application brief is missing the package release URL");
assert(applicationBrief.includes("Dashboard Evidence Infrastructure"), "application brief is missing dashboard infrastructure evidence");
assert(reviewerPacket.includes(releaseName), "reviewer packet is missing the package release");
assert(reviewerPacket.includes(releaseUrl), "reviewer packet is missing the package release URL");
assert(reviewerPacket.includes("Dashboard CI workflow"), "reviewer packet is missing the CI workflow link");
assert(reviewerPacket.includes("Pages deployment workflow"), "reviewer packet is missing the Pages workflow link");
assert(reviewerPacket.includes("npm run check:release"), "reviewer packet is missing the release alignment command");
assert(briefBuilder.includes("package.json"), "brief generator does not read package.json");
assert(briefBuilder.includes("buildDashboardRelease"), "brief generator does not derive release metadata");
assert(
  !briefBuilder.includes(releaseName),
  "brief generator hardcodes the current package release name instead of deriving it"
);
assert(
  !briefBuilder.includes(releaseUrl),
  "brief generator hardcodes the current package release URL instead of deriving it"
);
assert(briefBuilder.includes("docs/reviewer-packet.md"), "brief generator is missing the reviewer packet artifact link");

console.log(JSON.stringify({
  ok: true,
  version,
  releaseName,
  releaseUrl,
  generatedAt: projectsData.meta?.generatedAt || null
}, null, 2));
