+++
title = "Thoughts on edge security as a software layer"
weight = 10
description = "Treat edge rules like software—especially if you have already stared at WAF knobs while the CDN kept serving traffic untouched."
template = "blog-page.html"

[taxonomies]
tags = ["edge", "architecture", "security"]
+++

Edge platforms are mature enough for real logic—CloudFront Functions, Cloudflare Workers, similar stacks—yet many teams still manage edge security like a pile of console tweaks.

## The failure mode I lived

When incidents dragged me through WAF changes, CloudWatch graphs, and host forensics, **CloudFront still sat in front**, doing what it always did. We had IDS/IPS stories too, but the CDN layer had never been where I *started* thinking about security policy. That blind spot is why I prototyped what became **cdn-security-framework**: first a plain JavaScript file, then YAML-driven compilation, then something IaC could ingest like the rest of infrastructure.

## Security as software, not vibes

If edge rules are **code-shaped**, you can compose them, **add automated tests for abuse and failure cases**, review diffs, and redeploy with the same habits as application work. Provider UIs are powerful but terrible archives of intent.

## Providers in the real world

In my builds the work centers on **AWS CloudFront** and **Cloudflare**. Abstractions only pay rent if they track the providers you actually operate.

## Trade-offs anyway

A translation layer costs mental overhead. It wins when policy spans multiple edges, teams, or environments and you need a single source of truth. A single-account, single-vendor setup might stay simpler with native tooling—the point is to choose deliberately.

## Why keep saying “layer”

Because the edge is already part of your availability surface. Treating it as **software**—not forgotten configuration—is how audits stop feeling like archaeology.
