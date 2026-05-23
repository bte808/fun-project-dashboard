import { readFile } from "node:fs/promises";
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

assert(html.includes("id=\"app\""), "index.html is missing #app");
assert(html.includes("data/projects.js"), "index.html is not loading local data/projects.js");
assert(Array.isArray(data.projects), "projects must be an array");
assert(data.projects.length === data.metrics.totalProjects, "metrics.totalProjects does not match project count");
assert(data.metrics.todayCommits === data.projects.reduce((sum, project) => sum + project.today.commitCount, 0), "today commit count mismatch");
assert(data.metrics.todayNew === data.projects.filter((project) => project.today.created).length, "today new count mismatch");
assert(data.metrics.todayUpdated === data.projects.filter((project) => project.today.updated).length, "today updated count mismatch");

vm.runInNewContext(dataScript, { window: {} }, { filename: "data/projects.js" });

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
assert(html.includes("navigator.clipboard"), "index.html is missing clipboard support");

console.log(`Smoke test passed: ${data.projects.length} projects, ${data.metrics.todayCommits} commits today.`);
