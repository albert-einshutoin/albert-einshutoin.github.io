+++
title = "quant-cache"
description = "Economic CDN cache optimization — knapsack-based admission, trace replay, and multi-policy comparison ($/period objective)."
template = "project-page.html"
weight = 4

[extra]
category = "CDN / Optimization"
status = "Active"
featured = true
tech = ["Rust", "CLI", "CDN traces", "Knapsack / ILP", "Simulation"]
github = "https://github.com/albert-einshutoin/quant-cache"
+++

[quant-cache](https://github.com/albert-einshutoin/quant-cache) is a **Rust workspace and `qc` CLI** for CDN operators. It evaluates cache policies with an **economic objective** (latency value, origin savings, stale penalties) in **$/period**—so high hit rate alone is not mistaken for “good” when freshness cost dominates (as in the README’s GDSF vs SIEVE example).

It does **not** replace modern eviction algorithms such as SIEVE or S3-FIFO. It is a **decision and evaluation layer**: trace import (including CloudFront logs), replay, `optimize` / `policy-search`, and **compile** scaffolds toward **Cloudflare** and **CloudFront**—with bounded knapsack solvers (greedy / ILP / SA) and calibration tooling.

The same infrastructure-OSS thread as lazy-image, i18next-turbo, and cdn-security-framework applies: **make edge and cache behavior measurable before you ship it**. Roadmap items through Phase E are advanced; this page tracks the live repo, not a sketch.

## What you can do with it (high level)

- Import or generate request traces, compare LRU / GDSF / SIEVE / S3-FIFO / Belady with **economic metrics**, not just hit rate
- Search policies and compile toward provider configs with validation hooks
- Treat cache admission as an optimization problem with measurable ROI language

## Learn more

- Repository: [github.com/albert-einshutoin/quant-cache](https://github.com/albert-einshutoin/quant-cache)
