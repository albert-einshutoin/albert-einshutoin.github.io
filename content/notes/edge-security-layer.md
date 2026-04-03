+++
title = "Thoughts on edge security as a software layer"
date = 2026-01-10
description = "Edge security should be treated as a composable, testable software layer — not a collection of ad-hoc rules."
template = "note-page.html"

[taxonomies]
tags = ["edge", "architecture", "security"]
+++

Edge computing has matured significantly over the past few years. CloudFront Functions, Cloudflare Workers, Deno Deploy, and similar platforms have made it practical to run meaningful logic at the CDN edge.

But security at the edge is still, in most organizations, a mess.

## The problem

Edge security rules are typically:

- Scattered across provider-specific UIs
- Defined in formats that resist version control
- Tested manually, if at all
- Difficult to audit or reason about as a whole

This is not a technology problem. The platforms are capable. The problem is that edge security is treated as configuration, not software.

## Security as a software layer

When you treat security rules as software, several things become possible:

- **Composition**: Combine rules from different sources into a coherent policy
- **Testing**: Validate rules against known-good and known-bad inputs before deployment
- **Versioning**: Track changes over time with the same rigor as application code
- **Portability**: Define rules once, compile to multiple providers

This is the core idea behind cdn-security-framework: express security intent in a provider-agnostic format, then compile it to whatever the target platform requires.

## Trade-offs

The main trade-off is complexity. An abstraction layer adds a concept to learn and a tool to maintain. Whether that trade-off is worthwhile depends on scale — if you manage security across multiple CDN providers or multiple teams, the abstraction pays for itself quickly. For a single-provider, single-team setup, the native tools may be sufficient.

The important thing is to recognize the choice as a design decision, not a default.
