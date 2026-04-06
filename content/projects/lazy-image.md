+++
title = "lazy-image"
description = "Node.js web image engine—Rust (NAPI-RS) core, smaller delivery-oriented outputs vs sharp tradeoffs, mmap / security-first defaults."
template = "project-page.html"
weight = 1

[extra]
category = "Rust / Image Processing"
status = "Active"
featured = true
hero = true
tech = ["Rust", "Node.js", "NAPI-RS", "WebAssembly"]
github = "https://github.com/albert-einshutoin/lazy-image"
npm = "https://www.npmjs.com/package/@alberteinshutoin/lazy-image"
+++

Aligned with the [lazy-image README](https://github.com/albert-einshutoin/lazy-image): a **Rust core** (NAPI-RS) for **web delivery**—**smaller files** in targeted scenarios versus default sharp paths, trading **encode speed** for **bytes on the wire** when bandwidth cost dominates. It is **not** a drop-in sharp replacement; feature breadth and raw throughput differ by design.

**Not** the GitHub “About” blurb about generic lazy-loading—that metadata is stale; the repo documentation describes an **optimisation / processing** engine.

Personal goals on this site (compression-first encoders, eventual WASM on V8, easing JS runtime limits) sit on top of what already ships: zero-copy **mmap** paths, metadata stripping / firewall posture, fluent `ImageEngine` API, mozjpeg / libwebp / ravif stack for JPEG / WebP / AVIF.

## Design principles (repo + roadmap language)

- **Bandwidth and safety** before claiming raw encode speed crowns
- Pure Rust encoders for the formats in scope—not a full sharp feature superset
- Pipeline-friendly usage; bounded memory stories for constrained runtimes
- WASM remains a deliberate direction alongside today’s native add-ons

## Links

- [github.com/albert-einshutoin/lazy-image](https://github.com/albert-einshutoin/lazy-image) · [npm](https://www.npmjs.com/package/@alberteinshutoin/lazy-image)
