+++
title = "i18next-turbo"
description = "Rust + SWC key extraction and i18next workflows—fast CI, watch mode, optionalDependencies binaries."
template = "project-page.html"
weight = 3

[extra]
category = "i18n / Tooling"
status = "Active"
featured = true
tech = ["Rust", "SWC", "TypeScript", "i18next", "CLI"]
github = "https://github.com/albert-einshutoin/i18next-turbo"
npm = "https://www.npmjs.com/package/i18next-turbo"
+++

Per the [upstream README](https://github.com/albert-einshutoin/i18next-turbo), **i18next-turbo** is a **Rust + SWC** extractor aligned with i18next-style projects: optimized for **fast CI** and **low-latency watch**. Published builds resolve a **platform binary** via `optionalDependencies` (see their installation docs).

Motivation matches the implementation: move parse-heavy work off a slow pure-JS path while keeping i18next conventions.

## CLI (as documented upstream)

- `init` — scaffold config
- `extract` — keys → locale files
- `watch` — continuous sync in development
- `sync` — sync from cache / results
- `check` — dead-key detection / removal
- `lint` — hardcoded user-facing strings
- `status` — translation progress
- `typegen` — TypeScript resource types
- `rename-key` — safe key renames
- `migrate-config` — from i18next-parser–style configs

## Links

- [github.com/albert-einshutoin/i18next-turbo](https://github.com/albert-einshutoin/i18next-turbo) · [npm](https://www.npmjs.com/package/i18next-turbo)
