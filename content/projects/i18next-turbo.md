+++
title = "i18next-turbo"
description = "i18next workflows with Rust-backed tooling to cut JavaScript overhead at scale."
template = "project-page.html"
weight = 3

[extra]
category = "i18n / Tooling"
status = "Active"
featured = true
tech = ["TypeScript", "i18next", "CLI", "AST"]
github = "https://github.com/albert-einshutoin/i18next-turbo"
npm = "https://www.npmjs.com/package/i18next-turbo"
+++

The motivation is blunt: **large-scale i18n work piles up JavaScript overhead**—parsing, validation, diffing, CI checks—and I wanted to **erase as much of that tax as possible with Rust**, while staying compatible with the i18next stack teams already use.

It is still a structured toolkit on top of i18next: automation and guardrails where vanilla workflows usually sprawl.

## Features

- Key extraction from source code via AST analysis
- Namespace consistency validation
- Missing/unused key detection
- CI-friendly output formats
- Translation file diffing and merge conflict resolution

*(Detailed maturity per feature is still being tightened—the shapes above are the targets the CLI is chasing.)*
