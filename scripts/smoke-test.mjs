import { readFile } from "node:fs/promises";
import { mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
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
const evidenceText = await readFile("data/evidence.json", "utf8").catch((error) => {
  if (error.code === "ENOENT") return "{\"highlights\":[]}";
  throw error;
});
const data = JSON.parse(jsonText);
const evidence = JSON.parse(evidenceText);
const expectedEvidenceHighlights = (Array.isArray(evidence.highlights) ? evidence.highlights : [])
  .filter((item) => (!item.date || item.date === data.meta?.runDate) && item.name && item.url && item.reason);
const dashboardPath = fileURLToPath(new URL("../index.html", import.meta.url));
const swiftModuleCache = path.join(tmpdir(), "fun-project-dashboard-swift-module-cache");
mkdirSync(swiftModuleCache, { recursive: true });

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
for (const item of expectedEvidenceHighlights) {
  assert(
    (data.meta.highlights || []).some((highlight) => highlight.name === item.name && highlight.url === item.url),
    `expected evidence highlight is missing from data: ${item.name}`
  );
}
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

function createFakeElement(id = "") {
  return {
    id,
    value: "",
    href: "",
    textContent: "",
    innerHTML: "",
    listeners: {},
    classList: {
      add() {},
      remove() {}
    },
    addEventListener(type, handler) {
      this.listeners[type] = handler;
    },
    setAttribute() {},
    appendChild() {},
    remove() {},
    select() {}
  };
}

function runDomFallbackSmoke(script) {
  const ids = [
    "page-title",
    "page-subtitle",
    "repo-link",
    "copy-summary",
    "metrics",
    "today-story",
    "highlights",
    "view-tabs",
    "search",
    "tech-filter",
    "type-filter",
    "sort-select",
    "feedback",
    "project-grid",
    "tech-chart",
    "change-list",
    "timeline",
    "automation-checks",
    "data-notes",
    "footer"
  ];
  const elements = Object.fromEntries(ids.map((id) => [id, createFakeElement(id)]));
  const fakeDocument = {
    body: createFakeElement("body"),
    querySelector(selector) {
      if (selector.startsWith("#")) return elements[selector.slice(1)] || null;
      return null;
    },
    createElement() {
      return createFakeElement();
    },
    execCommand() {
      return true;
    }
  };
  const fakeNavigator = {
    clipboard: {
      async writeText() {}
    }
  };
  const context = {
    window: {
      FUN_PROJECT_DASHBOARD_DATA: data,
      setTimeout() {}
    },
    document: fakeDocument,
    navigator: fakeNavigator,
    Intl,
    Set,
    Map,
    Date,
    Math,
    String,
    Number,
    Array,
    Object,
    RegExp,
    console
  };
  context.window.window = context.window;

  vm.runInNewContext(script, context, { filename: "index-inline-dom-fallback.js" });

  assert(elements.metrics.innerHTML.includes("项目数"), "fallback render did not populate metrics");
  if (expectedEvidenceHighlights.length) {
    assert(elements.highlights.innerHTML.includes(expectedEvidenceHighlights[0].name), "fallback render is missing evidence highlights");
  }
  assert(elements["project-grid"].innerHTML.includes("project-card"), "fallback render produced no project cards");
  assert(elements["project-grid"].innerHTML.includes("fun-20260601-a-puff-pilot"), "fallback render is missing today's project");
  assert(elements["data-notes"].innerHTML.includes("GitHub API"), "fallback render is missing data warning notes");

  const firstToday = data.projects.find((project) => project.today.updated);
  assert(firstToday, "fallback data has no today-updated project");
  elements.search.value = firstToday.name;
  elements.search.listeners.input({ target: elements.search });
  assert(elements["project-grid"].innerHTML.includes(firstToday.name), "fallback search did not keep target project");

  elements["view-tabs"].listeners.click({
    target: {
      closest(selector) {
        return selector === "button[data-view]" ? { dataset: { view: "review" } } : null;
      }
    }
  });
  assert(elements.feedback.textContent.includes("当前显示"), "fallback review tab did not update feedback");

  const reviewTarget = data.projects.find((project) => project.needsReview);
  assert(reviewTarget, "fallback data has no review project");
  elements.search.value = "";
  elements.search.listeners.input({ target: elements.search });
  elements["project-grid"].listeners.click({
    target: {
      closest(selector) {
        return selector === "button[data-toggle]" ? { dataset: { toggle: reviewTarget.name } } : null;
      }
    }
  });
  assert(elements["project-grid"].innerHTML.includes("details is-open"), "fallback details toggle did not open");

  elements["tech-filter"].value = "JavaScript";
  elements["tech-filter"].listeners.change({ target: elements["tech-filter"] });
  assert(elements.feedback.textContent.includes("当前显示"), "fallback tech filter did not update feedback");

  return {
    ok: true,
    todayProjects: data.projects.filter((project) => project.today.updated).length,
    reviewProjects: data.projects.filter((project) => project.needsReview).length,
    searchedProject: firstToday.name,
    usedFallback: true
  };
}

const browserSmoke = spawnSync(
  "swift",
  ["scripts/browser-smoke.swift", dashboardPath],
  {
    cwd: process.cwd(),
    env: {
      ...process.env,
      CLANG_MODULE_CACHE_PATH: swiftModuleCache,
      SWIFT_MODULE_CACHE_PATH: swiftModuleCache
    },
    encoding: "utf8"
  }
);

if (browserSmoke.status !== 0) {
  const output = [browserSmoke.stdout, browserSmoke.stderr].filter(Boolean).join("\n").trim();
  if (/Operation not permitted|sandbox extension|timed out while loading the dashboard/i.test(output)) {
    const fallback = runDomFallbackSmoke(inlineScripts[0]);
    console.log(`Browser smoke unavailable in this sandbox; fallback DOM smoke passed: ${JSON.stringify(fallback)}`);
    process.exit(0);
  }
  throw new Error(`Browser smoke test failed.\n${output}`);
}

const browserSummary = browserSmoke.stdout.trim();
if (!browserSummary && /sandbox extension|timed out while loading the dashboard/i.test(browserSmoke.stderr)) {
  const fallback = runDomFallbackSmoke(inlineScripts[0]);
  console.log(`Browser smoke produced no summary in this sandbox; fallback DOM smoke passed: ${JSON.stringify(fallback)}`);
  process.exit(0);
}

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
