import { mkdir, writeFile } from "node:fs/promises";
import process from "node:process";

const owner = process.env.GITHUB_OWNER || "bte808";
const dashboardRepo = process.env.DASHBOARD_REPO || "fun-project-dashboard";
const runDate = process.env.RUN_DATE || dateInShanghai(new Date().toISOString());
const apiBase = "https://api.github.com";
const token = process.env.GITHUB_TOKEN || "";
const startIso = new Date(`${runDate}T00:00:00+08:00`).toISOString();
const endIso = new Date(`${runDate}T23:59:59.999+08:00`).toISOString();

const funReadmeSignals = [
  /每日趣味项目/,
  /趣味项目孵化/,
  /daily fun project/i,
  /fun project/i,
  /shipped toy/i
];

function headers(extra = {}) {
  return {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "fun-project-dashboard",
    ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    ...extra
  };
}

async function github(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    headers: headers(options.headers || {})
  });

  if (response.status === 404 && options.optional) {
    return null;
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status} for ${path}: ${text.slice(0, 240)}`);
  }

  if (options.raw) {
    return response.text();
  }

  return response.json();
}

async function paginate(path) {
  const items = [];
  for (let page = 1; page <= 10; page += 1) {
    const connector = path.includes("?") ? "&" : "?";
    const batch = await github(`${path}${connector}per_page=100&page=${page}`);
    items.push(...batch);
    if (batch.length < 100) break;
  }
  return items;
}

function dateInShanghai(iso) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date(iso));
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function cleanMarkdown(value = "") {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[[^\]]*]\(([^)]+)\)/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^#+\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function compact(value = "", max = 180) {
  const text = cleanMarkdown(value);
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max - 1).trim()}...` : text;
}

function section(markdown = "", patterns = []) {
  const lines = markdown.split(/\r?\n/);
  let start = -1;
  let level = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{2,6})\s+(.+?)\s*#*$/);
    if (!match) continue;
    if (patterns.some((pattern) => pattern.test(match[2]))) {
      start = index + 1;
      level = match[1].length;
      break;
    }
  }

  if (start === -1) return "";

  const chunk = [];
  for (let index = start; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{2,6})\s+/);
    if (match && match[1].length <= level) break;
    chunk.push(lines[index]);
  }
  return chunk.join("\n").trim();
}

function firstParagraph(markdown = "") {
  const lines = markdown.split(/\r?\n/);
  const chunk = [];
  let started = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || /^#\s/.test(line) || /^!\[/.test(line) || /^\[!/.test(line)) {
      if (started) break;
      continue;
    }
    if (/^#{2,6}\s/.test(line)) {
      if (started) break;
      continue;
    }
    if (/^[-*]\s+\[/.test(line)) continue;
    started = true;
    chunk.push(line);
    if (chunk.join(" ").length > 220) break;
  }

  return chunk.join(" ");
}

function runCommandFrom(text = "") {
  const commands = [];
  const fencedBlocks = [...text.matchAll(/```(?:bash|sh|shell|zsh|console)?\s*([\s\S]*?)```/gi)];
  for (const block of fencedBlocks) {
    commands.push(...block[1]
      .split(/\r?\n/)
      .map((line) => line.trim().replace(/^\$\s*/, ""))
      .filter((line) => /^(npm|pnpm|yarn|bun|node|python3?|npx|open|php|ruby)\b/.test(line)));
  }

  commands.push(...text
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^[-*]\s+/, "").replace(/^`|`$/g, ""))
    .filter((line) => /^(npm|pnpm|yarn|bun|node|python3?|npx|open|php|ruby)\b/.test(line)));

  return commands.find((line) => /\b(start|serve|dev|http\.server|open)\b/.test(line)) || commands[0] || "";
}

function inferType(repoName, readme, description) {
  const name = repoName.toLowerCase();
  const haystack = `${repoName} ${readme} ${description || ""}`.toLowerCase();
  if (/meeting|brief/.test(name)) return "效率工具";
  if (/audio|sound|music|orbit|sequencer/.test(haystack)) return "音频互动";
  if (/concept|learn|study|quiz|bridge|c语言|c concept/.test(haystack)) return "学习练习";
  if (/dice|puzzle|game|route|signal|chain|tap|hue|color/.test(haystack)) return "浏览器小游戏";
  if (/meeting|notes|brief|action/.test(haystack)) return "效率工具";
  if (/poem|writing|story|poetry|text/.test(haystack)) return "文字创作";
  return "互动小品";
}

function extractReadmeInfo(readme, description) {
  const oneLineSection = section(readme, [/一句话/, /what it is/i, /overview/i, /简介/, /是什么/]);
  const useSection = section(readme, [/能干嘛/, /有什么用/, /use/i, /why/i, /purpose/i, /玩法/, /how it works/i]);
  const funSection = section(readme, [/为什么好玩/, /why.*fun/i, /fun/i, /亮点/, /highlights/i]);
  const runSection = section(readme, [/如何运行/, /本地运行/, /run/i, /usage/i, /start/i, /验证/, /verification/i]);
  const verificationSection = section(readme, [/验证/, /verification/i, /checks/i, /test/i]);

  const oneLine = compact(oneLineSection || description || firstParagraph(readme), 170);
  const usefulness = compact(useSection, 220);
  const whyFun = compact(funSection, 220);
  const runCommand = runCommandFrom(runSection || readme);
  const verification = compact(verificationSection, 220);

  return {
    oneLine: oneLine || "待补充",
    usefulness: usefulness || "待补充",
    whyFun: whyFun || "待补充",
    runCommand: runCommand || "待补充",
    verification: verification || "待补充"
  };
}

function summarizeFiles(files) {
  const unique = new Map();
  for (const file of files) {
    const previous = unique.get(file.filename);
    if (!previous || previous.status !== "added") {
      unique.set(file.filename, {
        filename: file.filename,
        status: file.status,
        additions: file.additions || 0,
        deletions: file.deletions || 0
      });
    }
  }
  return [...unique.values()].sort((a, b) => a.filename.localeCompare(b.filename));
}

async function readmeFor(repo) {
  const result = await github(`/repos/${owner}/${repo.name}/readme`, {
    optional: true,
    raw: true,
    headers: { "Accept": "application/vnd.github.raw" }
  });
  return result || "";
}

async function repoCommits(repo) {
  const commits = await github(
    `/repos/${owner}/${repo.name}/commits?since=${encodeURIComponent(startIso)}&until=${encodeURIComponent(endIso)}&per_page=100`,
    { optional: true }
  );

  if (!Array.isArray(commits)) return [];

  const detailed = [];
  for (const commit of commits) {
    const detail = await github(`/repos/${owner}/${repo.name}/commits/${commit.sha}`, { optional: true });
    detailed.push({
      sha: commit.sha,
      shortSha: commit.sha.slice(0, 7),
      url: commit.html_url,
      message: commit.commit?.message?.split("\n")[0] || "待补充",
      committedAt: commit.commit?.committer?.date || commit.commit?.author?.date || null,
      files: (detail?.files || []).map((file) => ({
        filename: file.filename,
        status: file.status,
        additions: file.additions || 0,
        deletions: file.deletions || 0,
        changes: file.changes || 0
      }))
    });
  }

  return detailed;
}

async function languagesFor(repo) {
  const result = await github(`/repos/${owner}/${repo.name}/languages`, { optional: true });
  return result || {};
}

function statusFromText(matches, detectedNote, missingNote) {
  return {
    status: matches.length > 0 ? "detected" : "not_detected",
    label: matches.length > 0 ? "已检测到" : "未检测到",
    note: matches.length > 0 ? detectedNote(matches) : missingNote
  };
}

async function main() {
  const repos = await paginate(`/users/${owner}/repos?type=owner&sort=created&direction=desc`);
  const candidates = [];

  for (const repo of repos) {
    if (repo.private || repo.fork || repo.archived || repo.name === dashboardRepo) continue;
    const readme = await readmeFor(repo);
    const isFunByName = /^fun-/i.test(repo.name);
    const isFunByReadme = funReadmeSignals.some((pattern) => pattern.test(readme));
    if (!isFunByName && !isFunByReadme) continue;
    candidates.push({ repo, readme });
  }

  const projects = [];

  for (const item of candidates) {
    const { repo, readme } = item;
    const [commits, languages] = await Promise.all([repoCommits(repo), languagesFor(repo)]);
    const readmeInfo = extractReadmeInfo(readme, repo.description || "");
    const createdDateShanghai = dateInShanghai(repo.created_at);
    const updatedDateShanghai = dateInShanghai(repo.updated_at);
    const todayFiles = summarizeFiles(commits.flatMap((commit) => commit.files));
    const todayCommitCount = commits.length;
    const createdToday = createdDateShanghai === runDate;
    const updatedToday = todayCommitCount > 0 || updatedDateShanghai === runDate;
    const needsReview = [
      readmeInfo.oneLine,
      readmeInfo.usefulness,
      readmeInfo.whyFun,
      readmeInfo.runCommand,
      readmeInfo.verification
    ].some((value) => value === "待补充");

    projects.push({
      name: repo.name,
      url: repo.html_url,
      description: repo.description || "待补充",
      defaultBranch: repo.default_branch,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      createdDateShanghai,
      updatedDateShanghai,
      primaryLanguage: repo.language || "待补充",
      languages,
      type: inferType(repo.name, readme, repo.description || ""),
      readme: readmeInfo,
      today: {
        created: createdToday,
        updated: updatedToday,
        commitCount: todayCommitCount,
        commits,
        files: todayFiles
      },
      needsReview,
      visibilitySource: "GitHub public repository data"
    });
  }

  projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const techDistribution = projects.reduce((acc, project) => {
    acc[project.primaryLanguage] = (acc[project.primaryLanguage] || 0) + 1;
    return acc;
  }, {});

  const todayNewProjects = projects.filter((project) => project.today.created);
  const todayUpdatedProjects = projects.filter((project) => project.today.updated);
  const oldMaintenance = projects.filter((project) => !project.today.created && project.today.commitCount > 0);
  const todayCommits = projects.flatMap((project) => project.today.commits.map((commit) => ({
    ...commit,
    project: project.name,
    projectUrl: project.url
  })));
  const commitText = todayCommits.map((commit) => commit.message).join("\n");
  const wednesdayMatches = todayCommits.filter((commit) => /周三|wednesday|加料|extra|bonus/i.test(commit.message));
  const sundayMatches = todayCommits.filter((commit) => /周日|sunday|体检|health|audit|复查/i.test(commit.message));

  const highlights = todayUpdatedProjects
    .slice()
    .sort((a, b) => b.today.commitCount - a.today.commitCount || new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4)
    .map((project) => ({
      name: project.name,
      url: project.url,
      reason: project.today.created
        ? `今天新建；${project.readme.oneLine}`
        : `今天更新 ${project.today.commitCount} 个 commit；${project.readme.oneLine}`
    }));

  const data = {
    meta: {
      title: `${runDate} 每日趣味项目总览仪表盘`,
      owner,
      repository: dashboardRepo,
      repositoryUrl: `https://github.com/${owner}/${dashboardRepo}`,
      runDate,
      timezone: "Asia/Shanghai",
      generatedAt: new Date().toISOString(),
      generatedAtShanghaiDate: dateInShanghai(new Date().toISOString()),
      source: "GitHub public repository API",
      scanRule: "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
      todayWindowUtc: { startIso, endIso },
      todayStory: todayUpdatedProjects.length
        ? `今天公开仓库中检测到 ${todayNewProjects.length} 个新建项目、${todayUpdatedProjects.length} 个今日有变动的项目，共 ${todayCommits.length} 个 commit。`
        : "今天未检测到公开趣味项目仓库的可见变动。",
      automationChecks: {
        dailyIncubator: statusFromText(
          todayNewProjects,
          (matches) => `公开 fun-* 仓库中检测到 ${matches.length} 个今天创建的项目。`,
          "未检测到今天新建的公开 fun-* 项目。"
        ),
        oldProjectMaintenance: statusFromText(
          oldMaintenance,
          (matches) => `检测到 ${matches.length} 个旧项目今天有公开 commit。`,
          "未检测到今天维护旧项目的公开 commit。"
        ),
        wednesdayBooster: statusFromText(
          wednesdayMatches,
          (matches) => `检测到 ${matches.length} 个疑似周三加料相关 commit。`,
          `未检测到周三加料结果；今日 commit 信息为：${commitText ? "有提交但无加料标识" : "无可见提交"}。`
        ),
        sundayHealthCheck: statusFromText(
          sundayMatches,
          (matches) => `检测到 ${matches.length} 个疑似周日体检相关 commit。`,
          "未检测到周日体检结果。"
        )
      },
      highlights
    },
    metrics: {
      totalProjects: projects.length,
      todayNew: todayNewProjects.length,
      todayUpdated: todayUpdatedProjects.length,
      todayCommits: todayCommits.length,
      needsReview: projects.filter((project) => project.needsReview).length,
      techDistribution
    },
    projects
  };

  await mkdir("data", { recursive: true });
  await writeFile("data/projects.json", `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await writeFile(
    "data/projects.js",
    `window.FUN_PROJECT_DASHBOARD_DATA = ${JSON.stringify(data, null, 2)};\n`,
    "utf8"
  );

  console.log(JSON.stringify(data.metrics, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
