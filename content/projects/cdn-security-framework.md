+++
title = "cdn-security-framework"
description = "Policy-first CDN edge security—YAML SSOT, compile to CloudFront / Lambda@Edge / Cloudflare Workers, CI lint & drift checks."
template = "project-page.html"
weight = 2

[extra]
category = "Edge / Security"
status = "Active"
featured = true
tech = ["TypeScript", "JavaScript", "CloudFront", "CloudFront Functions", "Lambda@Edge", "Cloudflare Workers"]
github = "https://github.com/albert-einshutoin/cdn-security-framework"
npm = "https://www.npmjs.com/package/cdn-security-framework"
+++

Matches the [published README](https://github.com/albert-einshutoin/cdn-security-framework): **declarative policy** (`policy/security.yml` etc.) is the **single source of truth**; `npx cdn-security build` validates and emits **edge runtimes** into `dist/edge/` (AWS viewer/origin handlers or Cloudflare Worker output, depending on `--target`). **WAF vs edge** responsibility split is explicit—edge for normalisation / light blocking / headers; WAF for OWASP, bots, heavy rate limits.

Personal origin story on this site still holds: incidents surfaced logs and WAF work first; **CDN as the front line** came into focus afterward, and the tooling grew from one JS file → YAML compiler → **IaC-friendly** outputs.

## Core concepts (aligned with repo)

- Human-readable **policy** compiled per provider—not hand-edited runtime copies
- **AWS**: CloudFront behaviors, CloudFront Functions, Lambda@Edge paths described in the README
- **Cloudflare**: Workers / security rules alignment
- **Quality gates**: project scripts and CI cover lint, build, runtime, drift, and security-baseline style checks—use these instead of ad-hoc “audit” copy if you document processes internally

## Links

- [github.com/albert-einshutoin/cdn-security-framework](https://github.com/albert-einshutoin/cdn-security-framework) · [npm](https://www.npmjs.com/package/cdn-security-framework)
