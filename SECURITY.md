# Security

This repository publishes a static dashboard from public GitHub data. It should not require an account, backend service, tracking script, remote runtime dependency, or secret for normal viewing.

## Supported versions

The public `main` branch is the supported version.

## Data handling

- The live page reads committed `data/*.js` files from GitHub Pages.
- Collection scripts may use a `GITHUB_TOKEN` for public API rate limits, but tokens must never be written to generated files.
- Generated data must not include local filesystem paths, private repository names, private commit data, cookies, browser sessions, or personal credentials.
- Fallback collection should surface degraded-source warnings in `meta.collectionWarnings`.

## Reporting a security or privacy issue

If you find a vulnerability or a privacy leak, avoid posting secrets or sensitive details in a public issue. Use GitHub's private vulnerability reporting if it is available for this repository, or open a minimal public issue asking for a maintainer contact path without including exploit details.

Public issues are fine for documentation mistakes, broken links, rendering bugs, and normal data-quality problems.

## Security expectations for changes

- Escape untrusted text before rendering it into HTML.
- Keep generated JavaScript data files aligned with their JSON source files.
- Avoid third-party runtime dependencies unless they are clearly necessary.
- Keep downloads and clipboard actions user-initiated.
- Keep verification strong enough to catch stale generated data and mobile overflow regressions.
