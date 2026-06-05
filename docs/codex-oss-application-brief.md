# Codex for OSS application evidence brief

Last generated: 2026-06-05 15:38:33 CST.

This is a reviewer-facing summary of public OSS evidence for the bte808 GitHub account. It links only to public GitHub or GitHub Pages URLs, and separates completed evidence from open work and user-action blockers.

## Snapshot

- Public dashboard: [fun-project-dashboard](https://bte808.github.io/fun-project-dashboard/)
- Dashboard source: [bte808/fun-project-dashboard](https://github.com/bte808/fun-project-dashboard)
- Public project snapshot: 48 tracked projects, 2 updated today, 2 public commits today.
- OSS PR snapshot last verified: 2026-06-05 15:31:42 CST.
- External OSS PR snapshot: 15 tracked PRs, 4 merged, 9 open with no failing checks, 2 requiring user action.
- Release and maintenance snapshot: 5 own releases highlighted, 2 own projects updated today.

## Dashboard Evidence Infrastructure

- [Latest release: fun-project-dashboard v0.2.4](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.4): Refreshes merged external OSS evidence and generates the reviewer packet from the same source data as the application brief.
- [Dashboard CI workflow](https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml): Public GitHub Actions workflow for Node syntax checks and committed-data smoke verification.
- [GitHub Pages deployment workflow](https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment): Public deployment workflow for the live dashboard.
- [MIT License](https://github.com/bte808/fun-project-dashboard/blob/main/LICENSE): GitHub license API recognizes the repository as MIT-licensed.
- [Contributing guide](https://github.com/bte808/fun-project-dashboard/blob/main/CONTRIBUTING.md): Documents local verification, public-data boundaries, and contribution expectations.
- [Security policy](https://github.com/bte808/fun-project-dashboard/blob/main/SECURITY.md): Documents token/privacy boundaries and coordinated reporting expectations.

## Strongest Public Evidence

- [prebid/prebid.github.io#6598](https://github.com/prebid/prebid.github.io/pull/6598): Merged on 2026-06-04; markdownlint and preview checks passed.
- [MicrosoftDocs/azure-docs#128553](https://github.com/MicrosoftDocs/azure-docs/pull/128553): Merged on 2026-06-04; CLA and Learn Build validation passed.
- [OpenC3/cosmos#3445](https://github.com/OpenC3/cosmos/pull/3445): Merged on 2026-06-04; maintainer approved, SonarCloud and security checks passed.
- [apache/cloudberry-site#373](https://github.com/apache/cloudberry-site/pull/373): Merged on 2026-06-05; greeting check passed.

## Open PRs With No Failing Checks

- [decentraland/docs#108](https://github.com/decentraland/docs/pull/108): Open, mergeable, no check runs detected, waiting for review or maintainer follow-up.
- [qgis/QGIS-Website#1011](https://github.com/qgis/QGIS-Website/pull/1011): Open, mergeable, CLA signed, no failing checks detected, waiting for review or maintainer follow-up.
- [cyberark/conjur#3025](https://github.com/cyberark/conjur/pull/3025): Open, blocked by required review or repository policy, no check runs detected, waiting for review or maintainer follow-up.
- [mia-platform/documentation#2583](https://github.com/mia-platform/documentation/pull/2583): Open, blocked by required review or repository policy, no failing checks detected, waiting for review or maintainer follow-up.
- [OWASP/wrongsecrets#2549](https://github.com/OWASP/wrongsecrets/pull/2549): Open, blocked by required review or repository policy, no check runs detected, waiting for review or maintainer follow-up.
- [apache/rocketmq-site#785](https://github.com/apache/rocketmq-site/pull/785): Open, mergeable, no check runs detected, waiting for review or maintainer follow-up.
- [awslabs/cdk-eks-blueprints#1252](https://github.com/awslabs/cdk-eks-blueprints/pull/1252): Open, blocked by required review or repository policy, no check runs detected, waiting for review or maintainer follow-up.
- [sapcc/helm-charts#11861](https://github.com/sapcc/helm-charts/pull/11861): Open, blocked by required review or repository policy, no failing checks detected, waiting for review or maintainer follow-up.
- [vectordotdev/vector#25574](https://github.com/vectordotdev/vector/pull/25574): Open, blocked by required review or repository policy, CLA signed, spelling and semantic PR checks passed, no failing checks detected, waiting for review or maintainer follow-up.

## Own Project Releases

- [fun-project-dashboard v0.2.4](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.4): Released a fresh evidence snapshot after apache/cloudberry-site#373 merged, and made the reviewer packet generated from the same data as the application brief.
- [maintainer-signal-board v0.7.0](https://github.com/bte808/maintainer-signal-board/releases/tag/v0.7.0): Released saved view presets; issue #12 closed; CI, Pages, local browser smoke, and live browser smoke passed.
- [fun-20260604-b-safe-payout-card v0.2.0](https://github.com/bte808/fun-20260604-b-safe-payout-card/releases/tag/v0.2.0): Released audit trail export; issue #1 closed; core tests and desktop/mobile browser smoke passed.
- [fun-20260604-a-star-sling v1.0.1](https://github.com/bte808/fun-20260604-a-star-sling/releases/tag/v1.0.1): Released self-contained browser smoke verification; live GitHub Pages desktop/mobile checks passed.
- [fun-20260604-c-construct-canvas v1.0.0](https://github.com/bte808/fun-20260604-c-construct-canvas/releases/tag/v1.0.0): Published the initial public release with Node tests, browser smoke verification, and a GitHub Pages demo.

## Known User-Action Blockers

- [apple/container#1646](https://github.com/apple/container/pull/1646): Build passed and maintainer feedback says the change looks good, but the repository requires signed commits. Local Git signing is not configured on this Mac.
- [rtk-ai/rtk#2273](https://github.com/rtk-ai/rtk/pull/2273): Draft PR is mergeable, but CLAassistant reports the CLA is not signed.

## Reproducibility

The dashboard evidence can be refreshed and checked locally:

```bash
RUN_DATE=YYYY-MM-DD npm run collect
GITHUB_TOKEN="$(gh auth token)" npm run collect:oss
npm run brief
npm run check
DASHBOARD_DOM_SMOKE_ONLY=1 npm run check
```

The generated artifacts are:

- [dashboard page](https://bte808.github.io/fun-project-dashboard/)
- [reviewer packet](https://github.com/bte808/fun-project-dashboard/blob/main/docs/reviewer-packet.md)
- [latest dashboard release](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.4)
- [Dashboard CI workflow](https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml)
- [OSS contribution log](https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md)
- [machine-readable OSS PR snapshot](https://github.com/bte808/fun-project-dashboard/blob/main/data/oss-contributions.json)
- [this application evidence brief](https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md)
