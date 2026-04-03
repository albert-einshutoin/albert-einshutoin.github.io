+++
title = "lazy-image"
description = "High-performance image processing for Node.js with a Rust-powered core."
template = "project-page.html"
weight = 1

[extra]
category = "Rust / Image Processing"
status = "Active"
featured = true
tech = ["Rust", "Node.js", "napi-rs", "WebAssembly"]
github = "https://github.com/albert-einshutoin/lazy-image"
npm = "https://www.npmjs.com/package/@alberteinshutoin/lazy-image"
+++

lazy-image is a high-performance image processing library for Node.js, powered by a Rust core via napi-rs.

It provides fast, memory-efficient image transformations — resize, format conversion, compression — without spawning child processes or relying on system-level dependencies like ImageMagick.

## Why

Most image processing in the Node.js ecosystem either depends on native binaries that are painful to install, or runs entirely in JavaScript with significant performance limitations.

lazy-image bridges this gap: Rust handles the compute-heavy work, while the Node.js API remains ergonomic and familiar.

## Design Principles

- Zero system dependencies — ships as a prebuilt binary
- Stream-friendly API for pipeline integration
- Predictable memory usage under high concurrency
- Format-aware: AVIF, WebP, JPEG, PNG with intelligent defaults
