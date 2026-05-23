window.FUN_PROJECT_DASHBOARD_DATA = {
  "meta": {
    "title": "2026-05-23 每日趣味项目总览仪表盘",
    "owner": "bte808",
    "repository": "fun-project-dashboard",
    "repositoryUrl": "https://github.com/bte808/fun-project-dashboard",
    "runDate": "2026-05-23",
    "timezone": "Asia/Shanghai",
    "generatedAt": "2026-05-23T09:02:10.131Z",
    "generatedAtShanghaiDate": "2026-05-23",
    "source": "GitHub public repository API",
    "scanRule": "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
    "todayWindowUtc": {
      "startIso": "2026-05-22T16:00:00.000Z",
      "endIso": "2026-05-23T15:59:59.999Z"
    },
    "todayStory": "今天公开仓库中检测到 3 个新建项目、3 个今日有变动的项目，共 4 个 commit。",
    "automationChecks": {
      "dailyIncubator": {
        "status": "detected",
        "label": "已检测到",
        "note": "公开 fun-* 仓库中检测到 3 个今天创建的项目。"
      },
      "oldProjectMaintenance": {
        "status": "not_detected",
        "label": "未检测到",
        "note": "未检测到今天维护旧项目的公开 commit。"
      },
      "wednesdayBooster": {
        "status": "not_detected",
        "label": "未检测到",
        "note": "未检测到周三加料结果；今日 commit 信息为：有提交但无加料标识。"
      },
      "sundayHealthCheck": {
        "status": "not_detected",
        "label": "未检测到",
        "note": "未检测到周日体检结果。"
      }
    },
    "highlights": [
      {
        "name": "fun-20260523-b-rename-blueprint",
        "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint",
        "reason": "今天新建；Local-first batch rename preview tool that exports safe rename plans and shell scripts from pasted filenames."
      },
      {
        "name": "fun-20260523-a-time-heist",
        "url": "https://github.com/bte808/fun-20260523-a-time-heist",
        "reason": "今天新建；Time Heist Shuffle is a quick timeline puzzle. A museum time heist has scrambled six fictional artifacts, and the player has to rebuild the order from earliest to latest..."
      },
      {
        "name": "fun-20260523-c-claim-ledger",
        "url": "https://github.com/bte808/fun-20260523-c-claim-ledger",
        "reason": "今天新建；Local academic writing helper that turns draft claims and evidence notes into a reviewable ledger"
      }
    ]
  },
  "metrics": {
    "totalProjects": 12,
    "todayNew": 3,
    "todayUpdated": 3,
    "todayCommits": 4,
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
      "updatedAt": "2026-05-23T03:09:16Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-23",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18860,
        "CSS": 6678,
        "HTML": 2130
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
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "21ffbb82c561e623a89173dda48d765025ed7030",
            "shortSha": "21ffbb8",
            "url": "https://github.com/bte808/fun-20260523-a-time-heist/commit/21ffbb82c561e623a89173dda48d765025ed7030",
            "message": "Build Time Heist Shuffle game",
            "committedAt": "2026-05-23T03:08:52Z",
            "files": [
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "README.md",
                "status": "added",
                "additions": 68,
                "deletions": 0,
                "changes": 68
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 59,
                "deletions": 0,
                "changes": 59
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 18,
                "deletions": 0,
                "changes": 18
              },
              {
                "filename": "scripts/smoke-test.mjs",
                "status": "added",
                "additions": 39,
                "deletions": 0,
                "changes": 39
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 257,
                "deletions": 0,
                "changes": 257
              },
              {
                "filename": "src/game.js",
                "status": "added",
                "additions": 287,
                "deletions": 0,
                "changes": 287
              },
              {
                "filename": "src/styles.css",
                "status": "added",
                "additions": 426,
                "deletions": 0,
                "changes": 426
              }
            ]
          }
        ],
        "files": [
          {
            "filename": ".gitignore",
            "status": "added",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 59,
            "deletions": 0
          },
          {
            "filename": "package.json",
            "status": "added",
            "additions": 18,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "added",
            "additions": 68,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 39,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 257,
            "deletions": 0
          },
          {
            "filename": "src/game.js",
            "status": "added",
            "additions": 287,
            "deletions": 0
          },
          {
            "filename": "src/styles.css",
            "status": "added",
            "additions": 426,
            "deletions": 0
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
      "updatedAt": "2026-05-23T03:04:52Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-23",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 17968,
        "CSS": 7665,
        "HTML": 4530
      },
      "type": "音频互动",
      "readme": {
        "oneLine": "Local academic writing helper that turns draft claims and evidence notes into a reviewable ledger",
        "usefulness": "Checking a literature-review paragraph before adding it to a paper draft. Turning lecture notes into a source-aware revision checklist. Reviewing lab-report conclusions against observation notes. Marking which claims in...",
        "whyFun": "待补充",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "6eede9deb20a6f28ec8179453666d1ad51da4df2",
            "shortSha": "6eede9d",
            "url": "https://github.com/bte808/fun-20260523-c-claim-ledger/commit/6eede9deb20a6f28ec8179453666d1ad51da4df2",
            "message": "Ship Claim Ledger Lite",
            "committedAt": "2026-05-23T03:04:29Z",
            "files": [
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 6,
                "deletions": 0,
                "changes": 6
              },
              {
                "filename": "README.md",
                "status": "added",
                "additions": 99,
                "deletions": 0,
                "changes": 99
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 117,
                "deletions": 0,
                "changes": 117
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 20,
                "deletions": 0,
                "changes": 20
              },
              {
                "filename": "scripts/smoke-test.mjs",
                "status": "added",
                "additions": 31,
                "deletions": 0,
                "changes": 31
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 196,
                "deletions": 0,
                "changes": 196
              },
              {
                "filename": "src/logic.js",
                "status": "added",
                "additions": 306,
                "deletions": 0,
                "changes": 306
              },
              {
                "filename": "src/styles.css",
                "status": "added",
                "additions": 530,
                "deletions": 0,
                "changes": 530
              }
            ]
          }
        ],
        "files": [
          {
            "filename": ".gitignore",
            "status": "added",
            "additions": 6,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 117,
            "deletions": 0
          },
          {
            "filename": "package.json",
            "status": "added",
            "additions": 20,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "added",
            "additions": 99,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 31,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 196,
            "deletions": 0
          },
          {
            "filename": "src/logic.js",
            "status": "added",
            "additions": 306,
            "deletions": 0
          },
          {
            "filename": "src/styles.css",
            "status": "added",
            "additions": 530,
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
      "updatedAt": "2026-05-23T03:02:40Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-23",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 12204,
        "CSS": 4549,
        "HTML": 4119
      },
      "type": "文字创作",
      "readme": {
        "oneLine": "Local-first batch rename preview tool that exports safe rename plans and shell scripts from pasted filenames.",
        "usefulness": "People often know how they want a folder renamed but do not want to risk touching files blindly. This keeps the planning step fast, private, and reversible.",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5183",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "de8d4e09e2bec6d026bbfe321a52de926dc4e0ab",
            "shortSha": "de8d4e0",
            "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint/commit/de8d4e09e2bec6d026bbfe321a52de926dc4e0ab",
            "message": "Add local favicon",
            "committedAt": "2026-05-23T03:02:28Z",
            "files": [
              {
                "filename": "favicon.svg",
                "status": "added",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
              }
            ]
          },
          {
            "sha": "3ded971413bb0712a9c49d5b6476a7231ef3617b",
            "shortSha": "3ded971",
            "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint/commit/3ded971413bb0712a9c49d5b6476a7231ef3617b",
            "message": "Ship Rename Blueprint",
            "committedAt": "2026-05-23T03:00:07Z",
            "files": [
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "LICENSE",
                "status": "added",
                "additions": 21,
                "deletions": 0,
                "changes": 21
              },
              {
                "filename": "README.md",
                "status": "added",
                "additions": 55,
                "deletions": 0,
                "changes": 55
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 103,
                "deletions": 0,
                "changes": 103
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 18,
                "deletions": 0,
                "changes": 18
              },
              {
                "filename": "scripts/check-static.js",
                "status": "added",
                "additions": 23,
                "deletions": 0,
                "changes": 23
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 181,
                "deletions": 0,
                "changes": 181
              },
              {
                "filename": "src/renameBlueprint.mjs",
                "status": "added",
                "additions": 143,
                "deletions": 0,
                "changes": 143
              },
              {
                "filename": "src/styles.css",
                "status": "added",
                "additions": 292,
                "deletions": 0,
                "changes": 292
              },
              {
                "filename": "test/renameBlueprint.test.js",
                "status": "added",
                "additions": 52,
                "deletions": 0,
                "changes": 52
              }
            ]
          }
        ],
        "files": [
          {
            "filename": ".gitignore",
            "status": "added",
            "additions": 4,
            "deletions": 0
          },
          {
            "filename": "favicon.svg",
            "status": "added",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 103,
            "deletions": 0
          },
          {
            "filename": "LICENSE",
            "status": "added",
            "additions": 21,
            "deletions": 0
          },
          {
            "filename": "package.json",
            "status": "added",
            "additions": 18,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "added",
            "additions": 55,
            "deletions": 0
          },
          {
            "filename": "scripts/check-static.js",
            "status": "added",
            "additions": 23,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 181,
            "deletions": 0
          },
          {
            "filename": "src/renameBlueprint.mjs",
            "status": "added",
            "additions": 143,
            "deletions": 0
          },
          {
            "filename": "src/styles.css",
            "status": "added",
            "additions": 292,
            "deletions": 0
          },
          {
            "filename": "test/renameBlueprint.test.js",
            "status": "added",
            "additions": 52,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260522-b-link-janitor",
      "url": "https://github.com/bte808/fun-20260522-b-link-janitor",
      "description": "待补充",
      "defaultBranch": "main",
      "createdAt": "2026-05-22T04:05:27Z",
      "updatedAt": "2026-05-22T04:05:35Z",
      "createdDateShanghai": "2026-05-22",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 16513,
        "CSS": 5555,
        "HTML": 2965
      },
      "type": "效率工具",
      "readme": {
        "oneLine": "Link Janitor is a local-first webpage for turning messy pasted link dumps into a clean, grouped export.",
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
      "type": "学习练习",
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
      "updatedAt": "2026-05-22T10:46:33Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19778,
        "CSS": 5666,
        "HTML": 3090
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-22T10:26:46Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18779,
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-21T02:12:33Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-21",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 15803,
        "CSS": 7126,
        "HTML": 2956
      },
      "type": "学习练习",
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
      "description": "Tiny daily browser dice target puzzle with keyboard-friendly arithmetic sprints",
      "defaultBranch": "main",
      "createdAt": "2026-05-20T05:32:30Z",
      "updatedAt": "2026-05-22T10:08:52Z",
      "createdDateShanghai": "2026-05-20",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 16715,
        "CSS": 5794,
        "HTML": 3566
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Tiny daily browser dice target puzzle with keyboard-friendly arithmetic sprints",
        "usefulness": "Recent public posts showed a renewed interest in daily dice puzzles and small mental-workout games: https://www.reddit.com/r/SideProject/comments/1t3bejg/i_built_a_simple_puzzle_game_5_dice_1_target/ described the compa...",
        "whyFun": "待补充",
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
      "name": "fun-20260519-pulse-poem",
      "url": "https://github.com/bte808/fun-20260519-pulse-poem",
      "description": "Turn short text into a playable pulse rhythm with audio and haptic feedback",
      "defaultBranch": "main",
      "createdAt": "2026-05-19T02:13:06Z",
      "updatedAt": "2026-05-22T09:48:03Z",
      "createdDateShanghai": "2026-05-19",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18538,
        "CSS": 5386,
        "HTML": 2787
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-22T09:27:39Z",
      "createdDateShanghai": "2026-05-18",
      "updatedDateShanghai": "2026-05-22",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 17630,
        "CSS": 7363,
        "HTML": 3431
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-17T06:47:48Z",
      "createdDateShanghai": "2026-05-17",
      "updatedDateShanghai": "2026-05-17",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 21223,
        "CSS": 5468,
        "HTML": 3487
      },
      "type": "音频互动",
      "readme": {
        "oneLine": "Tiny browser orbit sequencer with swappable music mods",
        "usefulness": "It turns rhythm into something visible, draggable, and easy to understand. It gives an immediate Web Audio playground without accounts, uploads, or API keys. The pattern code in the textarea can be copied, pasted, and l...",
        "whyFun": "Dragging notes around the orbit changes the loop instantly. Mods like Mirror, Echo, Bass, Drift, Trail, and Pulse make one pattern feel different without needing music theory. Randomize creates a fresh loop, but the use...",
        "runCommand": "python3 -m http.server 4173",
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
    }
  ]
};
