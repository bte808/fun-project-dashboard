window.FUN_PROJECT_DASHBOARD_DATA = {
  "meta": {
    "title": "2026-05-27 每日趣味项目总览仪表盘",
    "owner": "bte808",
    "repository": "fun-project-dashboard",
    "repositoryUrl": "https://github.com/bte808/fun-project-dashboard",
    "runDate": "2026-05-27",
    "timezone": "Asia/Shanghai",
    "generatedAt": "2026-05-27T14:03:02.654Z",
    "generatedAtShanghaiDate": "2026-05-27",
    "source": "GitHub public repository API",
    "scanRule": "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
    "todayWindowUtc": {
      "startIso": "2026-05-26T16:00:00.000Z",
      "endIso": "2026-05-27T15:59:59.999Z"
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
        "name": "fun-20260527-c-prereq-scout",
        "url": "https://github.com/bte808/fun-20260527-c-prereq-scout",
        "reason": "今天新建；Local-first prerequisite-aware study planner for course review"
      },
      {
        "name": "fun-20260527-b-move-window",
        "url": "https://github.com/bte808/fun-20260527-b-move-window",
        "reason": "今天新建；Local-first move-date checklist planner."
      },
      {
        "name": "fun-20260527-a-tiny-planet-hop",
        "url": "https://github.com/bte808/fun-20260527-a-tiny-planet-hop",
        "reason": "今天新建；Tiny Planet Hop is a tiny browser runner where you orbit a toy planet, hop over red craters, grab yellow starbits, and try to reach the sunrise gate before the timer run..."
      },
      {
        "name": "fun-20260526-c-quiz-map",
        "url": "https://github.com/bte808/fun-20260526-c-quiz-map",
        "reason": "今天更新 1 个 commit；Local-first quiz result mapper for study review plans"
      }
    ],
    "collectionWarnings": []
  },
  "metrics": {
    "totalProjects": 21,
    "todayNew": 3,
    "todayUpdated": 6,
    "todayCommits": 9,
    "needsReview": 17,
    "techDistribution": {
      "JavaScript": 21
    }
  },
  "projects": [
    {
      "name": "fun-20260527-a-tiny-planet-hop",
      "url": "https://github.com/bte808/fun-20260527-a-tiny-planet-hop",
      "description": "待补充",
      "defaultBranch": "main",
      "createdAt": "2026-05-27T05:48:36Z",
      "updatedAt": "2026-05-27T05:48:44Z",
      "createdDateShanghai": "2026-05-27",
      "updatedDateShanghai": "2026-05-27",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 27088,
        "CSS": 5222,
        "HTML": 3127
      },
      "type": "音频互动",
      "readme": {
        "oneLine": "Tiny Planet Hop is a tiny browser runner where you orbit a toy planet, hop over red craters, grab yellow starbits, and try to reach the sunrise gate before the timer run...",
        "usefulness": "This was built for the 2026-05-27 daily fun-project incubation run, worker A, with the fixed direction \"fun\". The public-web scan focused on recent Show HN posts from 2026-05-27. The inspiration was the quick \"open it a...",
        "whyFun": "The player is always moving, so each choice is tiny and urgent: jump now, wait half a beat, or risk clipping a crater to keep a combo alive. The whole run fits in under a minute, but the daily seed, three speeds, starbi...",
        "runCommand": "npm start",
        "verification": "The smoke test verifies deterministic daily stage generation, the Asia/Shanghai date helper, jump controls, hazard resolution, a finishable skilled Breezy run, and share text."
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "c3a52bee9142d808de5cc1c25525a671106d6c75",
            "shortSha": "c3a52be",
            "url": "https://github.com/bte808/fun-20260527-a-tiny-planet-hop/commit/c3a52bee9142d808de5cc1c25525a671106d6c75",
            "message": "Initial Tiny Planet Hop game",
            "committedAt": "2026-05-27T05:48:26Z",
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
                "additions": 67,
                "deletions": 0,
                "changes": 67
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
                "additions": 88,
                "deletions": 0,
                "changes": 88
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
                "additions": 79,
                "deletions": 0,
                "changes": 79
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 493,
                "deletions": 0,
                "changes": 493
              },
              {
                "filename": "src/game.js",
                "status": "added",
                "additions": 367,
                "deletions": 0,
                "changes": 367
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 321,
                "deletions": 0,
                "changes": 321
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "favicon.svg",
            "status": "added",
            "additions": 7,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 88,
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
            "additions": 67,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 79,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 493,
            "deletions": 0
          },
          {
            "filename": "src/game.js",
            "status": "added",
            "additions": 367,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 321,
            "deletions": 0
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
        "created": true,
        "updated": true,
        "commitCount": 3,
        "commits": [
          {
            "sha": "291b1282176f405868e18f729f4f6c677c3df311",
            "shortSha": "291b128",
            "url": "https://github.com/bte808/fun-20260527-c-prereq-scout/commit/291b1282176f405868e18f729f4f6c677c3df311",
            "message": "Add next focus recommendation",
            "committedAt": "2026-05-27T10:33:42Z",
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
                "additions": 10,
                "deletions": 0,
                "changes": 10
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 2,
                "deletions": 0,
                "changes": 2
              },
              {
                "filename": "src/prereq-scout.js",
                "status": "modified",
                "additions": 95,
                "deletions": 2,
                "changes": 97
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 28,
                "deletions": 0,
                "changes": 28
              },
              {
                "filename": "test/prereq-scout.test.mjs",
                "status": "modified",
                "additions": 9,
                "deletions": 0,
                "changes": 9
              }
            ]
          },
          {
            "sha": "f006105e0f4f0f99ac8161ce79d3d87b1e9e796a",
            "shortSha": "f006105",
            "url": "https://github.com/bte808/fun-20260527-c-prereq-scout/commit/f006105e0f4f0f99ac8161ce79d3d87b1e9e796a",
            "message": "Add local draft persistence",
            "committedAt": "2026-05-27T09:59:30Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "scripts/check.mjs",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 47,
                "deletions": 9,
                "changes": 56
              },
              {
                "filename": "src/prereq-scout.js",
                "status": "modified",
                "additions": 1,
                "deletions": 1,
                "changes": 2
              },
              {
                "filename": "test/prereq-scout.test.mjs",
                "status": "modified",
                "additions": 8,
                "deletions": 1,
                "changes": 9
              }
            ]
          },
          {
            "sha": "a789b402a9b6900454ed94430205c3d03725e1b0",
            "shortSha": "a789b40",
            "url": "https://github.com/bte808/fun-20260527-c-prereq-scout/commit/a789b402a9b6900454ed94430205c3d03725e1b0",
            "message": "feat: add prereq scout study planner",
            "committedAt": "2026-05-27T05:34:53Z",
            "files": [
              {
                "filename": ".gitignore",
                "status": "added",
                "additions": 2,
                "deletions": 0,
                "changes": 2
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
                "additions": 96,
                "deletions": 0,
                "changes": 96
              },
              {
                "filename": "favicon.svg",
                "status": "added",
                "additions": 4,
                "deletions": 0,
                "changes": 4
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
                "additions": 19,
                "deletions": 0,
                "changes": 19
              },
              {
                "filename": "scripts/check.mjs",
                "status": "added",
                "additions": 60,
                "deletions": 0,
                "changes": 60
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 97,
                "deletions": 0,
                "changes": 97
              },
              {
                "filename": "src/prereq-scout.js",
                "status": "added",
                "additions": 456,
                "deletions": 0,
                "changes": 456
              },
              {
                "filename": "src/sample-data.js",
                "status": "added",
                "additions": 8,
                "deletions": 0,
                "changes": 8
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 288,
                "deletions": 0,
                "changes": 288
              },
              {
                "filename": "test/prereq-scout.test.mjs",
                "status": "added",
                "additions": 28,
                "deletions": 0,
                "changes": 28
              }
            ]
          }
        ],
        "files": [
          {
            "filename": ".gitignore",
            "status": "added",
            "additions": 2,
            "deletions": 0
          },
          {
            "filename": "favicon.svg",
            "status": "added",
            "additions": 4,
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
            "additions": 19,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "added",
            "additions": 96,
            "deletions": 0
          },
          {
            "filename": "scripts/check.mjs",
            "status": "added",
            "additions": 60,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 97,
            "deletions": 0
          },
          {
            "filename": "src/prereq-scout.js",
            "status": "added",
            "additions": 456,
            "deletions": 0
          },
          {
            "filename": "src/sample-data.js",
            "status": "added",
            "additions": 8,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 288,
            "deletions": 0
          },
          {
            "filename": "test/prereq-scout.test.mjs",
            "status": "added",
            "additions": 28,
            "deletions": 0
          }
        ]
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
        "created": true,
        "updated": true,
        "commitCount": 2,
        "commits": [
          {
            "sha": "a410a9594fb5e836122e80b01654a1a3034bda07",
            "shortSha": "a410a95",
            "url": "https://github.com/bte808/fun-20260527-b-move-window/commit/a410a9594fb5e836122e80b01654a1a3034bda07",
            "message": "Add next checkpoint focus",
            "committedAt": "2026-05-27T09:46:24Z",
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
                "additions": 1,
                "deletions": 0,
                "changes": 1
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 49,
                "deletions": 0,
                "changes": 49
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
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
                "additions": 95,
                "deletions": 0,
                "changes": 95
              },
              {
                "filename": "test/planner.test.mjs",
                "status": "modified",
                "additions": 7,
                "deletions": 0,
                "changes": 7
              }
            ]
          },
          {
            "sha": "332c317ab4ed89560c10df9c2273b308bd06fd24",
            "shortSha": "332c317",
            "url": "https://github.com/bte808/fun-20260527-b-move-window/commit/332c317ab4ed89560c10df9c2273b308bd06fd24",
            "message": "Create Move Window planner",
            "committedAt": "2026-05-27T05:27:15Z",
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
                "additions": 67,
                "deletions": 0,
                "changes": 67
              },
              {
                "filename": "app.js",
                "status": "added",
                "additions": 518,
                "deletions": 0,
                "changes": 518
              },
              {
                "filename": "index.html",
                "status": "added",
                "additions": 140,
                "deletions": 0,
                "changes": 140
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
                "additions": 34,
                "deletions": 0,
                "changes": 34
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 452,
                "deletions": 0,
                "changes": 452
              },
              {
                "filename": "test/planner.test.mjs",
                "status": "added",
                "additions": 31,
                "deletions": 0,
                "changes": 31
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
            "additions": 518,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 140,
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
            "additions": 67,
            "deletions": 0
          },
          {
            "filename": "scripts/check.mjs",
            "status": "added",
            "additions": 34,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 452,
            "deletions": 0
          },
          {
            "filename": "test/planner.test.mjs",
            "status": "added",
            "additions": 31,
            "deletions": 0
          }
        ]
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
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "02f96ceff3c832bc4dd8e8b0d34fef1a64da321d",
            "shortSha": "02f96ce",
            "url": "https://github.com/bte808/fun-20260526-c-quiz-map/commit/02f96ceff3c832bc4dd8e8b0d34fef1a64da321d",
            "message": "Add next review actions",
            "committedAt": "2026-05-27T11:04:44Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 3,
                "deletions": 1,
                "changes": 4
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 1,
                "deletions": 0,
                "changes": 1
              },
              {
                "filename": "src/quiz-map.js",
                "status": "modified",
                "additions": 38,
                "deletions": 1,
                "changes": 39
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 8,
                "deletions": 0,
                "changes": 8
              },
              {
                "filename": "test/quiz-map.test.mjs",
                "status": "modified",
                "additions": 3,
                "deletions": 0,
                "changes": 3
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 3,
            "deletions": 1
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 1,
            "deletions": 0
          },
          {
            "filename": "src/quiz-map.js",
            "status": "modified",
            "additions": 38,
            "deletions": 1
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 8,
            "deletions": 0
          },
          {
            "filename": "test/quiz-map.test.mjs",
            "status": "modified",
            "additions": 3,
            "deletions": 0
          }
        ]
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
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "2578a9f54ce0ea54d0d3f5a46121ad9e164f2085",
            "shortSha": "2578a9f",
            "url": "https://github.com/bte808/fun-20260526-a-odd-tile/commit/2578a9f54ce0ea54d0d3f5a46121ad9e164f2085",
            "message": "Improve odd tile sprint start flow",
            "committedAt": "2026-05-27T10:20:33Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 7,
                "deletions": 5,
                "changes": 12
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 3,
                "deletions": 3,
                "changes": 6
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 10,
                "deletions": 3,
                "changes": 13
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 3,
            "deletions": 3
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 7,
            "deletions": 5
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 10,
            "deletions": 3
          }
        ]
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
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "96b4bb56cd2aac69e5d9fd021053ae56d18aeacc",
            "shortSha": "96b4bb5",
            "url": "https://github.com/bte808/fun-20260520-dice-target/commit/96b4bb56cd2aac69e5d9fd021053ae56d18aeacc",
            "message": "Add practice archive mode",
            "committedAt": "2026-05-27T11:32:13Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 13,
                "deletions": 1,
                "changes": 14
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 13,
                "deletions": 0,
                "changes": 13
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 53,
                "deletions": 3,
                "changes": 56
              },
              {
                "filename": "src/puzzle.js",
                "status": "modified",
                "additions": 13,
                "deletions": 0,
                "changes": 13
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 76,
                "deletions": 1,
                "changes": 77
              },
              {
                "filename": "test/puzzle.test.mjs",
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
            "additions": 13,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 13,
            "deletions": 1
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 53,
            "deletions": 3
          },
          {
            "filename": "src/puzzle.js",
            "status": "modified",
            "additions": 13,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 76,
            "deletions": 1
          },
          {
            "filename": "test/puzzle.test.mjs",
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
