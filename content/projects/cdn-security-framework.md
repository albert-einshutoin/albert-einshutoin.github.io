+++
title = "cdn-security-framework"
description = "Edge security as policy and code—born from incidents, evolved from a JS file to YAML to IaC-friendly workflows."
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

During security incidents I was adjusting WAFs, reading CloudWatch, and digging into servers—but I noticed I had **never treated the CDN layer as a first-class security surface**, even though traffic already passed through it (IDS/IPS sit elsewhere in the stack; the CDN still matters upstream).

The project started as a **single JavaScript file**, matured into a **YAML-driven compiler**, and kept evolving so policies could ride **IaC** the same way the rest of infrastructure does.

Today it targets the providers I actually operate: **AWS CloudFront** and **Cloudflare**.

## Core concepts

- Declarative policy definitions
- Provider adapters for **CloudFront** and **Cloudflare**
- Composable rule chains
- Dry-run and audit modes for safer rollouts
