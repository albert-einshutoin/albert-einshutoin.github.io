+++
title = "Why low-layer OSS matters in the AI era"
date = 2026-03-15
description = "AI changes what we build on top of, but not the layers underneath."
template = "blog-page.html"

[taxonomies]
tags = ["oss", "architecture", "ai-engineering"]
+++

There is a growing assumption that AI will eventually write all the code. If that were true, the nature of software engineering would shift entirely toward prompt design and orchestration.

But this assumption breaks down the moment you look at the layers beneath application logic.

## The persistence of low-layer concerns

Operating systems, compilers, image codecs, network protocols, memory allocators — these are not going away. They are, if anything, becoming more important as AI-generated application code increases the demand on underlying infrastructure.

A faster model does not fix a slow image pipeline. A better prompt does not reduce memory fragmentation. AI generates more code, which means the runtime, the build system, and the deployment pipeline need to handle more — with the same or fewer resources.

## Where OSS fits

Open-source software at the low layer serves a specific function: it provides **shared, inspectable, composable infrastructure** that no single company has incentive to build alone.

When I work on projects like lazy-image or cdn-security-framework, the goal is not to compete with cloud vendors. It is to provide a layer of control and clarity that vendor-managed services intentionally abstract away.

## The bet

The bet is simple: as AI raises the ceiling of what application developers can build, the floor — the foundational layers — becomes more load-bearing, not less.

Building at that layer is not glamorous. But it is where structural decisions compound.
