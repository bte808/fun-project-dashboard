# 每日趣味项目总览仪表盘

这是 `bte808` 账号下每日趣味项目体系的公开总览页。它只负责汇总和展示已经发布的公开项目，不负责孵化新玩具，也不修改旧项目功能。

## 能干嘛

- 汇总 `fun-*` 公开仓库，以及 README 明确属于每日趣味项目体系的公开仓库。
- 展示项目数、今日新建、今日更新、今日 commit 数、需要复查项目数和技术分布。
- 按日期展示项目时间线，按项目卡片展示仓库链接、用途、趣味点、运行方式、验证线索和今日文件变动。
- 支持搜索、技术筛选、类型筛选、排序、今日更新 / 全部项目 / 需要复查视图切换，以及项目详情展开。
- 搜索会把项目名里的连字符、下划线和斜线当作空格处理，输入 `unit lens` 也能找到 `fun-20260525-c-unit-lens`。
- 一键复制当天摘要，方便把项目数、新建/维护状态和值得点开的项目贴进日报或聊天。

## 有什么用

每天的趣味项目会越来越多，单靠仓库列表很难看出今天发生了什么。这个页面把公开 GitHub 数据整理成一个可扫读的仪表盘，帮助快速判断今天新增了哪些项目、哪些旧项目被维护、哪些 README 或验证信息还需要补齐。

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

补充静态校验：

```bash
node --check scripts/collect-public-data.mjs
node --check scripts/smoke-test.mjs
git diff --check
```

## 数据从哪里来

数据来自 GitHub 公开仓库 API，只读取 `bte808` 账号的公开仓库、公开 README、公开 commit 和公开文件变动摘要。仪表盘仓库 `fun-project-dashboard` 会从项目统计中排除，但会在页面 footer 标注版本和最近更新时间。

采集规则：

- 仓库名匹配 `fun-*`。
- 或 README 中明确出现每日趣味项目体系相关描述。
- 不采集本机私有路径、隐私文件、token、登录态数据或非公开仓库内容。

## 每天什么时候更新

该仓库由每日自动化任务更新。每次运行会按 Asia/Shanghai 日期生成当天数据，并提交类似 `Update project dashboard for YYYY-MM-DD` 的 commit。

## 最近一次自动刷新

- 日期：2026-05-27（Asia/Shanghai）
- 最近更新时间：2026-05-27 22:03:02
- 公开项目总数：21
- 今日新建项目：3
- 今日更新项目：6
- 今日公开 commit：9
- 公开检测结果：每日孵化已检测到 3 个今天创建的项目；旧项目维护已检测到 3 个旧项目今天有公开 commit；周三加料未检测到；周日体检未检测到。

手动刷新数据：

```bash
RUN_DATE=YYYY-MM-DD npm run collect
npm run check
```

如果要让采集更稳定，可以临时传入 `GITHUB_TOKEN`，它只用于读取公开仓库 API，不会写入数据文件。

采集脚本现在会在遇到 GitHub API 限流、短暂失败或单仓库详情获取异常时保留更多上下文；如果只是某个仓库的 README、commit 或 language 信息获取失败，会把告警写入生成数据的 `meta.collectionWarnings`，而不是直接让整轮数据生成中断。

## 来源区

- GitHub public repository API
- `bte808` 公开仓库 README 与公开 commit 数据
