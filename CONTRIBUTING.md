# Contributing

Thanks for taking a look at the fun project dashboard. This repository is a public static evidence surface for the `bte808` daily fun project system, so the most useful contributions keep the dashboard honest, verifiable, and easy to inspect.

## Good first contributions

- Improve the README or docs when a verification step is unclear.
- Tighten dashboard layout, accessibility, or mobile overflow behavior.
- Add focused smoke checks for data rendering, filters, evidence cards, or share-summary behavior.
- Improve collection warnings so degraded GitHub API runs are visible instead of silent.
- Add small data-quality checks for stale links, missing project metadata, or mismatched generated files.

## Local setup

The site is static and has no runtime dependencies. Node is used for collection and verification scripts.

```bash
npm run check
```

For CI-compatible verification on Linux:

```bash
DASHBOARD_DOM_SMOKE_ONLY=1 npm run check
```

Optional syntax checks:

```bash
node --check scripts/collect-public-data.mjs
node --check scripts/collect-oss-contributions.mjs
node --check scripts/build-application-brief.mjs
node --check scripts/smoke-test.mjs
```

## Pull request checklist

- Keep the dashboard static and readable without a build step.
- Do not add analytics, trackers, remote scripts, hosted fonts, or account requirements.
- Do not commit tokens, local filesystem paths, private repository data, or browser/session state.
- Run `npm run check` before opening a PR.
- Update README or docs when behavior, data sources, or verification commands change.

## Data boundaries

This project should only publish public GitHub repository data, public PR status, public release links, and intentionally curated evidence. If a collection fallback reads local mirrors, generated output must not expose local paths or private machine details.
