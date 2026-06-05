# Reviewer packet

Last updated: 2026-06-05 20:38:21 CST.

This is the compact public checklist for reviewing the `bte808` daily fun project evidence surface. It only links to public GitHub or GitHub Pages URLs.

## Start here

- Live dashboard: [bte808.github.io/fun-project-dashboard](https://bte808.github.io/fun-project-dashboard/)
- Source repository: [bte808/fun-project-dashboard](https://github.com/bte808/fun-project-dashboard)
- Latest release: [fun-project-dashboard v0.2.6](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.6)
- Detailed application brief: [Codex OSS application evidence brief](https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md)

## Evidence at a glance

- Public project snapshot: 48 tracked public projects, 2 updated today, 2 public commits today.
- External OSS PR snapshot: 16 tracked PRs, 4 merged, 10 open with no failing checks, 2 requiring user action.
- Release and maintenance snapshot: 5 highlighted own releases, including the dashboard release itself.
- Live dashboard reviewer panel: exposes brief, CI, Pages, OSS log, MIT license, and governance links in one place.

## Verification links

- Dashboard CI workflow: [actions/workflows/ci.yml](https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml)
- Pages deployment workflow: [actions/workflows/pages/pages-build-deployment](https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment)
- Machine-readable project snapshot: [data/projects.json](https://github.com/bte808/fun-project-dashboard/blob/main/data/projects.json)
- Machine-readable OSS PR snapshot: [data/oss-contributions.json](https://github.com/bte808/fun-project-dashboard/blob/main/data/oss-contributions.json)

## OSS contribution evidence

- Merged PRs: [prebid/prebid.github.io#6598](https://github.com/prebid/prebid.github.io/pull/6598), [MicrosoftDocs/azure-docs#128553](https://github.com/MicrosoftDocs/azure-docs/pull/128553), [OpenC3/cosmos#3445](https://github.com/OpenC3/cosmos/pull/3445), [apache/cloudberry-site#373](https://github.com/apache/cloudberry-site/pull/373)
- Open PRs with no failing checks: [OSS contribution log](https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md)
- Known user-action blockers: [apple/container#1646](https://github.com/apple/container/pull/1646), [rtk-ai/rtk#2273](https://github.com/rtk-ai/rtk/pull/2273)

## Maintenance and governance

- License: [MIT License](https://github.com/bte808/fun-project-dashboard/blob/main/LICENSE)
- Contributing guide: [CONTRIBUTING.md](https://github.com/bte808/fun-project-dashboard/blob/main/CONTRIBUTING.md)
- Security policy: [SECURITY.md](https://github.com/bte808/fun-project-dashboard/blob/main/SECURITY.md)
- Code of conduct: [CODE_OF_CONDUCT.md](https://github.com/bte808/fun-project-dashboard/blob/main/CODE_OF_CONDUCT.md)
- Issue templates: [bug report](https://github.com/bte808/fun-project-dashboard/blob/main/.github/ISSUE_TEMPLATE/bug_report.yml), [improvement](https://github.com/bte808/fun-project-dashboard/blob/main/.github/ISSUE_TEMPLATE/improvement.yml)

## Reproducibility

```bash
RUN_DATE=YYYY-MM-DD npm run collect
GITHUB_TOKEN="$(gh auth token)" npm run collect:oss
npm run brief
npm run check
npm run check:release
DASHBOARD_DOM_SMOKE_ONLY=1 npm run check
```

The release-alignment check is intentionally part of CI so the package version, live dashboard footer, curated evidence, generated data, README summary, application brief, reviewer packet, and brief generator stay aligned to the same dashboard release.
