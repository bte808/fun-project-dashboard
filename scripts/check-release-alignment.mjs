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
  briefBuilder,
  readme
] = await Promise.all([
  readJson("package.json"),
  readFile("index.html", "utf8"),
  readJson("data/evidence.json"),
  readJson("data/projects.json"),
  readFile("data/projects.js", "utf8"),
  readFile("docs/codex-oss-application-brief.md", "utf8"),
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
assert(readme.includes(releaseName), "README latest refresh summary does not mention the package release");

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
assert(briefBuilder.includes(releaseName), "brief generator is missing the package release");
assert(briefBuilder.includes(releaseUrl), "brief generator is missing the package release URL");

console.log(JSON.stringify({
  ok: true,
  version,
  releaseName,
  releaseUrl,
  generatedAt: projectsData.meta?.generatedAt || null
}, null, 2));
