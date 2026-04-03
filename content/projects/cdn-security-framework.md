+++
title = "cdn-security-framework"
description = "Policy-driven edge and CDN security logic across multiple providers."
template = "project-page.html"
weight = 2

[extra]
category = "Edge / Security"
status = "Active"
featured = true
tech = ["TypeScript", "CloudFront", "Cloudflare", "AWS Lambda@Edge"]
github = "https://github.com/albert-einshutoin/cdn-security-framework"
npm = "https://www.npmjs.com/package/cdn-security-framework"
+++

cdn-security-framework provides a unified, policy-driven approach to CDN and edge security across multiple cloud providers.

Rather than scattering security rules across provider-specific configurations, this framework centralizes policies and compiles them to provider-native formats.

## Why

Edge security is often treated as an afterthought — a collection of ad-hoc rules scattered across CloudFront behaviors, Cloudflare page rules, and WAF configurations. This makes auditing difficult and drift inevitable.

This framework treats edge security as a software layer with clear interfaces, testable policies, and deterministic behavior.

## Core Concepts

- Declarative policy definitions
- Provider adapters (CloudFront, Cloudflare, Fastly)
- Composable rule chains
- Dry-run and audit modes for safe rollouts
