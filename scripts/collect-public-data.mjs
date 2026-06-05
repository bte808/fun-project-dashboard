import { execFileSync } from "node:child_process";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const owner = process.env.GITHUB_OWNER || "bte808";
const dashboardRepo = process.env.DASHBOARD_REPO || "fun-project-dashboard";
const runDate = process.env.RUN_DATE || dateInShanghai(new Date().toISOString());
const runDateWeekday = new Date(`${runDate}T12:00:00Z`).getUTCDay();
const isRunDateWednesday = runDateWeekday === 3;
const isRunDateSunday = runDateWeekday === 0;
const apiBase = "https://api.github.com";
const token = process.env.GITHUB_TOKEN || "";
const startIso = new Date(`${runDate}T00:00:00+08:00`).toISOString();
const endIso = new Date(`${runDate}T23:59:59.999+08:00`).toISOString();
const maxGithubRetries = Number(process.env.GITHUB_MAX_RETRIES || 2);
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = process.env.LOCAL_FUN_REPO_ROOT
  || path.resolve(scriptDir, "..", "..");
const evidencePath = path.resolve(scriptDir, "..", "data", "evidence.json");

const funReadmeSignals = [
  /每日趣味项目/,
  /趣味项目孵化/,
  /daily fun project/i,
  /shipped toy/i
];

function isExcludedRepository(repoName = "") {
  const normalized = repoName.toLowerCase();
  return normalized === dashboardRepo.toLowerCase()
    || normalized === owner.toLowerCase();
}

function headers(extra = {}) {
  return {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "fun-project-dashboard",
    ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    ...extra
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function rateLimitSummary(response) {
  const remaining = response.headers.get("x-ratelimit-remaining");
  const reset = response.headers.get("x-ratelimit-reset");
  if (!remaining && !reset) return "";

  const resetIso = reset ? new Date(Number(reset) * 1000).toISOString() : "unknown";
  return ` rate_limit_remaining=${remaining ?? "unknown"} reset_at=${resetIso}`;
}

function shouldRetryStatus(status, text = "") {
  return status === 429
    || status === 502
    || status === 503
    || status === 504
    || (status === 403 && /rate limit|secondary rate limit/i.test(text));
}

async function github(path, options = {}) {
  const attempts = options.retries ?? maxGithubRetries;

  for (let attempt = 0; attempt <= attempts; attempt += 1) {
    let response;
    try {
      response = await fetch(`${apiBase}${path}`, {
        headers: headers(options.headers || {})
      });
    } catch (error) {
      if (attempt < attempts) {
        await sleep(400 * (attempt + 1));
        continue;
      }
      throw new Error(`GitHub request failed for ${path}: ${error.message}`);
    }

    if (response.status === 404 && options.optional) {
      return null;
    }

    if (!response.ok) {
      const text = await response.text();
      if (attempt < attempts && shouldRetryStatus(response.status, text)) {
        await sleep(500 * (attempt + 1));
        continue;
      }
      throw new Error(
        `GitHub API ${response.status} for ${path}:${rateLimitSummary(response)} ${text.slice(0, 240)}`.trim()
      );
    }

    if (options.raw) {
      return response.text();
    }

    return response.json();
  }

  throw new Error(`GitHub request exhausted retries for ${path}`);
}

async function paginate(path, options = {}) {
  const items = [];
  for (let page = 1; page <= 10; page += 1) {
    const connector = path.includes("?") ? "&" : "?";
    const batch = await github(`${path}${connector}per_page=100&page=${page}`, options);
    if (!Array.isArray(batch)) break;
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
  if (/meeting|brief|link|janitor|rename|blueprint/.test(name)) return "效率工具";
  if (/pulse-poem|orbit-mods/.test(name) || /\b(audio|music|rhythm|sequencer)\b|orbit sequencer/.test(haystack)) return "音频互动";
  if (/time-heist|dice-target|signal-bento|hue-chain|trace-tap/.test(name)) return "浏览器小游戏";
  if (/claim|ledger/.test(name) || /\bacademic[- ]writing\b|\bevidence ledger\b/.test(haystack)) return "文字创作";
  if (/concept|learn|study|quiz|bridge|c语言|c concept|recall prompt/.test(haystack)) return "学习练习";
  if (/dice|puzzle|game|route|signal|chain|tap|hue|color|time heist/.test(haystack)) return "浏览器小游戏";
  if (/meeting|notes|brief|action/.test(haystack)) return "效率工具";
  if (/poem|writing|story|poetry|text/.test(haystack)) return "文字创作";
  return "互动小品";
}

function extractReadmeInfo(readme, description) {
  const oneLineSection = section(readme, [/一句话/, /what it is/i, /overview/i, /简介/, /是什么/]);
  const useSection = section(readme, [/能干嘛/, /有什么用/, /use/i, /why/i, /purpose/i, /玩法/, /how it works/i]);
  const funSection = section(readme, [/为什么好玩/, /why.*fun/i, /fun/i, /亮点/, /highlights/i]);
  const runSection = section(readme, [/如何运行/, /本地运行/, /run/i, /usage/i, /start/i, /验证/, /verification/i]);
  const verificationSection = section(readme, [/验证/, /validation/i, /verification/i, /checks/i, /test/i]);

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

async function todayStarsFor(repo) {
  if (!repo.stargazers_count) return [];

  const stargazers = await paginate(`/repos/${owner}/${repo.name}/stargazers`, {
    optional: true,
    headers: { "Accept": "application/vnd.github.star+json" }
  });

  return stargazers
    .filter((entry) => entry.starred_at && entry.starred_at >= startIso && entry.starred_at <= endIso)
    .map((entry) => ({
      starredAt: entry.starred_at,
      user: entry.user?.login || "unknown"
    }));
}

function git(args, cwd) {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"]
  });
}

function tryGit(args, cwd) {
  try {
    return git(args, cwd).trim();
  } catch {
    return "";
  }
}

function normalizeGithubUrl(value = "") {
  const trimmed = value.trim();
  const sshMatch = trimmed.match(/^git@github\.com:([^/]+)\/(.+?)(?:\.git)?$/i);
  const httpsMatch = trimmed.match(/^https:\/\/github\.com\/([^/]+)\/(.+?)(?:\.git)?$/i);
  const match = sshMatch || httpsMatch;
  if (!match) return null;
  return {
    owner: match[1],
    name: match[2],
    htmlUrl: `https://github.com/${match[1]}/${match[2]}`
  };
}

async function readPreviousData() {
  try {
    return JSON.parse(await readFile("data/projects.json", "utf8"));
  } catch {
    return { projects: [] };
  }
}

function previousProjectMap(previousData) {
  return new Map((previousData.projects || []).map((project) => [project.name, project]));
}

function isoFromGitDate(value) {
  return value ? new Date(value).toISOString() : null;
}

function earliestIso(...values) {
  return values
    .filter(Boolean)
    .sort((a, b) => new Date(a) - new Date(b))[0] || null;
}

function localCommitFiles(repoPath, sha) {
  const statusLines = tryGit(["diff-tree", "--root", "--no-commit-id", "--name-status", "-r", sha], repoPath)
    .split(/\r?\n/)
    .filter(Boolean);
  const statusMap = new Map();

  for (const line of statusLines) {
    const parts = line.split("\t");
    const statusToken = parts[0] || "modified";
    const filename = parts[parts.length - 1] || "";
    const status = statusToken.startsWith("A")
      ? "added"
      : statusToken.startsWith("D")
        ? "removed"
        : statusToken.startsWith("R")
          ? "renamed"
          : "modified";
    if (filename) statusMap.set(filename, status);
  }

  return tryGit(["show", "--format=", "--numstat", sha], repoPath)
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const [additions, deletions, ...rest] = line.split("\t");
      const filename = rest.join("\t");
      const added = Number.parseInt(additions, 10);
      const removed = Number.parseInt(deletions, 10);
      return {
        filename,
        status: statusMap.get(filename) || "modified",
        additions: Number.isFinite(added) ? added : 0,
        deletions: Number.isFinite(removed) ? removed : 0,
        changes: (Number.isFinite(added) ? added : 0) + (Number.isFinite(removed) ? removed : 0)
      };
    });
}

function localCommits(repoPath, repoUrl) {
  const output = tryGit([
    "log",
    `--since=${startIso}`,
    `--until=${endIso}`,
    "--pretty=format:%H%x1f%cI%x1f%s%x1e"
  ], repoPath);

  return output
    .split("\x1e")
    .map((record) => record.trim())
    .filter(Boolean)
    .map((record) => {
      const [sha, committedAt, message] = record.split("\x1f");
      return {
        sha,
        shortSha: sha.slice(0, 7),
        url: `${repoUrl}/commit/${sha}`,
        message: message || "待补充",
        committedAt: isoFromGitDate(committedAt),
        files: localCommitFiles(repoPath, sha)
      };
    });
}

async function trackedLanguageBytes(repoPath) {
  const extensionLanguages = new Map([
    [".js", "JavaScript"],
    [".mjs", "JavaScript"],
    [".cjs", "JavaScript"],
    [".ts", "TypeScript"],
    [".tsx", "TypeScript"],
    [".jsx", "JavaScript"],
    [".css", "CSS"],
    [".html", "HTML"],
    [".svg", "SVG"],
    [".py", "Python"],
    [".swift", "Swift"],
    [".json", "JSON"],
    [".md", "Markdown"]
  ]);
  const files = tryGit(["ls-files", "-z"], repoPath)
    .split("\0")
    .filter(Boolean);
  const languages = {};

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const language = extensionLanguages.get(ext);
    if (!language) continue;
    try {
      const info = await stat(path.join(repoPath, file));
      languages[language] = (languages[language] || 0) + info.size;
    } catch {
      // Ignore files that disappeared from the local checkout.
    }
  }

  return languages;
}

function packageDescription(repoPath) {
  try {
    const raw = execFileSync("git", ["show", "HEAD:package.json"], {
      cwd: repoPath,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    });
    return JSON.parse(raw).description || "";
  } catch {
    return "";
  }
}

function localReadme(repoPath) {
  return tryGit(["show", "HEAD:README.md"], repoPath)
    || tryGit(["show", "HEAD:readme.md"], repoPath)
    || "";
}

function localFirstCommitDate(repoPath) {
  const rootSha = tryGit(["rev-list", "--max-parents=0", "HEAD"], repoPath)
    .split(/\s+/)
    .filter(Boolean)[0];
  return rootSha ? tryGit(["show", "-s", "--format=%cI", rootSha], repoPath) : "";
}

function defaultBranch(repoPath, previous) {
  const head = tryGit(["symbolic-ref", "--quiet", "--short", "refs/remotes/origin/HEAD"], repoPath)
    .replace(/^origin\//, "");
  return head || previous?.defaultBranch || tryGit(["rev-parse", "--abbrev-ref", "HEAD"], repoPath) || "main";
}

async function localMirrorCandidates(previousData) {
  const entries = await readdir(workspaceRoot, { withFileTypes: true });
  const candidates = [];
  const previous = previousProjectMap(previousData);

  for (const entry of entries) {
    if (!entry.isDirectory() || !/^fun-/i.test(entry.name) || entry.name === dashboardRepo) continue;
    const repoPath = path.join(workspaceRoot, entry.name);
    const origin = normalizeGithubUrl(tryGit(["remote", "get-url", "origin"], repoPath));
    if (!origin || origin.owner !== owner || origin.name !== entry.name) continue;
    const readme = localReadme(repoPath);
    const isFunByReadme = funReadmeSignals.some((pattern) => pattern.test(readme));
    if (!/^fun-/i.test(entry.name) && !isFunByReadme) continue;

    candidates.push({
      name: entry.name,
      path: repoPath,
      url: origin.htmlUrl,
      previous: previous.get(entry.name),
      readme
    });
  }

  return candidates;
}

async function collectFromLocalMirrors(apiError) {
  const previousData = await readPreviousData();
  const evidenceHighlights = await readEvidenceHighlights();
  const candidates = await localMirrorCandidates(previousData);
  const projects = [];

  for (const candidate of candidates) {
    const latestCommitDate = tryGit(["log", "-1", "--format=%cI"], candidate.path);
    const firstCommitDate = localFirstCommitDate(candidate.path);
    const commits = localCommits(candidate.path, candidate.url);
    const languages = await trackedLanguageBytes(candidate.path);
    const readmeInfo = extractReadmeInfo(candidate.readme, candidate.previous?.description || packageDescription(candidate.path));
    const createdAt = earliestIso(candidate.previous?.createdAt, isoFromGitDate(firstCommitDate))
      || new Date(0).toISOString();
    const updatedAt = isoFromGitDate(latestCommitDate) || candidate.previous?.updatedAt || createdAt;
    const createdDateShanghai = dateInShanghai(createdAt);
    const updatedDateShanghai = dateInShanghai(updatedAt);
    const todayFiles = summarizeFiles(commits.flatMap((commit) => commit.files));
    const todayCommitCount = commits.length;
    const description = packageDescription(candidate.path)
      || candidate.previous?.description
      || (readmeInfo.oneLine !== "待补充" ? readmeInfo.oneLine : "待补充");
    const primaryLanguage = candidate.previous?.primaryLanguage
      || Object.entries(languages).sort((a, b) => b[1] - a[1])[0]?.[0]
      || "待补充";
    const needsReview = [
      readmeInfo.oneLine,
      readmeInfo.usefulness,
      readmeInfo.whyFun,
      readmeInfo.runCommand,
      readmeInfo.verification
    ].some((value) => value === "待补充");

    projects.push({
      name: candidate.name,
      url: candidate.url,
      description,
      defaultBranch: defaultBranch(candidate.path, candidate.previous),
      createdAt,
      updatedAt,
      createdDateShanghai,
      updatedDateShanghai,
      primaryLanguage,
      languages: Object.keys(languages).length ? languages : candidate.previous?.languages || {},
      type: inferType(candidate.name, candidate.readme, description),
      stars: {
        total: candidate.previous?.stars?.total || 0,
        todayDelta: 0,
        todayStargazers: []
      },
      readme: readmeInfo,
      today: {
        created: createdDateShanghai === runDate,
        updated: todayCommitCount > 0 || updatedDateShanghai === runDate,
        commitCount: todayCommitCount,
        commits,
        files: todayFiles
      },
      needsReview,
      visibilitySource: "Local GitHub origin mirror; public API unavailable this run"
    });
  }

  return buildData(projects, [
    `GitHub API 获取失败，已降级使用本机 GitHub origin 镜像：${apiError.message}`,
    "本轮无法刷新公开可见性、仓库描述、GitHub updated_at、总 star 或今日 star 变化；star 沿用上一轮公开快照，新仓库按 0 处理。"
  ], "Local GitHub origin mirrors with previous public snapshot fallback", evidenceHighlights);
}

function statusFromText(matches, detectedNote, missingNote) {
  return {
    status: matches.length > 0 ? "detected" : "not_detected",
    label: matches.length > 0 ? "已检测到" : "未检测到",
    note: matches.length > 0 ? detectedNote(matches) : missingNote
  };
}

async function readEvidenceHighlights() {
  try {
    const raw = await readFile(evidencePath, "utf8");
    const parsed = JSON.parse(raw);
    const highlights = Array.isArray(parsed.highlights) ? parsed.highlights : [];
    return highlights
      .filter((item) => (!item.date || item.date === runDate) && item.name && item.url && item.reason)
      .map((item) => ({
        name: item.name,
        url: item.url,
        reason: item.reason,
        status: item.status || "evidence",
        kind: item.kind || "evidence"
      }));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw new Error(`Evidence highlights invalid: ${error.message}`);
  }
}

function buildData(projects, collectionWarnings = [], source = "GitHub public repository API", evidenceHighlights = []) {
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
  const totalStars = projects.reduce((sum, project) => sum + project.stars.total, 0);
  const todayStarDelta = projects.reduce((sum, project) => sum + project.stars.todayDelta, 0);
  const commitText = todayCommits.map((commit) => commit.message).join("\n");
  const wednesdayMatches = isRunDateWednesday
    ? todayCommits.filter((commit) => /周三|wednesday|加料|extra|bonus/i.test(commit.message))
    : [];
  const sundayMatches = isRunDateSunday
    ? todayCommits.filter((commit) => /周日|sunday|体检|health|audit|复查|weekly check/i.test(commit.message))
    : [];
  const wednesdayMissingNote = isRunDateWednesday
    ? `未检测到周三加料结果；今日 commit 信息为：${commitText ? "有提交但无加料标识" : "无可见提交"}。`
    : "今天不是周三，跳过周三加料检测。";
  const sundayMissingNote = isRunDateSunday
    ? "未检测到周日体检结果。"
    : "今天不是周日，跳过周日体检检测。";

  const projectHighlights = todayUpdatedProjects
    .slice()
    .sort((a, b) => b.today.commitCount - a.today.commitCount || new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4)
    .map((project) => ({
      name: project.name,
      url: project.url,
      status: project.today.created ? "new" : "updated",
      kind: "project",
      reason: project.today.created
        ? `今天新建；${project.readme.oneLine}；当前 ${project.stars.total} star`
        : `今天更新 ${project.today.commitCount} 个 commit；${project.readme.oneLine}；当前 ${project.stars.total} star`
    }));
  const highlights = [...evidenceHighlights, ...projectHighlights].slice(0, 14);
  const evidenceStory = evidenceHighlights.length
    ? `；另有 ${evidenceHighlights.length} 条外部 OSS/release 证据置顶`
    : "";

  return {
    meta: {
      title: `${runDate} 每日趣味项目总览仪表盘`,
      owner,
      repository: dashboardRepo,
      repositoryUrl: `https://github.com/${owner}/${dashboardRepo}`,
      runDate,
      timezone: "Asia/Shanghai",
      generatedAt: new Date().toISOString(),
      generatedAtShanghaiDate: dateInShanghai(new Date().toISOString()),
      source,
      scanRule: "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard and profile repos excluded from project stats.",
      todayWindowUtc: { startIso, endIso },
      todayStory: todayUpdatedProjects.length
        ? `今天公开仓库中检测到 ${todayNewProjects.length} 个新建项目、${todayUpdatedProjects.length} 个今日有变动的项目，共 ${todayCommits.length} 个 commit${evidenceStory}；当前总 star ${totalStars}，今日可见 star 变化 +${todayStarDelta}。`
        : `今天未检测到公开趣味项目仓库的可见变动${evidenceStory}；当前总 star ${totalStars}，今日可见 star 变化 +${todayStarDelta}。`,
      starChangeNote: source === "GitHub public repository API"
        ? "今日 star 变化按 GitHub stargazers 公开 starred_at 时间戳估算；公开 API 无法识别当天已取消的 star。"
        : "本轮 GitHub API 不可用，今日 star 变化无法确认；页面保留上一轮公开快照中的总 star，新项目按 0 处理。",
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
          wednesdayMissingNote
        ),
        sundayHealthCheck: statusFromText(
          sundayMatches,
          (matches) => `检测到 ${matches.length} 个疑似周日体检相关 commit。`,
          sundayMissingNote
        )
      },
      highlights,
      collectionWarnings
    },
    metrics: {
      totalProjects: projects.length,
      todayNew: todayNewProjects.length,
      todayUpdated: todayUpdatedProjects.length,
      todayCommits: todayCommits.length,
      totalStars,
      todayStarDelta,
      needsReview: projects.filter((project) => project.needsReview).length,
      techDistribution
    },
    projects
  };
}

async function writeDashboardData(data) {
  await mkdir("data", { recursive: true });
  await writeFile("data/projects.json", `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await writeFile(
    "data/projects.js",
    `window.FUN_PROJECT_DASHBOARD_DATA = ${JSON.stringify(data, null, 2)};\n`,
    "utf8"
  );

  console.log(JSON.stringify(data.metrics, null, 2));
}

async function main() {
  let repos;
  try {
    repos = await paginate(`/users/${owner}/repos?type=owner&sort=created&direction=desc`);
  } catch (error) {
    const data = await collectFromLocalMirrors(error);
    await writeDashboardData(data);
    return;
  }

  const candidates = [];
  const collectionWarnings = [];

  for (const repo of repos) {
    if (repo.private || repo.fork || repo.archived || isExcludedRepository(repo.name)) continue;
    let readme = "";
    try {
      readme = await readmeFor(repo);
    } catch (error) {
      collectionWarnings.push(`README 获取失败 ${repo.name}: ${error.message}`);
    }
    const isFunByName = /^fun-/i.test(repo.name);
    const isFunByReadme = funReadmeSignals.some((pattern) => pattern.test(readme));
    if (!isFunByName && !isFunByReadme) continue;
    candidates.push({ repo, readme });
  }

  const projects = [];
  const evidenceHighlights = await readEvidenceHighlights();

  for (const item of candidates) {
    const { repo, readme } = item;
    const repoWarnings = [];
    const [commitsResult, languagesResult, starsResult] = await Promise.allSettled([
      repoCommits(repo),
      languagesFor(repo),
      todayStarsFor(repo)
    ]);
    const commits = commitsResult.status === "fulfilled" ? commitsResult.value : [];
    const languages = languagesResult.status === "fulfilled" ? languagesResult.value : {};
    const todayStars = starsResult.status === "fulfilled" ? starsResult.value : [];

    if (commitsResult.status === "rejected") {
      repoWarnings.push(`commit 获取失败: ${commitsResult.reason.message}`);
    }

    if (languagesResult.status === "rejected") {
      repoWarnings.push(`language 获取失败: ${languagesResult.reason.message}`);
    }

    if (starsResult.status === "rejected") {
      repoWarnings.push(`star 获取失败: ${starsResult.reason.message}`);
    }

    if (repoWarnings.length) {
      collectionWarnings.push(`${repo.name}: ${repoWarnings.join("；")}`);
    }

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
      stars: {
        total: repo.stargazers_count || 0,
        todayDelta: todayStars.length,
        todayStargazers: todayStars
      },
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

  const data = buildData(projects, collectionWarnings, "GitHub public repository API", evidenceHighlights);
  await writeDashboardData(data);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
