# Codex for OSS application evidence brief

Last generated: 2026-07-08 22:19:23 CST.

This is a reviewer-facing summary of public OSS evidence for the bte808 GitHub account. It links only to public GitHub or GitHub Pages URLs, and separates completed evidence from open work and user-action blockers.

## Snapshot

- Public dashboard: [fun-project-dashboard](https://bte808.github.io/fun-project-dashboard/)
- Dashboard source: [bte808/fun-project-dashboard](https://github.com/bte808/fun-project-dashboard)
- Public project snapshot: 48 tracked projects, 0 updated today, 0 public commits today.
- OSS PR snapshot last verified: 2026-07-08 22:18:06 CST.
- External OSS PR snapshot: 16 tracked PRs, 8 merged, 4 open with no failing checks, 2 requiring user action, 2 closed without merge.
- Release and maintenance snapshot: 1 own releases highlighted, 0 own projects updated today.

## Dashboard Evidence Infrastructure

- [Latest release: fun-project-dashboard v0.2.10](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.10): Freezes the July 8 OSS feedback refresh with merged, closed, and CI-feedback outcomes reconciled.
- [Dashboard CI workflow](https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml): Public GitHub Actions workflow for Node syntax checks and committed-data smoke verification.
- [GitHub Pages deployment workflow](https://github.com/bte808/fun-project-dashboard/actions/workflows/pages/pages-build-deployment): Public deployment workflow for the live dashboard.
- [MIT License](https://github.com/bte808/fun-project-dashboard/blob/main/LICENSE): GitHub license API recognizes the repository as MIT-licensed.
- [Contributing guide](https://github.com/bte808/fun-project-dashboard/blob/main/CONTRIBUTING.md): Documents local verification, public-data boundaries, and contribution expectations.
- [Security policy](https://github.com/bte808/fun-project-dashboard/blob/main/SECURITY.md): Documents token/privacy boundaries and coordinated reporting expectations.

## Strongest Public Evidence

- [prebid/prebid.github.io#6598](https://github.com/prebid/prebid.github.io/pull/6598): Merged on 2026-06-04; markdownlint and preview checks passed.
- [MicrosoftDocs/azure-docs#128553](https://github.com/MicrosoftDocs/azure-docs/pull/128553): Merged on 2026-06-04; CLA and Learn Build validation passed.
- [OpenC3/cosmos#3445](https://github.com/OpenC3/cosmos/pull/3445): Merged on 2026-06-04; maintainer approved, SonarCloud and security checks passed.
- [OWASP/wrongsecrets#2549](https://github.com/OWASP/wrongsecrets/pull/2549): Merged on 2026-06-12; maintainer approved and merged; Dead Link Checker failure came from existing repository links outside the typo diff.
- [sapcc/helm-charts#11861](https://github.com/sapcc/helm-charts/pull/11861): Merged on 2026-06-17; review approved and merged.
- [vectordotdev/vector#25574](https://github.com/vectordotdev/vector/pull/25574): Merged on 2026-06-08; CLA signed, spelling and semantic PR checks passed.
- [apache/cloudberry-site#373](https://github.com/apache/cloudberry-site/pull/373): Merged on 2026-06-05; greeting check passed.
- [ParzivalHack/PySpector#67](https://github.com/ParzivalHack/PySpector/pull/67): Merged on 2026-06-05; README FAQ structure and whitespace checks passed.

## Open PRs With No Failing Checks

- [cyberark/conjur#3025](https://github.com/cyberark/conjur/pull/3025): Open, blocked by required review or repository policy, no check runs detected, waiting for review or maintainer follow-up.
- [mia-platform/documentation#2583](https://github.com/mia-platform/documentation/pull/2583): Open, blocked by required review or repository policy, no failing checks detected, waiting for review or maintainer follow-up.
- [apache/rocketmq-site#785](https://github.com/apache/rocketmq-site/pull/785): Open, mergeable, no failing checks detected, waiting for review or maintainer follow-up.
- [awslabs/cdk-eks-blueprints#1252](https://github.com/awslabs/cdk-eks-blueprints/pull/1252): Open, blocked by required review or repository policy, Link-check CI feedback handled by replacing stale Paralus and gMaestro Slack invite links, then merging upstream main to pick up the current Union docs link fix; targeted markdown-link-check passed locally, no check runs detected, waiting for review or maintainer follow-up.

## Closed Without Merge

- [ParzivalHack/PySpector#68](https://github.com/ParzivalHack/PySpector/pull/68): Closed without merge on 2026-06-05. Closed by maintainer without merge after targeted reporting tests, Ruff, py_compile, and whitespace checks passed.
- [apple/container#1646](https://github.com/apple/container/pull/1646): Closed without merge on 2026-06-25. closed by maintainer due to inactivity; reopening would require rebasing to current main and providing a signed commit.

## Own Project Releases

- [fun-project-dashboard v0.2.10](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.10): Released the July 8 OSS feedback refresh: SAP helm-charts is promoted to merged, Apple container is moved to closed-without-merge, and the AWS cdk-eks-blueprints CI feedback response is recorded.

## Known User-Action Blockers

- [decentraland/docs#108](https://github.com/decentraland/docs/pull/108): Merge conflict detected; contributor refresh is required.
- [rtk-ai/rtk#2273](https://github.com/rtk-ai/rtk/pull/2273): Ready-for-review PR has local cargo fmt, cargo test --all, and cargo clippy --all-targets verification recorded, but CLAassistant reports the CLA is not signed; upstream CI is waiting for maintainer approval to run on the fork.

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
- [latest dashboard release](https://github.com/bte808/fun-project-dashboard/releases/tag/v0.2.10)
- [Dashboard CI workflow](https://github.com/bte808/fun-project-dashboard/actions/workflows/ci.yml)
- [OSS contribution log](https://github.com/bte808/fun-project-dashboard/blob/main/docs/oss-contribution-log.md)
- [machine-readable OSS PR snapshot](https://github.com/bte808/fun-project-dashboard/blob/main/data/oss-contributions.json)
- [this application evidence brief](https://github.com/bte808/fun-project-dashboard/blob/main/docs/codex-oss-application-brief.md)
