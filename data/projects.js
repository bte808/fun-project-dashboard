window.FUN_PROJECT_DASHBOARD_DATA = {
  "meta": {
    "title": "2026-05-25 每日趣味项目总览仪表盘",
    "owner": "bte808",
    "repository": "fun-project-dashboard",
    "repositoryUrl": "https://github.com/bte808/fun-project-dashboard",
    "runDate": "2026-05-25",
    "timezone": "Asia/Shanghai",
    "generatedAt": "2026-05-25T14:07:17.397Z",
    "generatedAtShanghaiDate": "2026-05-25",
    "source": "GitHub public repository API",
    "scanRule": "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
    "todayWindowUtc": {
      "startIso": "2026-05-24T16:00:00.000Z",
      "endIso": "2026-05-25T15:59:59.999Z"
    },
    "todayStory": "今天公开仓库中检测到 3 个新建项目、5 个今日有变动的项目，共 7 个 commit。",
    "automationChecks": {
      "dailyIncubator": {
        "status": "detected",
        "label": "已检测到",
        "note": "公开 fun-* 仓库中检测到 3 个今天创建的项目。"
      },
      "oldProjectMaintenance": {
        "status": "detected",
        "label": "已检测到",
        "note": "检测到 2 个旧项目今天有公开 commit。"
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
        "name": "fun-20260525-c-unit-lens",
        "url": "https://github.com/bte808/fun-20260525-c-unit-lens",
        "reason": "今天新建；Local dimensional-analysis study helper for checking formulas and exporting Markdown ledgers"
      },
      {
        "name": "fun-20260525-a-pocket-ante",
        "url": "https://github.com/bte808/fun-20260525-a-pocket-ante",
        "reason": "今天新建；Pocket Ante Rally is a quick five-card sprint. Each run deals three seven-card tables from the daily seed. The player picks five cards, tries to beat the ante, then adds..."
      },
      {
        "name": "fun-20260525-b-handoff-card",
        "url": "https://github.com/bte808/fun-20260525-b-handoff-card",
        "reason": "今天新建；Local-first handoff note formatter for messy work or study notes"
      },
      {
        "name": "fun-20260523-b-rename-blueprint",
        "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint",
        "reason": "今天更新 1 个 commit；Local-first batch rename preview tool that exports safe rename plans and shell scripts from pasted filenames."
      }
    ],
    "collectionWarnings": []
  },
  "metrics": {
    "totalProjects": 15,
    "todayNew": 3,
    "todayUpdated": 5,
    "todayCommits": 7,
    "needsReview": 13,
    "techDistribution": {
      "JavaScript": 15
    }
  },
  "projects": [
    {
      "name": "fun-20260525-c-unit-lens",
      "url": "https://github.com/bte808/fun-20260525-c-unit-lens",
      "description": "Local dimensional-analysis study helper for checking formulas and exporting Markdown ledgers",
      "defaultBranch": "main",
      "createdAt": "2026-05-25T03:14:05Z",
      "updatedAt": "2026-05-25T09:53:02Z",
      "createdDateShanghai": "2026-05-25",
      "updatedDateShanghai": "2026-05-25",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 37934,
        "CSS": 6303,
        "HTML": 2979
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local dimensional-analysis study helper for checking formulas and exporting Markdown ledgers",
        "usefulness": "Physics, engineering, chemistry, or data-analysis review where formulas are easy to memorize but hard to sanity-check. Lab notebook prep before substituting numbers into a derived equation. Teaching assistants checking...",
        "whyFun": "待补充",
        "runCommand": "npm run start",
        "verification": "This runs JavaScript syntax checks plus a smoke test for the formula parser, implicit multiplication, balanced sample, mismatch sample, mixed-addition guard, exponent guards, function guard, identifier extraction, Markd..."
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "9633b9314b56e135a50e967bc6d242375ffbb22e",
            "shortSha": "9633b93",
            "url": "https://github.com/bte808/fun-20260525-c-unit-lens/commit/9633b9314b56e135a50e967bc6d242375ffbb22e",
            "message": "Improve Unit Lens report export",
            "committedAt": "2026-05-25T09:52:46Z",
            "files": [
              {
                "filename": ".github/workflows/ci.yml",
                "status": "added",
                "additions": 20,
                "deletions": 0,
                "changes": 20
              },
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 4,
                "deletions": 4,
                "changes": 8
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 4,
                "deletions": 1,
                "changes": 5
              },
              {
                "filename": "scripts/smoke-test.mjs",
                "status": "modified",
                "additions": 53,
                "deletions": 1,
                "changes": 54
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 23,
                "deletions": 1,
                "changes": 24
              },
              {
                "filename": "src/unit-engine.js",
                "status": "modified",
                "additions": 66,
                "deletions": 5,
                "changes": 71
              }
            ]
          },
          {
            "sha": "968f7cf030c2dd3fbe8cade471e1a2f26f010bc0",
            "shortSha": "968f7cf",
            "url": "https://github.com/bte808/fun-20260525-c-unit-lens/commit/968f7cf030c2dd3fbe8cade471e1a2f26f010bc0",
            "message": "Ship Unit Lens",
            "committedAt": "2026-05-25T03:09:57Z",
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
                "status": "added",
                "additions": 79,
                "deletions": 0,
                "changes": 79
              },
              {
                "filename": "favicon.svg",
                "status": "added",
                "additions": 6,
                "deletions": 0,
                "changes": 6
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 87,
                "deletions": 0,
                "changes": 87
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
                "additions": 63,
                "deletions": 0,
                "changes": 63
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 257,
                "deletions": 0,
                "changes": 257
              },
              {
                "filename": "src/styles.css",
                "status": "added",
                "additions": 407,
                "deletions": 0,
                "changes": 407
              },
              {
                "filename": "src/unit-engine.js",
                "status": "added",
                "additions": 748,
                "deletions": 0,
                "changes": 748
              }
            ]
          }
        ],
        "files": [
          {
            "filename": ".github/workflows/ci.yml",
            "status": "added",
            "additions": 20,
            "deletions": 0
          },
          {
            "filename": ".gitignore",
            "status": "added",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "favicon.svg",
            "status": "added",
            "additions": 6,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 87,
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
            "additions": 20,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "added",
            "additions": 79,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 63,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 257,
            "deletions": 0
          },
          {
            "filename": "src/styles.css",
            "status": "added",
            "additions": 407,
            "deletions": 0
          },
          {
            "filename": "src/unit-engine.js",
            "status": "added",
            "additions": 748,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260525-b-handoff-card",
      "url": "https://github.com/bte808/fun-20260525-b-handoff-card",
      "description": "Local-first handoff note formatter for messy work or study notes",
      "defaultBranch": "main",
      "createdAt": "2026-05-25T02:29:56Z",
      "updatedAt": "2026-05-25T02:30:03Z",
      "createdDateShanghai": "2026-05-25",
      "updatedDateShanghai": "2026-05-25",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 15762,
        "CSS": 6333,
        "HTML": 2491
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first handoff note formatter for messy work or study notes",
        "usefulness": "Small notes lose value when they are not shaped before the next person, next study session, or next AI/tool handoff sees them. This project was inspired by recent public discussion around local note organization, especi...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5185",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "0798472fd01ebad736bae67f03772bfd03e53204",
            "shortSha": "0798472",
            "url": "https://github.com/bte808/fun-20260525-b-handoff-card/commit/0798472fd01ebad736bae67f03772bfd03e53204",
            "message": "Ship Handoff Card",
            "committedAt": "2026-05-25T02:29:45Z",
            "files": [
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 5,
                "deletions": 0,
                "changes": 5
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
                "additions": 58,
                "deletions": 0,
                "changes": 58
              },
              {
                "filename": "app.js",
                "status": "added",
                "additions": 135,
                "deletions": 0,
                "changes": 135
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 73,
                "deletions": 0,
                "changes": 73
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 19,
                "deletions": 0,
                "changes": 19
              },
              {
                "filename": "scripts/check.mjs",
                "status": "added",
                "additions": 28,
                "deletions": 0,
                "changes": 28
              },
              {
                "filename": "src/handoffCard.mjs",
                "status": "added",
                "additions": 269,
                "deletions": 0,
                "changes": 269
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 394,
                "deletions": 0,
                "changes": 394
              },
              {
                "filename": "test/handoffCard.test.mjs",
                "status": "added",
                "additions": 54,
                "deletions": 0,
                "changes": 54
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
            "filename": "app.js",
            "status": "added",
            "additions": 135,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 73,
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
            "additions": 19,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "added",
            "additions": 58,
            "deletions": 0
          },
          {
            "filename": "scripts/check.mjs",
            "status": "added",
            "additions": 28,
            "deletions": 0
          },
          {
            "filename": "src/handoffCard.mjs",
            "status": "added",
            "additions": 269,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 394,
            "deletions": 0
          },
          {
            "filename": "test/handoffCard.test.mjs",
            "status": "added",
            "additions": 54,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260525-a-pocket-ante",
      "url": "https://github.com/bte808/fun-20260525-a-pocket-ante",
      "description": "Daily seeded five-card browser sprint with charm scoring",
      "defaultBranch": "main",
      "createdAt": "2026-05-25T02:13:23Z",
      "updatedAt": "2026-05-25T09:14:43Z",
      "createdDateShanghai": "2026-05-25",
      "updatedDateShanghai": "2026-05-25",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 24923,
        "CSS": 7236,
        "HTML": 2440
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Pocket Ante Rally is a quick five-card sprint. Each run deals three seven-card tables from the daily seed. The player picks five cards, tries to beat the ante, then adds...",
        "usefulness": "It is a static, portable mini-game format for quick breaks. The whole loop fits on one page, making it easy to share, host on GitHub Pages, or remix with a different featured seed.",
        "whyFun": "The player has to read the same seven cards through different lenses. A plain pair can become strong with Pair Press, low cards can suddenly matter with Low Sparks, and the final table feels different from the first wit...",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "cf222d82e71a5e06f72428fd225605b831868403",
            "shortSha": "cf222d8",
            "url": "https://github.com/bte808/fun-20260525-a-pocket-ante/commit/cf222d82e71a5e06f72428fd225605b831868403",
            "message": "Improve Pocket Ante accessibility flow",
            "committedAt": "2026-05-25T09:14:18Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 6,
                "deletions": 3,
                "changes": 9
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 18,
                "deletions": 3,
                "changes": 21
              },
              {
                "filename": "scripts/smoke-test.mjs",
                "status": "modified",
                "additions": 59,
                "deletions": 1,
                "changes": 60
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 111,
                "deletions": 17,
                "changes": 128
              },
              {
                "filename": "src/styles.css",
                "status": "modified",
                "additions": 51,
                "deletions": 4,
                "changes": 55
              }
            ]
          },
          {
            "sha": "b725b846f2d1aa443fc93f25ddad68553a89f04f",
            "shortSha": "b725b84",
            "url": "https://github.com/bte808/fun-20260525-a-pocket-ante/commit/b725b846f2d1aa443fc93f25ddad68553a89f04f",
            "message": "Build Pocket Ante Rally game",
            "committedAt": "2026-05-25T02:13:14Z",
            "files": [
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 5,
                "deletions": 0,
                "changes": 5
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
                "additions": 74,
                "deletions": 0,
                "changes": 74
              },
              {
                "filename": "favicon.svg",
                "status": "added",
                "additions": 7,
                "deletions": 0,
                "changes": 7
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 57,
                "deletions": 0,
                "changes": 57
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
                "additions": 63,
                "deletions": 0,
                "changes": 63
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 327,
                "deletions": 0,
                "changes": 327
              },
              {
                "filename": "src/game.js",
                "status": "added",
                "additions": 313,
                "deletions": 0,
                "changes": 313
              },
              {
                "filename": "src/styles.css",
                "status": "added",
                "additions": 379,
                "deletions": 0,
                "changes": 379
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
            "filename": "favicon.svg",
            "status": "added",
            "additions": 7,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 57,
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
            "additions": 74,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 63,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 327,
            "deletions": 0
          },
          {
            "filename": "src/game.js",
            "status": "added",
            "additions": 313,
            "deletions": 0
          },
          {
            "filename": "src/styles.css",
            "status": "added",
            "additions": 379,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-25T10:37:24Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-25",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18209,
        "CSS": 4770,
        "HTML": 4682
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
            "sha": "3b1415479b382ebfaaba8614d4e54c7038f1d9eb",
            "shortSha": "3b14154",
            "url": "https://github.com/bte808/fun-20260523-b-rename-blueprint/commit/3b1415479b382ebfaaba8614d4e54c7038f1d9eb",
            "message": "Improve rename warning exports",
            "committedAt": "2026-05-25T10:37:13Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 2,
                "deletions": 2,
                "changes": 4
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 9,
                "deletions": 9,
                "changes": 18
              },
              {
                "filename": "scripts/check-static.js",
                "status": "modified",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 7,
                "deletions": 6,
                "changes": 13
              },
              {
                "filename": "src/renameBlueprint.mjs",
                "status": "modified",
                "additions": 91,
                "deletions": 14,
                "changes": 105
              },
              {
                "filename": "src/styles.css",
                "status": "modified",
                "additions": 14,
                "deletions": 0,
                "changes": 14
              },
              {
                "filename": "test/renameBlueprint.test.js",
                "status": "modified",
                "additions": 28,
                "deletions": 4,
                "changes": 32
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 9,
            "deletions": 9
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 2,
            "deletions": 2
          },
          {
            "filename": "scripts/check-static.js",
            "status": "modified",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 7,
            "deletions": 6
          },
          {
            "filename": "src/renameBlueprint.mjs",
            "status": "modified",
            "additions": 91,
            "deletions": 14
          },
          {
            "filename": "src/styles.css",
            "status": "modified",
            "additions": 14,
            "deletions": 0
          },
          {
            "filename": "test/renameBlueprint.test.js",
            "status": "modified",
            "additions": 28,
            "deletions": 4
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
      "updatedAt": "2026-05-25T10:55:28Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-25",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 23096,
        "CSS": 6294,
        "HTML": 3304
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
            "sha": "2200a110fe470f5ab4a433d808763ee3a6d8328d",
            "shortSha": "2200a11",
            "url": "https://github.com/bte808/fun-20260521-c-concept-bridge/commit/2200a110fe470f5ab4a433d808763ee3a6d8328d",
            "message": "Add source sentence ledger",
            "committedAt": "2026-05-25T10:53:15Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 2,
                "deletions": 0,
                "changes": 2
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 20,
                "deletions": 1,
                "changes": 21
              },
              {
                "filename": "src/concept-engine.js",
                "status": "modified",
                "additions": 30,
                "deletions": 8,
                "changes": 38
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 43,
                "deletions": 6,
                "changes": 49
              },
              {
                "filename": "test/concept-engine.test.mjs",
                "status": "modified",
                "additions": 11,
                "deletions": 1,
                "changes": 12
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 4,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 2,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 20,
            "deletions": 1
          },
          {
            "filename": "src/concept-engine.js",
            "status": "modified",
            "additions": 30,
            "deletions": 8
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 43,
            "deletions": 6
          },
          {
            "filename": "test/concept-engine.test.mjs",
            "status": "modified",
            "additions": 11,
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
