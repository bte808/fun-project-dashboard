window.FUN_PROJECT_DASHBOARD_DATA = {
  "meta": {
    "title": "2026-05-30 每日趣味项目总览仪表盘",
    "owner": "bte808",
    "repository": "fun-project-dashboard",
    "repositoryUrl": "https://github.com/bte808/fun-project-dashboard",
    "runDate": "2026-05-30",
    "timezone": "Asia/Shanghai",
    "generatedAt": "2026-05-30T14:06:08.275Z",
    "generatedAtShanghaiDate": "2026-05-30",
    "source": "GitHub public repository API",
    "scanRule": "Public owner repositories matching fun-* or README daily-fun-project signals; dashboard repo excluded from project stats.",
    "todayWindowUtc": {
      "startIso": "2026-05-29T16:00:00.000Z",
      "endIso": "2026-05-30T15:59:59.999Z"
    },
    "todayStory": "今天公开仓库中检测到 3 个新建项目、9 个今日有变动的项目，共 9 个 commit。",
    "automationChecks": {
      "dailyIncubator": {
        "status": "detected",
        "label": "已检测到",
        "note": "公开 fun-* 仓库中检测到 3 个今天创建的项目。"
      },
      "oldProjectMaintenance": {
        "status": "detected",
        "label": "已检测到",
        "note": "检测到 6 个旧项目今天有公开 commit。"
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
        "name": "fun-20260530-c-repro-notebook",
        "url": "https://github.com/bte808/fun-20260530-c-repro-notebook",
        "reason": "今天新建；Local-first notebook reproducibility card generator for study and research notes"
      },
      {
        "name": "fun-20260530-b-extension-risk-card",
        "url": "https://github.com/bte808/fun-20260530-b-extension-risk-card",
        "reason": "今天新建；Local-first VS Code extension install risk card"
      },
      {
        "name": "fun-20260530-a-consent-comet",
        "url": "https://github.com/bte808/fun-20260530-a-consent-comet",
        "reason": "今天新建；A fast static browser game about triaging permission comets."
      },
      {
        "name": "fun-20260521-c-concept-bridge",
        "url": "https://github.com/bte808/fun-20260521-c-concept-bridge",
        "reason": "今天更新 1 个 commit；Local study-notes helper that turns rough notes into concept maps and recall prompts"
      }
    ],
    "collectionWarnings": []
  },
  "metrics": {
    "totalProjects": 30,
    "todayNew": 3,
    "todayUpdated": 9,
    "todayCommits": 9,
    "needsReview": 25,
    "techDistribution": {
      "JavaScript": 30
    }
  },
  "projects": [
    {
      "name": "fun-20260530-c-repro-notebook",
      "url": "https://github.com/bte808/fun-20260530-c-repro-notebook",
      "description": "Local-first notebook reproducibility card generator for study and research notes",
      "defaultBranch": "main",
      "createdAt": "2026-05-30T02:54:31Z",
      "updatedAt": "2026-05-30T02:54:43Z",
      "createdDateShanghai": "2026-05-30",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 22506,
        "CSS": 7478,
        "HTML": 3632
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first notebook reproducibility card generator for study and research notes",
        "usefulness": "Notebook workflows are easy to understand while you are working, but hard to rerun later when the data source, package versions, random seed, or output files are only implicit. This tool gives the notebook a small \"hand...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5197 --bind localhost",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "c344dc0a48b9eadbb20ceb5cf909191d6f3e80d5",
            "shortSha": "c344dc0",
            "url": "https://github.com/bte808/fun-20260530-c-repro-notebook/commit/c344dc0a48b9eadbb20ceb5cf909191d6f3e80d5",
            "message": "Ship repro notebook card",
            "committedAt": "2026-05-30T02:54:24Z",
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
                "additions": 80,
                "deletions": 0,
                "changes": 80
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
                "filename": "scripts/smoke-test.mjs",
                "status": "added",
                "additions": 56,
                "deletions": 0,
                "changes": 56
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 230,
                "deletions": 0,
                "changes": 230
              },
              {
                "filename": "src/reproNotebook.js",
                "status": "added",
                "additions": 371,
                "deletions": 0,
                "changes": 371
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 463,
                "deletions": 0,
                "changes": 463
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
            "additions": 6,
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
            "additions": 80,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 56,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 230,
            "deletions": 0
          },
          {
            "filename": "src/reproNotebook.js",
            "status": "added",
            "additions": 371,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 463,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260530-b-extension-risk-card",
      "url": "https://github.com/bte808/fun-20260530-b-extension-risk-card",
      "description": "Local-first VS Code extension install risk card",
      "defaultBranch": "main",
      "createdAt": "2026-05-30T02:31:46Z",
      "updatedAt": "2026-05-30T02:32:02Z",
      "createdDateShanghai": "2026-05-30",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 30331,
        "CSS": 5803,
        "HTML": 2908
      },
      "type": "浏览器小游戏",
      "readme": {
        "oneLine": "Local-first VS Code extension install risk card",
        "usefulness": "Small productivity extensions can save real time, but installing one into a work editor is still a trust decision. Extension Risk Card turns the parts worth checking into a short, repeatable checklist before you give a...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5207 --bind localhost",
        "verification": "verify:browser expects a Chromium-compatible browser. On non-macOS machines, set CHROME_BIN if Chrome is not on the normal command path."
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "7578ab54eb00c7e018fbfed8f66ecc5c02ebdd7f",
            "shortSha": "7578ab5",
            "url": "https://github.com/bte808/fun-20260530-b-extension-risk-card/commit/7578ab54eb00c7e018fbfed8f66ecc5c02ebdd7f",
            "message": "Ship extension risk card",
            "committedAt": "2026-05-30T02:31:39Z",
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
                "additions": 64,
                "deletions": 0,
                "changes": 64
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
                "additions": 93,
                "deletions": 0,
                "changes": 93
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 19,
                "deletions": 0,
                "changes": 19
              },
              {
                "filename": "scripts/browser-verify.mjs",
                "status": "added",
                "additions": 222,
                "deletions": 0,
                "changes": 222
              },
              {
                "filename": "scripts/static-check.mjs",
                "status": "added",
                "additions": 31,
                "deletions": 0,
                "changes": 31
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 174,
                "deletions": 0,
                "changes": 174
              },
              {
                "filename": "src/risk-engine.js",
                "status": "added",
                "additions": 505,
                "deletions": 0,
                "changes": 505
              },
              {
                "filename": "styles.css",
                "status": "added",
                "additions": 377,
                "deletions": 0,
                "changes": 377
              },
              {
                "filename": "test/risk-engine.test.mjs",
                "status": "added",
                "additions": 44,
                "deletions": 0,
                "changes": 44
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
            "additions": 6,
            "deletions": 0
          },
          {
            "filename": "index.html",
            "status": "added",
            "additions": 93,
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
            "additions": 64,
            "deletions": 0
          },
          {
            "filename": "scripts/browser-verify.mjs",
            "status": "added",
            "additions": 222,
            "deletions": 0
          },
          {
            "filename": "scripts/static-check.mjs",
            "status": "added",
            "additions": 31,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 174,
            "deletions": 0
          },
          {
            "filename": "src/risk-engine.js",
            "status": "added",
            "additions": 505,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "added",
            "additions": 377,
            "deletions": 0
          },
          {
            "filename": "test/risk-engine.test.mjs",
            "status": "added",
            "additions": 44,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260530-a-consent-comet",
      "url": "https://github.com/bte808/fun-20260530-a-consent-comet",
      "description": "A fast static browser game about triaging permission comets.",
      "defaultBranch": "main",
      "createdAt": "2026-05-30T02:15:03Z",
      "updatedAt": "2026-05-30T02:15:20Z",
      "createdDateShanghai": "2026-05-30",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19583,
        "CSS": 9504,
        "HTML": 4032
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "A fast static browser game about triaging permission comets.",
        "usefulness": "It turns a common digital reflex into a quick practice loop: slow down just enough to separate small local actions from broad or unclear requests. The game is intentionally short, so it can be played once and shared wit...",
        "whyFun": "The cards are readable at a glance, but streak pressure makes the choices feel arcade-fast. A clean run feels like sweeping a noisy orbit into order; a wrong approve or deny visibly dents focus and breaks the streak.",
        "runCommand": "npm start",
        "verification": "待补充"
      },
      "today": {
        "created": true,
        "updated": true,
        "commitCount": 1,
        "commits": [
          {
            "sha": "bea89cc3cf7d9b15eaaa02eb912c70843cd39c8f",
            "shortSha": "bea89cc",
            "url": "https://github.com/bte808/fun-20260530-a-consent-comet/commit/bea89cc3cf7d9b15eaaa02eb912c70843cd39c8f",
            "message": "Ship Consent Comet browser game",
            "committedAt": "2026-05-30T02:14:53Z",
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
                "additions": 83,
                "deletions": 0,
                "changes": 83
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
                "additions": 119,
                "deletions": 0,
                "changes": 119
              },
              {
                "filename": "package.json",
                "status": "added",
                "additions": 19,
                "deletions": 0,
                "changes": 19
              },
              {
                "filename": "scripts/smoke-test.mjs",
                "status": "added",
                "additions": 78,
                "deletions": 0,
                "changes": 78
              },
              {
                "filename": "src/app.js",
                "status": "added",
                "additions": 214,
                "deletions": 0,
                "changes": 214
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
                "additions": 559,
                "deletions": 0,
                "changes": 559
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
            "additions": 119,
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
            "additions": 83,
            "deletions": 0
          },
          {
            "filename": "scripts/smoke-test.mjs",
            "status": "added",
            "additions": 78,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "added",
            "additions": 214,
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
            "additions": 559,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    },
    {
      "name": "fun-20260529-c-lit-scope-grid",
      "url": "https://github.com/bte808/fun-20260529-c-lit-scope-grid",
      "description": "Local-first literature review matrix builder for paper reading notes",
      "defaultBranch": "main",
      "createdAt": "2026-05-29T02:51:14Z",
      "updatedAt": "2026-05-29T10:27:44Z",
      "createdDateShanghai": "2026-05-29",
      "updatedDateShanghai": "2026-05-29",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 26122,
        "CSS": 6806,
        "HTML": 3494
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Local-first literature review matrix builder for paper reading notes",
        "usefulness": "Traditional literature matrix templates are helpful, but filling them manually often hides missing evidence pointers, limitations, or thin themes. Lit Scope Grid keeps the workflow small: paste notes, inspect the matrix...",
        "whyFun": "待补充",
        "runCommand": "python3 -m http.server 5191 --bind localhost",
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
      "name": "fun-20260529-a-buffer-relay",
      "url": "https://github.com/bte808/fun-20260529-a-buffer-relay",
      "description": "Two-slot packet relay browser puzzle",
      "defaultBranch": "main",
      "createdAt": "2026-05-29T02:46:23Z",
      "updatedAt": "2026-05-29T09:08:29Z",
      "createdDateShanghai": "2026-05-29",
      "updatedDateShanghai": "2026-05-29",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 26933,
        "CSS": 6756,
        "HTML": 4487
      },
      "type": "学习练习",
      "readme": {
        "oneLine": "Two-slot packet relay browser puzzle",
        "usefulness": "It turns an abstract systems idea into a quick tactile challenge. The game makes limited memory feel concrete: you only have two slots, and every overwrite can make the target sequence impossible.",
        "whyFun": "The puzzles are small enough to learn in one round but still reward planning. Clean pair flips build combo points, wrong emits create glitches, and perfect runs feel like snapping a tiny packet machine into sync.",
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
      "name": "fun-20260529-b-return-window",
      "url": "https://github.com/bte808/fun-20260529-b-return-window",
      "description": "Local-first return deadline tracker with next-action cues and calendar reminders",
      "defaultBranch": "main",
      "createdAt": "2026-05-29T02:42:20Z",
      "updatedAt": "2026-05-29T09:27:40Z",
      "createdDateShanghai": "2026-05-29",
      "updatedDateShanghai": "2026-05-29",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 17982,
        "CSS": 6505,
        "HTML": 4512
      },
      "type": "效率工具",
      "readme": {
        "oneLine": "Local-first return deadline tracker with next-action cues and calendar reminders",
        "usefulness": "Return windows are easy to lose because the important detail is scattered across email, receipts, packaging, and memory. This app turns each uncertain purchase into one small decision record: what to test, what must sta...",
        "whyFun": "待补充",
        "runCommand": "npm run serve",
        "verification": "The tests cover deadline math, status labels, next-action cues, checklist output, calendar export, and form validation."
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
        "updated": false,
        "commitCount": 0,
        "commits": [],
        "files": []
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
      "updatedAt": "2026-05-29T10:06:08Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-29",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 24240,
        "CSS": 7307,
        "HTML": 2262
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
      "updatedAt": "2026-05-29T10:44:52Z",
      "createdDateShanghai": "2026-05-23",
      "updatedDateShanghai": "2026-05-29",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 27377,
        "CSS": 9086,
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
      "updatedAt": "2026-05-30T10:45:50Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 23242,
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
            "sha": "590f9be955848639f300d5f8df73656eec9c23b1",
            "shortSha": "590f9be",
            "url": "https://github.com/bte808/fun-20260521-c-concept-bridge/commit/590f9be955848639f300d5f8df73656eec9c23b1",
            "message": "Add source refs to flashcard CSV",
            "committedAt": "2026-05-30T10:45:44Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 1,
                "deletions": 1,
                "changes": 2
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 1,
                "deletions": 1,
                "changes": 2
              },
              {
                "filename": "src/concept-engine.js",
                "status": "modified",
                "additions": 2,
                "deletions": 2,
                "changes": 4
              },
              {
                "filename": "test/concept-engine.test.mjs",
                "status": "modified",
                "additions": 5,
                "deletions": 2,
                "changes": 7
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 1,
            "deletions": 1
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 1,
            "deletions": 1
          },
          {
            "filename": "src/concept-engine.js",
            "status": "modified",
            "additions": 2,
            "deletions": 2
          },
          {
            "filename": "test/concept-engine.test.mjs",
            "status": "modified",
            "additions": 5,
            "deletions": 2
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
      "updatedAt": "2026-05-30T10:26:54Z",
      "createdDateShanghai": "2026-05-21",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 19849,
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
            "sha": "3152549f524d2d8ec2cc2bde2ef1d431b76a6fec",
            "shortSha": "3152549",
            "url": "https://github.com/bte808/fun-20260521-b-meeting-brief/commit/3152549f524d2d8ec2cc2bde2ef1d431b76a6fec",
            "message": "Improve action label parsing",
            "committedAt": "2026-05-30T10:26:43Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 3,
                "deletions": 0,
                "changes": 3
              },
              {
                "filename": "src/parser.js",
                "status": "modified",
                "additions": 8,
                "deletions": 5,
                "changes": 13
              },
              {
                "filename": "test/parser.test.mjs",
                "status": "modified",
                "additions": 15,
                "deletions": 0,
                "changes": 15
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 3,
            "deletions": 0
          },
          {
            "filename": "src/parser.js",
            "status": "modified",
            "additions": 8,
            "deletions": 5
          },
          {
            "filename": "test/parser.test.mjs",
            "status": "modified",
            "additions": 15,
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
      "updatedAt": "2026-05-30T10:11:36Z",
      "createdDateShanghai": "2026-05-20",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 22692,
        "CSS": 7780,
        "HTML": 4562
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
            "sha": "56e7d10a7c41ec91342a66b81eba3028c704a3a6",
            "shortSha": "56e7d10",
            "url": "https://github.com/bte808/fun-20260520-dice-target/commit/56e7d10a7c41ec91342a66b81eba3028c704a3a6",
            "message": "Add shareable dice challenge",
            "committedAt": "2026-05-30T10:11:24Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 8,
                "deletions": 0,
                "changes": 8
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 5,
                "deletions": 0,
                "changes": 5
              },
              {
                "filename": "src/app.js",
                "status": "modified",
                "additions": 54,
                "deletions": 6,
                "changes": 60
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 42,
                "deletions": 5,
                "changes": 47
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 5,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 8,
            "deletions": 0
          },
          {
            "filename": "src/app.js",
            "status": "modified",
            "additions": 54,
            "deletions": 6
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 42,
            "deletions": 5
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
      "updatedAt": "2026-05-30T09:50:30Z",
      "createdDateShanghai": "2026-05-19",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 20894,
        "CSS": 5386,
        "HTML": 2942
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
            "sha": "d7315790f63332adddee79104ae97a68c41dc00a",
            "shortSha": "d731579",
            "url": "https://github.com/bte808/fun-20260519-pulse-poem/commit/d7315790f63332adddee79104ae97a68c41dc00a",
            "message": "Improve Pulse Poem sharing and playback",
            "committedAt": "2026-05-30T09:50:17Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 2,
                "deletions": 1,
                "changes": 3
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 21,
                "deletions": 1,
                "changes": 22
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
                "additions": 6,
                "deletions": 0,
                "changes": 6
              },
              {
                "filename": "tests/pulse.test.js",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "app.js",
            "status": "modified",
            "additions": 21,
            "deletions": 1
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
            "deletions": 1
          },
          {
            "filename": "src/pulse.js",
            "status": "modified",
            "additions": 6,
            "deletions": 0
          },
          {
            "filename": "tests/pulse.test.js",
            "status": "modified",
            "additions": 4,
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
      "updatedAt": "2026-05-30T09:29:09Z",
      "createdDateShanghai": "2026-05-18",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 22306,
        "CSS": 7420,
        "HTML": 4339
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
            "sha": "f1b8ebe243bee51a7802bbc28c01e4d7fe5bca87",
            "shortSha": "f1b8ebe",
            "url": "https://github.com/bte808/fun-20260518-signal-bento/commit/f1b8ebe243bee51a7802bbc28c01e4d7fe5bca87",
            "message": "Add undo control to Signal Bento",
            "committedAt": "2026-05-30T09:29:03Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 3,
                "deletions": 2,
                "changes": 5
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 56,
                "deletions": 2,
                "changes": 58
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 3,
                "deletions": 0,
                "changes": 3
              },
              {
                "filename": "scripts/smoke-test.cjs",
                "status": "modified",
                "additions": 7,
                "deletions": 0,
                "changes": 7
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 4,
                "deletions": 0,
                "changes": 4
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "app.js",
            "status": "modified",
            "additions": 56,
            "deletions": 2
          },
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 3,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 3,
            "deletions": 2
          },
          {
            "filename": "scripts/smoke-test.cjs",
            "status": "modified",
            "additions": 7,
            "deletions": 0
          },
          {
            "filename": "styles.css",
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
      "name": "fun-20260517-orbit-mods",
      "url": "https://github.com/bte808/fun-20260517-orbit-mods",
      "description": "Tiny browser orbit sequencer with swappable music mods",
      "defaultBranch": "main",
      "createdAt": "2026-05-17T06:08:51Z",
      "updatedAt": "2026-05-30T09:13:44Z",
      "createdDateShanghai": "2026-05-17",
      "updatedDateShanghai": "2026-05-30",
      "primaryLanguage": "JavaScript",
      "languages": {
        "JavaScript": 27437,
        "CSS": 6052,
        "HTML": 4488
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
            "sha": "b75620893786875a570bd3ca75df535bfff778aa",
            "shortSha": "b756208",
            "url": "https://github.com/bte808/fun-20260517-orbit-mods/commit/b75620893786875a570bd3ca75df535bfff778aa",
            "message": "Add saved loop slots and audio feedback",
            "committedAt": "2026-05-30T09:13:32Z",
            "files": [
              {
                "filename": "README.md",
                "status": "modified",
                "additions": 6,
                "deletions": 2,
                "changes": 8
              },
              {
                "filename": "app.js",
                "status": "modified",
                "additions": 166,
                "deletions": 6,
                "changes": 172
              },
              {
                "filename": "index.html",
                "status": "modified",
                "additions": 12,
                "deletions": 0,
                "changes": 12
              },
              {
                "filename": "scripts/check.mjs",
                "status": "modified",
                "additions": 3,
                "deletions": 0,
                "changes": 3
              },
              {
                "filename": "styles.css",
                "status": "modified",
                "additions": 23,
                "deletions": 0,
                "changes": 23
              }
            ]
          }
        ],
        "files": [
          {
            "filename": "app.js",
            "status": "modified",
            "additions": 166,
            "deletions": 6
          },
          {
            "filename": "index.html",
            "status": "modified",
            "additions": 12,
            "deletions": 0
          },
          {
            "filename": "README.md",
            "status": "modified",
            "additions": 6,
            "deletions": 2
          },
          {
            "filename": "scripts/check.mjs",
            "status": "modified",
            "additions": 3,
            "deletions": 0
          },
          {
            "filename": "styles.css",
            "status": "modified",
            "additions": 23,
            "deletions": 0
          }
        ]
      },
      "needsReview": true,
      "visibilitySource": "GitHub public repository data"
    }
  ]
};
