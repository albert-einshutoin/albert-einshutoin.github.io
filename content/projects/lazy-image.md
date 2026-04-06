+++
title = "lazy-image"
description = "Pure Rust image transforms—compression and modern encoders—with a Node API today and WASM on the roadmap."
template = "project-page.html"
weight = 1

[extra]
category = "Rust / Image Processing"
status = "Active"
featured = true
hero = true
tech = ["Rust", "Node.js", "napi-rs", "WebAssembly"]
github = "https://github.com/albert-einshutoin/lazy-image"
npm = "https://www.npmjs.com/package/@alberteinshutoin/lazy-image"
+++

I already knew that formats and encoders differ by extension; what pulled me in was **compression efficiency**—if encoders and pipelines are sharp enough, you can cut storage and bytes on the wire in a measurable way. Alongside that, I wanted to lighten image work in TypeScript—WASM first came to mind—but I intentionally began with a **Pure Rust** image package so the core stays honest before the WASM story hardens.

lazy-image is **not** a Sharp-style “do everything” convenience layer. It focuses on **compression and up-to-date encoders** implemented in Rust, exposed through an ergonomic Node.js surface today.

## Where it is headed

- Move further toward **full WASM** so more logic runs without the usual native-install friction
- Grow the set of **WASM libraries** that fit the V8 / edge-style runtimes I care about
- Keep pushing on **services that run on V8**, easing **JavaScript’s single-process** constraints over time

## Design principles

- Rust-first core; **WASM is the direction**, not an afterthought
- Pure Rust encoders where it matters—not a grab-bag of every image feature
- Stream-friendly API for pipeline integration
- Predictable memory behavior under concurrency
- AVIF, WebP, JPEG, PNG with sensible defaults—because format choice *is* a compression story
