import { readFile } from "node:fs/promises";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const html = await readFile("index.html", "utf8");
const jsonText = await readFile("data/projects.json", "utf8");
const dataScript = await readFile("data/projects.js", "utf8");
const data = JSON.parse(jsonText);
const dashboardPath = fileURLToPath(new URL("../index.html", import.meta.url));

assert(html.includes("id=\"app\""), "index.html is missing #app");
assert(html.includes("data/projects.js"), "index.html is not loading local data/projects.js");
assert(Array.isArray(data.projects), "projects must be an array");
assert(data.projects.length === data.metrics.totalProjects, "metrics.totalProjects does not match project count");
assert(data.metrics.todayCommits === data.projects.reduce((sum, project) => sum + project.today.commitCount, 0), "today commit count mismatch");
assert(data.metrics.todayNew === data.projects.filter((project) => project.today.created).length, "today new count mismatch");
assert(data.metrics.todayUpdated === data.projects.filter((project) => project.today.updated).length, "today updated count mismatch");
assert(data.metrics.totalStars === data.projects.reduce((sum, project) => sum + (project.stars?.total || 0), 0), "total star count mismatch");
assert(data.metrics.todayStarDelta === data.projects.reduce((sum, project) => sum + (project.stars?.todayDelta || 0), 0), "today star delta mismatch");
assert(data.meta?.runDate, "meta.runDate is required");
assert(data.meta?.repositoryUrl, "meta.repositoryUrl is required");
assert(data.meta?.starChangeNote, "meta.starChangeNote is required");
assert(typeof data.meta?.todayStory === "string" && data.meta.todayStory.length > 0, "meta.todayStory is required");
assert(data.projects.every((project) => Array.isArray(project.today?.commits)), "every project must include today.commits");
assert(data.projects.every((project) => Array.isArray(project.today?.files)), "every project must include today.files");
assert(data.projects.every((project) => typeof project.stars?.total === "number"), "every project must include stars.total");

const dataContext = { window: {} };
vm.runInNewContext(dataScript, dataContext, { filename: "data/projects.js" });
assert(dataContext.window.FUN_PROJECT_DASHBOARD_DATA, "data/projects.js did not assign window.FUN_PROJECT_DASHBOARD_DATA");
assert(
  JSON.stringify(dataContext.window.FUN_PROJECT_DASHBOARD_DATA) === JSON.stringify(data),
  "data/projects.js does not match data/projects.json"
);

const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
assert(inlineScripts.length > 0, "index.html has no inline app script");
for (const script of inlineScripts) {
  new vm.Script(script, { filename: "index-inline.js" });
}

const requiredText = [
  "项目数",
  "今日新建",
  "今日更新",
  "今日 commit",
  "总 star",
  "今日 star 变化",
  "技术分布",
  "今日变动",
  "项目时间线",
  "复制今日摘要"
];

for (const text of requiredText) {
  assert(html.includes(text), `index.html missing required text: ${text}`);
}

assert(html.includes("id=\"copy-summary\""), "index.html is missing the copy summary button");
assert(html.includes("function buildShareSummary"), "index.html is missing share summary builder");
assert(html.includes("function normalizeSearchText"), "index.html is missing search normalization");
assert(html.includes("navigator.clipboard"), "index.html is missing clipboard support");
assert(html.includes("overflow-wrap: anywhere"), "index.html is missing overflow-wrap protection for long content");
assert(html.includes("@media (max-width: 760px)"), "index.html is missing the mobile layout breakpoint");

const browserSmoke = spawnSync(
  "swift",
  ["scripts/browser-smoke.swift", dashboardPath],
  {
    cwd: process.cwd(),
    encoding: "utf8"
  }
);

if (browserSmoke.status !== 0) {
  const output = [browserSmoke.stdout, browserSmoke.stderr].filter(Boolean).join("\n").trim();
  throw new Error(`Browser smoke test failed.\n${output}`);
}

const browserSummary = browserSmoke.stdout.trim();
assert(browserSummary, `Browser smoke test produced no summary.\n${browserSmoke.stderr.trim()}`);

let browserResult;
try {
  browserResult = JSON.parse(browserSummary);
} catch (error) {
  throw new Error(`Browser smoke summary is not valid JSON.\n${browserSummary}`);
}

assert(browserResult.ok === true, `Browser smoke test reported a scenario failure.\n${browserSummary}`);
assert(
  browserResult.initialMaxWidth <= browserResult.innerWidth + 1,
  `Initial mobile width overflow detected.\n${browserSummary}`
);
assert(
  browserResult.postInteractionMaxWidth <= browserResult.innerWidth + 1,
  `Post-interaction mobile width overflow detected.\n${browserSummary}`
);

console.log(`Smoke test passed: ${data.projects.length} projects, ${data.metrics.todayCommits} commits today.`);
console.log(`Browser smoke summary: ${browserSummary}`);
