+++
title = "i18next-turbo"
description = "Tooling and workflows for scalable localization systems."
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

i18next-turbo is a set of tools and workflows designed to make large-scale localization manageable, consistent, and fast.

It builds on top of the i18next ecosystem, adding structure and automation where the default tooling leaves gaps.

## Why

Localization at scale is a coordination problem as much as a technical one. Missing keys, stale translations, inconsistent namespaces, and broken interpolation patterns are common failure modes that slow teams down.

i18next-turbo provides the CLI tooling, validation, and pipeline integration to catch these issues before they reach production.

## Features

- Key extraction from source code via AST analysis
- Namespace consistency validation
- Missing/unused key detection
- CI-friendly output formats
- Translation file diffing and merge conflict resolution
