window.FUN_PROJECT_DASHBOARD_DATA = {
  "meta": {
    "title": "2026-05-28 每日趣味项目总览仪表盘",
    "owner": "bte808",
    "repository": "fun-project-dashboard",
    "repositoryUrl": "https://github.com/bte808/fun-project-dashboard",
    "runDate": "2026-05-28",
    "timezone": "Asia/Shanghai",
    "generatedAt": "2026-05-28T14:04:03.413Z",
    "generatedAtShanghaiDate": "2026-05-28",
    "source": "GitHub public repository API",
    "scanRule": "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
    "todayWindowUtc": {
      "startIso": "2026-05-27T16:00:00.000Z",
      "endIso": "2026-05-28T15:59:59.999Z"
    },
    "todayStory": "今天公开仓库中检测到 3 个新建项目、6 个今日有变动的项目，共 9 个 commit。",
    "automationChecks": {
      "dailyIncubator": {
        "status": "detected",
        "label": "已检测到",
        "note": "公开 fun-* 仓库中检测到 3 个今天创建的项目。"
      },
      "oldProjectMaintenance": {
        "status": "detected",
        "label": "已检测到",
        "note": "检测到 3 个旧项目今天有公开 commit。"
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
        "name": "fun-20260528-c-uncertainty-budget",
        "url": "https://github.com/bte808/fun-20260528-c-uncertainty-budget",
        "reason": "今天新建；Local-first uncertainty budget worksheet for lab reports and measurement review"
      },
      {
        "name": "fun-20260528-b-runbook-card",
        "url": "https://github.com/bte808/fun-20260528-b-runbook-card",
        "reason": "今天新建；Local-first runbook card builder for rough process notes"
      },
      {
        "name": "fun-20260528-a-scanline-sprint",
        "url": "https://github.com/bte808/fun-20260528-a-scanline-sprint",
        "reason": "今天新建；Daily scanline reflex browser game with optional synth feedback"
      },
      {
        "name": "fun-20260527-a-tiny-planet-hop",
        "url": "https://github.com/bte808/fun-20260527-a-tiny-planet-hop",
        "reason": "今天更新 1 个 commit；Tiny circular runner about hopping around a daily seeded toy planet"
      }
    ],
    "collectionWarnings": []
  },
  "metrics": {
    "totalProjects": 24,
    "todayNew": 3,
    "todayUpdated": 6,
    "todayCommits": 9,
    "needsReview": 19,
    "techDistribution": {
      "JavaScript": 24
    }
  },
  "projects": [
    {
      "name": "fun-20260528-c-uncertainty-budget",
      "url": "https://github.com/bte808/fun-20260528-c-uncertainty-budget",
      "description": "Local-first uncertainty budget worksheet for lab reports and measurement review",
      "defaultBranch": "main",
      "createdAt": "2026-05-28T02:56:53Z",
      "updatedAt": "2026-05-28T10:47:53Z",
      "createdDateShanghai": "2026-05-28",
      "updatedDateShanghai": "2026-05-28",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 20606,
        "HTML": 6152,
        "CSS": 5959
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first uncertainty budget worksheet for lab reports and measurement review",
        "usefulness": "Preparing a physics, chemistry, metrology, or engineering lab report. Checking whether an experiment notebook clearly separates Type A, Type B, calibration, resolution, and model sources. Comparing which instrument or p...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5182",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "3fb25fe1ab97079e565714c9481ba8abe9e1e11c",
            "shortSha": "3fb25fe",
            "url": "https://github.com/bte808/fun-20260528-c-uncertainty-budget/commit/3fb25fe1ab97079e565714c9481ba8abe9e1e11c",
            "message": "Add uncertainty budget JSON backups",
            "committedAt": "2026-05-28T10:47:41Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 4,
                "deletions": 2,
                "changes": 6
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 71,
                "deletions": 10,
                "changes": 81
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 3,
                "deletions": 0,
                "changes": 3
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "test.js",
                "status": "modified",
                "additions": 25,
                "deletions": 0,
                "changes": 25
              }
            ]
          },
          {
            "sha": "159f0b3731f1b5a9b99e13c9bda9931cb407dc8c",
            "shortSha": "159f0b3",
            "url": "https://github.com/bte808/fun-20260528-c-uncertainty-budget/commit/159f0b3731f1b5a9b99e13c9bda9931cb407dc8c",
            "message": "Initial uncertainty budget worksheet",
            "committedAt": "2026-05-28T02:56:52Z",
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
                "additions": 85,
                "deletions": 0,
                "changes": 85
              },
              {
                "filename": "app.js",
                "status": "added",
                "additions": 444,
                "deletions": 0,
                "changes": 444
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 159,
                "deletions": 0,
                "changes": 159
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 20,
                "deletions": 0,
                "changes": 20
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 383,
                "deletions": 0,
                "changes": 383
              },
              {
                "filename": "test.js",
                "status": "added",
                "additions": 59,
                "deletions": 0,
                "changes": 59
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
            "additions": 444,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 159,
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
            "additions": 85,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 383,
            "deletions": 0
          },
          {
            "filename": "test.js",
            "status": "added",
            "additions": 59,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260528-b-runbook-card",
      "url": "https://github.com/bte808/fun-20260528-b-runbook-card",
      "description": "Local-first runbook card builder for rough process notes",
      "defaultBranch": "main",
      "createdAt": "2026-05-28T02:53:32Z",
      "updatedAt": "2026-05-28T10:28:22Z",
      "createdDateShanghai": "2026-05-28",
      "updatedDateShanghai": "2026-05-28",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 22296,
        "CSS": 6745,
        "HTML": 2731
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first runbook card builder for rough process notes",
        "usefulness": "Useful procedures often start as scattered notes in chat, docs, or a personal list. That is enough to remember the work, but not enough to run it cleanly under time pressure. Runbook Card converts those notes into a lig...",
        "whyFun": "It gives rough notes a visible \"readiness\" score and turns them into a tidy command card. You can tighten the card by adding an owner, goal, due time, verification step, and follow-up step, then watch the draft become r...",
        "runCommand": "python3 -m http.server 5198 --bind localhost",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "145ed22a81a825ff0828b6951e7b4e4c5d69c2a3",
            "shortSha": "145ed22",
            "url": "https://github.com/bte808/fun-20260528-b-runbook-card/commit/145ed22a81a825ff0828b6951e7b4e4c5d69c2a3",
            "message": "Make focus window pace-aware",
            "committedAt": "2026-05-28T10:28:10Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 4,
                "deletions": 3,
                "changes": 7
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 9,
                "deletions": 3,
                "changes": 12
              },
              {
                "filename": "src/runbook.js",
                "status": "modified",
                "additions": 35,
                "deletions": 3,
                "changes": 38
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 7,
                "deletions": 0,
                "changes": 7
              },
              {
                "filename": "test/runbook.test.mjs",
                "status": "modified",
                "additions": 14,
                "deletions": 1,
                "changes": 15
              }
            ]
          },
          {
            "sha": "349377d7b5905a5e8adc812640a22f684f20b6f7",
            "shortSha": "349377d",
            "url": "https://github.com/bte808/fun-20260528-b-runbook-card/commit/349377d7b5905a5e8adc812640a22f684f20b6f7",
            "message": "Ship runbook card builder",
            "committedAt": "2026-05-28T02:53:24Z",
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
                "additions": 94,
                "deletions": 0,
                "changes": 94
              },
              {
                "filename": "app.js",
                "status": "added",
                "additions": 246,
                "deletions": 0,
                "changes": 246
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 77,
                "deletions": 0,
                "changes": 77
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
                "additions": 74,
                "deletions": 0,
                "changes": 74
              },
              {
                "filename": "src/runbook.js",
                "status": "added",
                "additions": 223,
                "deletions": 0,
                "changes": 223
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 441,
                "deletions": 0,
                "changes": 441
              },
              {
                "filename": "test/runbook.test.mjs",
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
            "additions": 246,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 77,
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
            "additions": 94,
            "deletions": 0
          },
          {
            "filename": "scripts/check.mjs",
            "status": "added",
            "additions": 74,
            "deletions": 0
          },
          {
            "filename": "src/runbook.js",
            "status": "added",
            "additions": 223,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 441,
            "deletions": 0
          },
          {
            "filename": "test/runbook.test.mjs",
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
      "name": "fun-20260528-a-scanline-sprint",
      "url": "https://github.com/bte808/fun-20260528-a-scanline-sprint",
      "description": "Daily scanline reflex browser game with optional synth feedback",
      "defaultBranch": "main",
      "createdAt": "2026-05-28T02:26:12Z",
      "updatedAt": "2026-05-28T10:09:04Z",
      "createdDateShanghai": "2026-05-28",
      "updatedDateShanghai": "2026-05-28",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 28474,
        "CSS": 7234,
        "HTML": 4451
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Daily scanline reflex browser game with optional synth feedback",
        "usefulness": "This was built for the 2026-05-28 daily fun-project incubation run, worker A, with the fixed direction \"fun\". The public-web scan focused on recent Show HN posts from 2026-05-28. The direct inspiration was the playful t...",
        "whyFun": "The game is readable in one glance but gets tense quickly: the next correct button is always visible, yet the scan beam keeps shrinking your decision window. The result is a small \"one more run\" loop with visible pixels...",
        "runCommand": "npm start",
        "verification": "The smoke test verifies deterministic daily rounds, the Asia/Shanghai date helper, correct and wrong input handling, beam timeout behavior, a finishable perfect run, and share text."
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "e3517037eb0af6c57966d59ca5a48e06f682e6b0",
            "shortSha": "e351703",
            "url": "https://github.com/bte808/fun-20260528-a-scanline-sprint/commit/e3517037eb0af6c57966d59ca5a48e06f682e6b0",
            "message": "Add optional synth feedback",
            "committedAt": "2026-05-28T10:08:57Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 3,
                "deletions": 3,
                "changes": 6
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 3,
                "deletions": 2,
                "changes": 5
              },
              {
                "filename": "package.json",
                "status": "modified",
                "additions": 3,
                "deletions": 1,
                "changes": 4
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 134,
                "deletions": 2,
                "changes": 136
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 7,
                "deletions": 1,
                "changes": 8
              }
            ]
          },
          {
            "sha": "fdbdf47fc7e2e913e9d582e824672c4c055cbdd0",
            "shortSha": "fdbdf47",
            "url": "https://github.com/bte808/fun-20260528-a-scanline-sprint/commit/fdbdf47fc7e2e913e9d582e824672c4c055cbdd0",
            "message": "Initial Scanline Sprint",
            "committedAt": "2026-05-28T02:26:10Z",
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
                "additions": 65,
                "deletions": 0,
                "changes": 65
              },
              {
                "filename": "favicon.svg",
                "status": "added",
                "additions": 11,
                "deletions": 0,
                "changes": 11
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 122,
                "deletions": 0,
                "changes": 122
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
                "additions": 77,
                "deletions": 0,
                "changes": 77
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 395,
                "deletions": 0,
                "changes": 395
              },
              {
                "filename": "src/game.js",
                "status": "added",
                "additions": 373,
                "deletions": 0,
                "changes": 373
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 457,
                "deletions": 0,
                "changes": 457
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "favicon.svg",
            "status": "added",
            "additions": 11,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 122,
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
            "additions": 65,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 77,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 395,
            "deletions": 0
          },
          {
            "filename": "src/game.js",
            "status": "added",
            "additions": 373,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 457,
            "deletions": 0
          }
        ]
      },
      "needsReview": false,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260527-a-tiny-planet-hop",
      "url": "https://github.com/bte808/fun-20260527-a-tiny-planet-hop",
      "description": "Tiny circular runner about hopping around a daily seeded toy planet",
      "defaultBranch": "main",
      "createdAt": "2026-05-27T05:48:36Z",
      "updatedAt": "2026-05-28T09:09:34Z",
      "createdDateShanghai": "2026-05-27",
      "updatedDateShanghai": "2026-05-28",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 27565,
        "CSS": 5233,
        "HTML": 3241
      },
      "type": "音频互动",
      "readme": {
        "oneLine": "Tiny circular runner about hopping around a daily seeded toy planet",
        "usefulness": "This was built for the 2026-05-27 daily fun-project incubation run, worker A, with the fixed direction \"fun\". The public-web scan focused on recent Show HN posts from 2026-05-27. The inspiration was the quick \"open it a...",
        "whyFun": "The player is always moving, so each choice is tiny and urgent: jump now, wait half a beat, or risk clipping a crater to keep a combo alive. The whole run fits in under a minute, but the daily seed, route preview, three...",
        "runCommand": "npm start",
        "verification": "The smoke test verifies deterministic daily stage generation, route summary text, the Asia/Shanghai date helper, jump controls, hazard resolution, a finishable skilled Breezy run, and share text."
      },
      "today": {
        "created": false,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "69518823331ad6abd419c124c205fb1c8a1d6b21",
            "shortSha": "6951882",
            "url": "https://github.com/bte808/fun-20260527-a-tiny-planet-hop/commit/69518823331ad6abd419c124c205fb1c8a1d6b21",
            "message": "Fix Tiny Planet restart flow",
            "committedAt": "2026-05-28T09:09:18Z",
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
                "status": "modified",
                "additions": 4,
                "deletions": 3,
                "changes": 7
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 6,
                "deletions": 2,
                "changes": 8
              },
              {
                "filename": "scripts/smoke-test.mjs",
                "status": "modified",
                "additions": 3,
                "deletions": 1,
                "changes": 4
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 5,
                "deletions": 2,
                "changes": 7
              },
              {
                "filename": "src/game.js",
                "status": "modified",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "styles.css",
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
            "filename": ".gitignore",
            "status": "added",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 6,
            "deletions": 2
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 4,
            "deletions": 3
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "modified",
            "additions": 3,
            "deletions": 1
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 5,
            "deletions": 2
          },
          {
            "filename": "src/game.js",
            "status": "modified",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 1,
            "deletions": 1
          }
        ]
      },
      "needsReview": false,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260527-c-prereq-scout",
      "url": "https://github.com/bte808/fun-20260527-c-prereq-scout",
      "description": "Local-first prerequisite-aware study planner for course review",
      "defaultBranch": "main",
      "createdAt": "2026-05-27T05:35:02Z",
      "updatedAt": "2026-05-27T10:33:57Z",
      "createdDateShanghai": "2026-05-27",
      "updatedDateShanghai": "2026-05-27",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 25014,
        "CSS": 4998,
        "HTML": 4068
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first prerequisite-aware study planner for course review",
        "usefulness": "Planning a chapter review before an exam Organizing a methods refresher before reading a paper Seeing which lab concepts must be stabilized before data analysis Turning a lecture outline into a concrete next-study seque...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5181",
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
      "name": "fun-20260527-b-move-window",
      "url": "https://github.com/bte808/fun-20260527-b-move-window",
      "description": "Local-first move-date checklist planner.",
      "defaultBranch": "main",
      "createdAt": "2026-05-27T05:29:10Z",
      "updatedAt": "2026-05-27T09:46:55Z",
      "createdDateShanghai": "2026-05-27",
      "updatedDateShanghai": "2026-05-27",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 20085,
        "CSS": 8200,
        "HTML": 6483
      },
      "type": "文字创作",
      "readme": {
        "oneLine": "Local-first move-date checklist planner.",
        "usefulness": "Moving checklists are useful, but they often live as long articles or generic PDFs. Move Window keeps the helpful part: one date goes in, a dated plan comes out, and you can keep checking items off in the browser.",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5197",
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
      "name": "fun-20260526-c-quiz-map",
      "url": "https://github.com/bte808/fun-20260526-c-quiz-map",
      "description": "Local-first quiz result mapper for study review plans",
      "defaultBranch": "main",
      "createdAt": "2026-05-26T03:01:16Z",
      "updatedAt": "2026-05-27T11:05:04Z",
      "createdDateShanghai": "2026-05-26",
      "updatedDateShanghai": "2026-05-27",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 31618,
        "CSS": 8076,
        "HTML": 4515
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first quiz result mapper for study review plans",
        "usefulness": "Quiz Map is useful after a short diagnostic quiz, lab-methods check, reading group quiz, exam review session, or teaching-assistant office hour. It helps turn \"I got 7/12\" into \"I missed sampling bias twice, and that we...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5179",
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
      "name": "fun-20260526-b-cable-card",
      "url": "https://github.com/bte808/fun-20260526-b-cable-card",
      "description": "Offline USB-C cable capability card and label generator",
      "defaultBranch": "main",
      "createdAt": "2026-05-26T02:34:42Z",
      "updatedAt": "2026-05-26T10:41:58Z",
      "createdDateShanghai": "2026-05-26",
      "updatedDateShanghai": "2026-05-26",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 22424,
        "CSS": 7354,
        "HTML": 7058
      },
      "type": "效率工具",
      "readme": {
        "oneLine": "Offline USB-C cable capability card and label generator",
        "usefulness": "The project was inspired by recent public discussion around cable confusion, especially WhatCable on Product Hunt: https://www.producthunt.com/products/whatcable WhatCable reads cable capability data where the platform...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5196",
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
      "name": "fun-20260526-a-odd-tile",
      "url": "https://github.com/bte808/fun-20260526-a-odd-tile",
      "description": "Daily visual sprint: spot the one odd generated tile before time runs out.",
      "defaultBranch": "main",
      "createdAt": "2026-05-26T02:15:02Z",
      "updatedAt": "2026-05-27T10:20:54Z",
      "createdDateShanghai": "2026-05-26",
      "updatedDateShanghai": "2026-05-27",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 12563,
        "CSS": 5943,
        "HTML": 2212
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Daily visual sprint: spot the one odd generated tile before time runs out.",
        "usefulness": "It is a quick visual warm-up. You can play a whole run in under two minutes, compare scores, or use it as a small attention reset between bigger tasks.",
        "whyFun": "The odd tile is not always louder. Sometimes it is a shifted dot, sometimes a rotated stripe, sometimes a chunkier ring. The board stays fair because every round is generated with exactly one odd tile, but the pattern l...",
        "runCommand": "python3 -m http.server 5186 --bind localhost",
        "verification": "npm test checks deterministic generation, one odd tile per board, scoring, and result text. npm run check checks required files and static app wiring. Local browser verification covered a desktop run path, first-tap tim..."
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
      "name": "fun-20260525-b-handoff-card",
      "url": "https://github.com/bte808/fun-20260525-b-handoff-card",
      "description": "Local-first handoff note formatter for messy work or study notes",
      "defaultBranch": "main",
      "createdAt": "2026-05-25T02:29:56Z",
      "updatedAt": "2026-05-26T09:47:26Z",
      "createdDateShanghai": "2026-05-25",
      "updatedDateShanghai": "2026-05-26",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 21619,
        "CSS": 6540,
        "HTML": 2663
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-28T09:47:54Z",
      "createdDateShanghai": "2026-05-22",
      "updatedDateShanghai": "2026-05-28",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 21560,
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
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "18051e84cb73ebea933f3cebe39fbed1f4fa8148",
            "shortSha": "18051e8",
            "url": "https://github.com/bte808/fun-20260522-b-link-janitor/commit/18051e84cb73ebea933f3cebe39fbed1f4fa8148",
            "message": "Improve link cleanup export feedback",
            "committedAt": "2026-05-28T09:47:37Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 6,
                "deletions": 4,
                "changes": 10
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 21,
                "deletions": 2,
                "changes": 23
              },
              {
                "filename": "src/linkJanitor.mjs",
                "status": "modified",
                "additions": 64,
                "deletions": 2,
                "changes": 66
              },
              {
                "filename": "test/linkJanitor.test.js",
                "status": "modified",
                "additions": 35,
                "deletions": 0,
                "changes": 35
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 6,
            "deletions": 4
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 21,
            "deletions": 2
          },
          {
            "filename": "src/linkJanitor.mjs",
            "status": "modified",
            "additions": 64,
            "deletions": 2
          },
          {
            "filename": "test/linkJanitor.test.js",
            "status": "modified",
            "additions": 35,
            "deletions": 0
          }
        ]
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
      "updatedAt": "2026-05-26T09:13:35Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-26",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 20003,
        "CSS": 6149,
        "HTML": 2267
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
      "updatedAt": "2026-05-28T09:32:34Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-28",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 18306,
        "CSS": 7443,
        "HTML": 3063
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
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "ead85222c251440e4c389a98bfa451a3b70c0359",
            "shortSha": "ead8522",
            "url": "https://github.com/bte808/fun-20260521-trace-tap/commit/ead85222c251440e4c389a98bfa451a3b70c0359",
            "message": "Add failed-trace prefix repair",
            "committedAt": "2026-05-28T09:32:28Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 4,
                "deletions": 2,
                "changes": 6
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
                "additions": 24,
                "deletions": 1,
                "changes": 25
              },
              {
                "filename": "src/puzzles.js",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 8,
                "deletions": 0,
                "changes": 8
              },
              {
                "filename": "test/smoke.test.mjs",
                "status": "modified",
                "additions": 6,
                "deletions": 1,
                "changes": 7
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
            "additions": 4,
            "deletions": 2
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 24,
            "deletions": 1
          },
          {
            "filename": "src/puzzles.js",
            "status": "modified",
            "additions": 4,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 8,
            "deletions": 0
          },
          {
            "filename": "test/smoke.test.mjs",
            "status": "modified",
            "additions": 6,
            "deletions": 1
          }
        ]
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
      "updatedAt": "2026-05-27T11:33:56Z",
      "createdDateShanghai": "2026-05-20",
      "updatedDateShanghai": "2026-05-27",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 21274,
        "CSS": 7198,
        "HTML": 4252
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Tiny daily browser dice target puzzle with keyboard-friendly local-best arithmetic sprints",
        "usefulness": "Recent public posts showed a renewed interest in daily dice puzzles and small mental-workout games: https://www.reddit.com/r/SideProject/comments/1t3bejg/i_built_a_simple_puzzle_game_5_dice_1_target/ described the compa...",
        "whyFun": "This version adds a **Practice archive** date picker. The daily sprint still opens on today's Asia/Shanghai seed, but the player can now load yesterday or any valid YYYY-MM-DD date and replay that day's deterministic th...",
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
