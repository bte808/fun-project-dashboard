# 每日趣味项目总览仪表盘

[![Dashboard CI](https://github.com/bte808/fun-project-dashboard/workflows/Dashboard%20CI/badge.svg)](https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml)
[![Pages deployment](https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment)
[在线仪表盘](https://bte808.github.io/fun-project-dashboard/) · [Reviewer packet](https://github.com/bte808/fun-project-dashboard/blob/main/docs/reviewer-packet.md) · [申请证据 brief](https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md) · [OSS 贡献记录](https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md) · [贡献指南](CONTRIBUTING.md) · [安全说明](SECURITY.md)

这是 `bte808` 账号下每日趣味项目体系的公开总览页。它只负责汇总和展示已经发布的公开项目，不负责孵化新玩具，也不修改旧项目功能。

在线访问：https://bte808.github.io/fun-project-dashboard/

## 能干嘛

- 汇总 `fun-*` 公开仓库，以及 README 明确属于每日趣味项目体系的公开仓库。
- 展示项目数、今日新建、今日更新、今日 commit 数、总 star、今日 star 变化、需要复查项目数和技术分布。
- 按日期展示项目时间线，按项目卡片展示仓库链接、用途、趣味点、运行方式、验证线索、star 和今日文件变动。
- 支持搜索、技术筛选、类型筛选、排序、今日更新 / 全部项目 / 需要复查视图切换，以及项目详情展开。
- 搜索会把项目名里的连字符、下划线和斜线当作空格处理，输入 `unit lens` 也能找到 `fun-20260525-c-unit-lens`。
- 一键复制当天摘要，方便把项目数、新建/维护状态和值得点开的项目贴进日报或聊天。

## 有什么用

每天的趣味项目会越来越多，单靠仓库列表很难看出今天发生了什么。这个页面把公开 GitHub 数据整理成一个可扫读的仪表盘，帮助快速判断今天新增了哪些项目、哪些旧项目被维护、哪些项目值得 star，以及哪些 README 或验证信息还需要补齐。

## 为什么好玩

它把一串零散的小玩具变成一条可视化时间线：可以看到每天的项目主题、技术栈偏好和当天 commit 轨迹，也能直接筛出最值得点开的项目。

## 如何本地打开

可以直接双击 `index.html` 打开。因为数据同时写入 `data/projects.js`，页面不需要后端服务也能读取数据。

也可以用简单静态服务器打开：

```bash
python3 -m http.server 5173
```

然后访问 `http://localhost:5173`。

## 如何验证

仓库默认验证命令：

```bash
npm run check
```

它会同时检查这些内容：

- `data/projects.json` 和 `data/projects.js` 是否一致。
- `index.html` 是否仍然加载本地数据、包含关键 UI 文案和复制摘要逻辑。
- 页面内联脚本是否还能被解析。
- 使用 macOS 自带 `WKWebView` 在真实浏览器排版引擎下打开 `index.html`，执行搜索、切换到“需要复查”、展开详情等真实交互路径。
- 在 `390x844` 移动视口下检查 `scrollWidth`，防止横向 overflow 回归。
- 如果当前沙箱阻止 `WKWebView` 写入系统缓存或加载本地页面，会自动降级到 Node 内的轻量 DOM 交互烟测，继续覆盖搜索、视图切换、详情展开、技术筛选和数据提示渲染。

补充静态校验：

```bash
node --check scripts/collect-public-data.mjs
node --check scripts/collect-oss-contributions.mjs
node --check scripts/build-application-brief.mjs
node --check scripts/check-release-alignment.mjs
node --check scripts/smoke-test.mjs
npm run check:release
git diff --check
```

GitHub Actions 会在 push、PR 和手动触发时运行同一组静态校验，并使用 `DASHBOARD_DOM_SMOKE_ONLY=1 npm run check` 验证已提交的数据快照。这个模式跳过 macOS 专属的 `WKWebView` 真机烟测，适合 Ubuntu CI；本机默认的 `npm run check` 仍会优先覆盖真实浏览器排版引擎。

## 项目治理

- 代码以 [MIT License](LICENSE) 发布。
- 贡献前请先看 [CONTRIBUTING.md](CONTRIBUTING.md)，尤其是公开数据边界和验证命令。
- 安全或隐私问题请按 [SECURITY.md](SECURITY.md) 处理，不要把 token、私有路径或敏感细节贴到公开 issue。
- 讨论和协作默认遵守 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)。

## 数据从哪里来

首选数据来自 GitHub 公开仓库 API，只读取 `bte808` 账号的公开仓库、公开 README、公开 commit、公开 stargazers 和公开文件变动摘要。仪表盘仓库 `fun-project-dashboard` 会从项目统计中排除，但会在页面 footer 标注版本和最近更新时间。

如果 GitHub API 在自动化运行环境中不可用，采集脚本会降级扫描本机已存在、且 `origin` 明确指向 `github.com/bte808/fun-*` 的 Git 仓库镜像。降级模式只读取已提交内容和上一轮公开快照，不把本机路径写入页面；无法刷新的公开可见性、仓库描述和 star 变化会写入 `meta.collectionWarnings`。

采集规则：

- 仓库名匹配 `fun-*`。
- 或 README 中明确出现每日趣味项目体系相关描述。
- 今日 star 变化按 GitHub `stargazers` 公开 `starred_at` 时间戳估算；公开 API 无法识别当天已经取消的 star。
- 额外 OSS 申请证据可放在 `data/evidence.json`，采集脚本会把匹配当天日期的外部 PR、release 或维护记录合并到“值得点开”列表。
- 外部 OSS PR 状态列表来自 `data/oss-prs.json`，可用 `npm run collect:oss` 重新生成 `data/oss-contributions.json`、`data/oss-contributions.js` 和 `docs/oss-contribution-log.md`。
- 不采集本机私有路径、隐私文件、token、登录态数据或非公开仓库内容。

## 每天什么时候更新

该仓库由每日自动化任务更新。每次运行会按 Asia/Shanghai 日期生成当天数据，并提交类似 `Update project dashboard for YYYY-MM-DD` 的 commit。

## 最近一次自动刷新

- 日期：2026-06-05（Asia/Shanghai）
- 最近更新时间：2026-06-05 15:57:48
- 公开项目总数：48
- 今日新建项目：0
- 今日更新项目：2
- 今日公开 commit：2
- 总 star：0
- 今日可见 star 变化：+0（按 GitHub 公开 stargazers 数据估算；无法识别当天已取消的 star）
- 公开检测结果：今日检测到 Star Sling 和 Safe Payout Card 维护提交；另有 12 条 OSS/release 证据置顶，包括 4 个已 merged 的外部 OSS PR、fun-project-dashboard v0.2.4、多个待评审 PR 和近期 release。

手动刷新数据：

```bash
RUN_DATE=YYYY-MM-DD npm run collect
GITHUB_TOKEN="$(gh auth token)" npm run collect:oss
npm run brief
npm run check
npm run check:release
DASHBOARD_DOM_SMOKE_ONLY=1 npm run check
```

如果要让采集更稳定，可以临时传入 `GITHUB_TOKEN`，它只用于读取公开仓库 API，不会写入数据文件。

采集脚本现在会在遇到 GitHub API 限流、短暂失败或单仓库详情获取异常时保留更多上下文；如果只是某个仓库的 README、commit 或 language 信息获取失败，会把告警写入生成数据的 `meta.collectionWarnings`，而不是直接让整轮数据生成中断。

## 来源区

- GitHub public repository API
- `bte808` 公开仓库 README 与公开 commit 数据
