window.FUN_PROJECT_DASHBOARD_DATA = {
  "meta": {
    "title": "2026-05-24 每日趣味项目总览仪表盘",
    "owner": "bte808",
    "repository": "fun-project-dashboard",
    "repositoryUrl": "https://github.com/bte808/fun-project-dashboard",
    "runDate": "2026-05-24",
    "timezone": "Asia/Shanghai",
    "generatedAt": "2026-05-24T14:06:02.612Z",
    "generatedAtShanghaiDate": "2026-05-24",
    "source": "GitHub public repository API",
    "scanRule": "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
    "todayWindowUtc": {
      "startIso": "2026-05-23T16:00:00.000Z",
      "endIso": "2026-05-24T15:59:59.999Z"
    },
    "todayStory": "今天公开仓库中检测到 0 个新建项目、9 个今日有变动的项目，共 9 个 commit。",
    "automationChecks": {
      "dailyIncubator": {
        "status": "not_detected",
        "label": "未检测到",
        "note": "未检测到今天新建的公开 fun-* 项目。"
      },
      "oldProjectMaintenance": {
        "status": "detected",
        "label": "已检测到",
        "note": "检测到 9 个旧项目今天有公开 commit。"
      },
      "wednesdayBooster": {
        "status": "not_detected",
        "label": "未检测到",
        "note": "未检测到周三加料结果；今日 commit 信息为：有提交但无加料标识。"
      },
      "sundayHealthCheck": {
        "status": "detected",
        "label": "已检测到",
        "note": "检测到 1 个疑似周日体检相关 commit。"
      }
    },
    "highlights": [
      {
        "name": "fun-20260523-a-time-heist",
        "url": "https://github.com/bte808/fun-20260523-a-time-heist",
        "reason": "今天更新 1 个 commit；Time Heist Shuffle is a quick timeline puzzle. A museum time heist has scrambled six fictional artifacts, and the player has to rebuild the order from earliest to latest..."
      },
      {
        "name": "fun-20260523-c-claim-ledger",
        "url": "https://github.com/bte808/fun-20260523-c-claim-ledger",
        "reason": "今天更新 1 个 commit；Local academic writing helper that turns draft claims and evidence notes into a reviewable ledger"
      },
      {
        "name": "fun-20260523-b-rename-blueprint",
        "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint",
        "reason": "今天更新 1 个 commit；Local-first batch rename preview tool that exports safe rename plans and shell scripts from pasted filenames."
      },
      {
        "name": "fun-20260521-c-concept-bridge",
        "url": "https://github.com/bte808/fun-20260521-c-concept-bridge",
        "reason": "今天更新 1 个 commit；Local study-notes helper that turns rough notes into concept maps and recall prompts"
      }
    ]
  },
  "metrics": {
    "totalProjects": 12,
    "todayNew": 0,
    "todayUpdated": 9,
    "todayCommits": 9,
    "needsReview": 10,
    "techDistribution": {
      "JavaScript": 12
    }
  },
  "projects": [
    {
      "name": "fun-20260523-a-time-heist",
      "url": "https://github.com/bte808/fun-20260523-a-time-heist",
      "description": "Tiny browser game about rebuilding a scrambled museum timeline",
      "defaultBranch": "main",
      "createdAt": "2026-05-23T03:09:03Z",
      "updatedAt": "2026-05-24T11:40:42Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19228,
        "CSS": 6678,
        "HTML": 2174
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Time Heist Shuffle is a quick timeline puzzle. A museum time heist has scrambled six fictional artifacts, and the player has to rebuild the order from earliest to latest...",
        "usefulness": "It is a small shareable puzzle format that can be opened from any static host. The game loop is short enough for one break but structured enough to support daily cases later.",
        "whyFun": "The player gets immediate tactile feedback: cards move, visual artifacts change state, and a locked guess reveals which pieces are close without ending the case. The theme turns a simple ordering puzzle into a tiny muse...",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "51149365037dac771df99c2f37236dd05b0b6ad2",
            "shortSha": "5114936",
            "url": "https://github.com/bte808/fun-20260523-a-time-heist/commit/51149365037dac771df99c2f37236dd05b0b6ad2",
            "message": "Fix local asset cache for weekly check",
            "committedAt": "2026-05-24T11:40:37Z",
            "files": [
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 2,
                "deletions": 2,
                "changes": 4
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 2,
            "deletions": 2
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260523-c-claim-ledger",
      "url": "https://github.com/bte808/fun-20260523-c-claim-ledger",
      "description": "Local academic writing helper that turns draft claims and evidence notes into a reviewable ledger",
      "defaultBranch": "main",
      "createdAt": "2026-05-23T03:04:38Z",
      "updatedAt": "2026-05-24T11:40:43Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19938,
        "CSS": 8467,
        "HTML": 4674
      },
      "type": "文字创作",
      "readme": {
        "oneLine": "Local academic writing helper that turns draft claims and evidence notes into a reviewable ledger",
        "usefulness": "Checking a literature-review paragraph before adding it to a paper draft. Turning lecture notes into a source-aware revision checklist. Reviewing lab-report conclusions against observation notes. Marking which claims in...",
        "whyFun": "待补充",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "92b0d961394b59ce7967024b7fc60026d40f8979",
            "shortSha": "92b0d96",
            "url": "https://github.com/bte808/fun-20260523-c-claim-ledger/commit/92b0d961394b59ce7967024b7fc60026d40f8979",
            "message": "Fix asset cache and license metadata",
            "committedAt": "2026-05-24T11:40:37Z",
            "files": [
              {
                "filename": "LICENSE",
                "status": "added",
                "additions": 21,
                "deletions": 0,
                "changes": 21
              },
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 2,
                "deletions": 2,
                "changes": 4
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 2,
            "deletions": 2
          },
          {
            "filename": "LICENSE",
            "status": "added",
            "additions": 21,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 4,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260523-b-rename-blueprint",
      "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint",
      "description": "Local-first batch rename preview tool that exports safe rename plans and shell scripts from pasted filenames.",
      "defaultBranch": "main",
      "createdAt": "2026-05-23T03:00:14Z",
      "updatedAt": "2026-05-24T11:40:42Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 15100,
        "CSS": 4549,
        "HTML": 4444
      },
      "type": "效率工具",
      "readme": {
        "oneLine": "Local-first batch rename preview tool that exports safe rename plans and shell scripts from pasted filenames.",
        "usefulness": "People often know how they want a folder renamed but do not want to risk touching files blindly. This keeps the planning step fast, private, and reversible.",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5183",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "6694e4eb88d1d1cf135ed8f1dda5aa2dde3de78d",
            "shortSha": "6694e4e",
            "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint/commit/6694e4eb88d1d1cf135ed8f1dda5aa2dde3de78d",
            "message": "Fix local asset cache validation",
            "committedAt": "2026-05-24T11:40:37Z",
            "files": [
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 2,
                "deletions": 2,
                "changes": 4
              },
              {
                "filename": "scripts/check-static.js",
                "status": "modified",
                "additions": 1,
                "deletions": 1,
                "changes": 2
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 2,
            "deletions": 2
          },
          {
            "filename": "scripts/check-static.js",
            "status": "modified",
            "additions": 1,
            "deletions": 1
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260522-b-link-janitor",
      "url": "https://github.com/bte808/fun-20260522-b-link-janitor",
      "description": "Local-first link cleaner for deduping tab dumps and stripping custom tracking params",
      "defaultBranch": "main",
      "createdAt": "2026-05-22T04:05:27Z",
      "updatedAt": "2026-05-23T09:49:21Z",
      "createdDateShanghai": "2026-05-22",
      "updatedDateShanghai": "2026-05-23",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18234,
        "CSS": 6100,
        "HTML": 3695
      },
      "type": "效率工具",
      "readme": {
        "oneLine": "Local-first link cleaner for deduping tab dumps and stripping custom tracking params",
        "usefulness": "Link dumps are noisy. This keeps the cleanup step private, fast, and repeatable, with no login, API key, extension, or server-side storage.",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5182",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260521-hue-chain",
      "url": "https://github.com/bte808/fun-20260521-hue-chain",
      "description": "Daily color-chain browser puzzle with answer reveals",
      "defaultBranch": "main",
      "createdAt": "2026-05-21T12:26:54Z",
      "updatedAt": "2026-05-22T09:09:14Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18244,
        "CSS": 6093,
        "HTML": 2194
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Daily color-chain browser puzzle with answer reveals",
        "usefulness": "It is a quick color-sense warmup. Designers can use it as a playful hue-matching drill, and anyone else can play a complete round in under a minute.",
        "whyFun": "The board always hides a perfect chain, but the player only sees the colors until submitting. That makes each round a small visual deduction puzzle: do you trust your eyes, add one more chip, or submit before over-mixin...",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260521-c-concept-bridge",
      "url": "https://github.com/bte808/fun-20260521-c-concept-bridge",
      "description": "Local study-notes helper that turns rough notes into concept maps and recall prompts",
      "defaultBranch": "main",
      "createdAt": "2026-05-21T12:25:14Z",
      "updatedAt": "2026-05-24T10:48:03Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 21020,
        "CSS": 5666,
        "HTML": 3160
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local study-notes helper that turns rough notes into concept maps and recall prompts",
        "usefulness": "Concept maps are good for learning because they force you to name relationships, not just list terms. Concept Bridge makes the first draft fast, then keeps the output checkable. It is useful when a learner has a dense p...",
        "whyFun": "待补充",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "157e186faa76ed117e0b185d909e418ba6196ab9",
            "shortSha": "157e186",
            "url": "https://github.com/bte808/fun-20260521-c-concept-bridge/commit/157e186faa76ed117e0b185d909e418ba6196ab9",
            "message": "Add recall prompt CSV export",
            "committedAt": "2026-05-24T10:47:51Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 1,
                "deletions": 1,
                "changes": 2
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 12,
                "deletions": 1,
                "changes": 13
              },
              {
                "filename": "src/concept-engine.js",
                "status": "modified",
                "additions": 18,
                "deletions": 0,
                "changes": 18
              },
              {
                "filename": "test/concept-engine.test.mjs",
                "status": "modified",
                "additions": 17,
                "deletions": 1,
                "changes": 18
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 1,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 1,
            "deletions": 1
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 12,
            "deletions": 1
          },
          {
            "filename": "src/concept-engine.js",
            "status": "modified",
            "additions": 18,
            "deletions": 0
          },
          {
            "filename": "test/concept-engine.test.mjs",
            "status": "modified",
            "additions": 17,
            "deletions": 1
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260521-b-meeting-brief",
      "url": "https://github.com/bte808/fun-20260521-b-meeting-brief",
      "description": "Local meeting notes cleaner that turns rough notes into action briefs",
      "defaultBranch": "main",
      "createdAt": "2026-05-21T12:23:45Z",
      "updatedAt": "2026-05-24T10:28:38Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19034,
        "CSS": 6118,
        "HTML": 4248
      },
      "type": "效率工具",
      "readme": {
        "oneLine": "Local meeting notes cleaner that turns rough notes into action briefs",
        "usefulness": "Meeting notes often end as a half-cleaned paste from chat, class, calls, or planning docs. This tool gives you the practical middle step: paste rough text, get a structured handoff, then move on.",
        "whyFun": "It makes a messy text blob feel organized in one click. The small parser is intentionally transparent, so it is easy to tweak the rules and immediately see better briefs.",
        "runCommand": "python3 -m http.server 5181",
        "verification": "The checks cover parsing behavior and a lightweight static scan for expected files, browser hooks, responsive CSS, and accidental secret/local-path strings."
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "8c3a0e2be75ef2913cfb8475c617a041969d92df",
            "shortSha": "8c3a0e2",
            "url": "https://github.com/bte808/fun-20260521-b-meeting-brief/commit/8c3a0e2be75ef2913cfb8475c617a041969d92df",
            "message": "Refresh brief when options change",
            "committedAt": "2026-05-24T10:28:29Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
              },
              {
                "filename": "scripts/static-check.mjs",
                "status": "modified",
                "additions": 2,
                "deletions": 0,
                "changes": 2
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 1,
            "deletions": 0
          },
          {
            "filename": "scripts/static-check.mjs",
            "status": "modified",
            "additions": 2,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 5,
            "deletions": 0
          }
        ]
      },
      "needsReview": false,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260521-trace-tap",
      "url": "https://github.com/bte808/fun-20260521-trace-tap",
      "description": "待补充",
      "defaultBranch": "main",
      "createdAt": "2026-05-21T02:12:25Z",
      "updatedAt": "2026-05-23T09:29:19Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-23",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 17078,
        "CSS": 7326,
        "HTML": 2956
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Trace Tap is a tiny browser game about debugging by following clues through a call graph. Each round gives you an incident log, a clickable graph, and a short objective:...",
        "usefulness": "Modern developer tools keep making code relationships more visible. Recent public inspiration included a JavaScript Showoff thread with a graph visualizer and cycle finder, a small \"who called this function\" code analys...",
        "whyFun": "The graph looks like a real incident map, but each round is short enough to solve by deduction. Hints lower your score, so there is a light push to trust the logs and commit to a trace.",
        "runCommand": "npm run start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260520-dice-target",
      "url": "https://github.com/bte808/fun-20260520-dice-target",
      "description": "Tiny daily browser dice target puzzle with keyboard-friendly local-best arithmetic sprints",
      "defaultBranch": "main",
      "createdAt": "2026-05-20T05:32:30Z",
      "updatedAt": "2026-05-24T10:09:39Z",
      "createdDateShanghai": "2026-05-20",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18619,
        "CSS": 5885,
        "HTML": 3648
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Tiny daily browser dice target puzzle with keyboard-friendly local-best arithmetic sprints",
        "usefulness": "Recent public posts showed a renewed interest in daily dice puzzles and small mental-workout games: https://www.reddit.com/r/SideProject/comments/1t3bejg/i_built_a_simple_puzzle_game_5_dice_1_target/ described the compa...",
        "whyFun": "待补充",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "d76a7fc84e192ff4d70c974c195651e7802a4223",
            "shortSha": "d76a7fc",
            "url": "https://github.com/bte808/fun-20260520-dice-target/commit/d76a7fc84e192ff4d70c974c195651e7802a4223",
            "message": "Add dice sprint local best",
            "committedAt": "2026-05-24T10:09:25Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 2,
                "deletions": 1,
                "changes": 3
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 63,
                "deletions": 2,
                "changes": 65
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 6,
                "deletions": 0,
                "changes": 6
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 1,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 2,
            "deletions": 1
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 63,
            "deletions": 2
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 6,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260519-pulse-poem",
      "url": "https://github.com/bte808/fun-20260519-pulse-poem",
      "description": "Turn short text into a playable pulse rhythm with audio and haptic feedback",
      "defaultBranch": "main",
      "createdAt": "2026-05-19T02:13:06Z",
      "updatedAt": "2026-05-24T09:48:50Z",
      "createdDateShanghai": "2026-05-19",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19722,
        "CSS": 5386,
        "HTML": 2867
      },
      "type": "音频互动",
      "readme": {
        "oneLine": "Turn short text into a playable pulse rhythm with audio and haptic feedback",
        "usefulness": "I wanted a small browser toy that makes writing feel physical. The idea was sparked by a recent JavaScript community thread where someone showed an audio-to-haptics web experiment: https://www.reddit.com/r/javascript/co...",
        "whyFun": "The result feels like a pocket drum machine made from your own sentence. A boring line can become a tiny beat, and on phones with vibration support it becomes tactile instead of only visual.",
        "runCommand": "npm start",
        "verification": "The tests cover tokenization, rhythm generation, punctuation rests, mode differences, tap-score output, and share-state encoding."
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "33a58c3673db47e0323486c49c5e6f47ce33049f",
            "shortSha": "33a58c3",
            "url": "https://github.com/bte808/fun-20260519-pulse-poem/commit/33a58c3673db47e0323486c49c5e6f47ce33049f",
            "message": "Add score download fallback",
            "committedAt": "2026-05-24T09:48:44Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 2,
                "deletions": 2,
                "changes": 4
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 38,
                "deletions": 5,
                "changes": 43
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
              },
              {
                "filename": "src/pulse.js",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "tests/pulse.test.js",
                "status": "modified",
                "additions": 6,
                "deletions": 0,
                "changes": 6
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "app.js",
            "status": "modified",
            "additions": 38,
            "deletions": 5
          },
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 1,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 2,
            "deletions": 2
          },
          {
            "filename": "src/pulse.js",
            "status": "modified",
            "additions": 4,
            "deletions": 0
          },
          {
            "filename": "tests/pulse.test.js",
            "status": "modified",
            "additions": 6,
            "deletions": 0
          }
        ]
      },
      "needsReview": false,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260518-signal-bento",
      "url": "https://github.com/bte808/fun-20260518-signal-bento",
      "description": "Tiny browser puzzle about routing a pulse through a snack-sized signal board",
      "defaultBranch": "main",
      "createdAt": "2026-05-18T02:10:56Z",
      "updatedAt": "2026-05-24T09:31:32Z",
      "createdDateShanghai": "2026-05-18",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 20345,
        "CSS": 7363,
        "HTML": 4160
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Tiny browser puzzle about routing a pulse through a snack-sized signal board",
        "usefulness": "Signal Bento turns path planning into immediate feedback. You can see exactly where a decision changes the route, which makes it useful for teaching sequencing, debugging, and simple systems thinking without making play...",
        "whyFun": "The whole loop is tactile and short: place one turn, watch the pulse move, adjust, then try for a cleaner score. The **Hint** button keeps every board finishable, so the puzzle stays playful instead of getting stuck. Co...",
        "runCommand": "npm run start",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "faadb310c55f4162c54395834b9c9f55d611464e",
            "shortSha": "faadb31",
            "url": "https://github.com/bte808/fun-20260518-signal-bento/commit/faadb310c55f4162c54395834b9c9f55d611464e",
            "message": "Add keyboard controls",
            "committedAt": "2026-05-24T09:31:27Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 4,
                "deletions": 1,
                "changes": 5
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 85,
                "deletions": 4,
                "changes": 89
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 39,
                "deletions": 9,
                "changes": 48
              },
              {
                "filename": "scripts/smoke-test.cjs",
                "status": "modified",
                "additions": 31,
                "deletions": 2,
                "changes": 33
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "app.js",
            "status": "modified",
            "additions": 85,
            "deletions": 4
          },
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 39,
            "deletions": 9
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 4,
            "deletions": 1
          },
          {
            "filename": "scripts/smoke-test.cjs",
            "status": "modified",
            "additions": 31,
            "deletions": 2
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260517-orbit-mods",
      "url": "https://github.com/bte808/fun-20260517-orbit-mods",
      "description": "Tiny browser orbit sequencer with swappable music mods",
      "defaultBranch": "main",
      "createdAt": "2026-05-17T06:08:51Z",
      "updatedAt": "2026-05-24T09:09:53Z",
      "createdDateShanghai": "2026-05-17",
      "updatedDateShanghai": "2026-05-24",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 22930,
        "CSS": 5730,
        "HTML": 3815
      },
      "type": "音频互动",
      "readme": {
        "oneLine": "Tiny browser orbit sequencer with swappable music mods",
        "usefulness": "It turns rhythm into something visible, draggable, and easy to understand. It gives an immediate Web Audio playground without accounts, uploads, or API keys. The pattern code in the textarea can be copied, pasted, and l...",
        "whyFun": "Dragging notes around the orbit changes the loop instantly. Mods like Mirror, Echo, Bass, Drift, Trail, and Pulse make one pattern feel different without needing music theory. Three starter loops show off soft drift, mi...",
        "runCommand": "python3 -m http.server 4173",
        "verification": "待补充"
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "c669855c7afa05f66acbfcfb9103ee2341355f28",
            "shortSha": "c669855",
            "url": "https://github.com/bte808/fun-20260517-orbit-mods/commit/c669855c7afa05f66acbfcfb9103ee2341355f28",
            "message": "Add starter orbit presets",
            "committedAt": "2026-05-24T09:07:32Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 5,
                "deletions": 3,
                "changes": 8
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 84,
                "deletions": 3,
                "changes": 87
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "scripts/check.mjs",
                "status": "modified",
                "additions": 2,
                "deletions": 0,
                "changes": 2
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 17,
                "deletions": 0,
                "changes": 17
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "app.js",
            "status": "modified",
            "additions": 84,
            "deletions": 3
          },
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 5,
            "deletions": 3
          },
          {
            "filename": "scripts/check.mjs",
            "status": "modified",
            "additions": 2,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 17,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    }
  ]
};
