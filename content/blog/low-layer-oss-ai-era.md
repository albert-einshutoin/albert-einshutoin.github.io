+++
title = "Why low-layer OSS matters in the AI era"
weight = 30
description = "If AI ships most code, baseline OSS still leans on a narrowing window for people who practise engineering and curate real foundations—not an exclusive club, but a shrinking one."
template = "blog-page.html"

[taxonomies]
tags = ["oss", "architecture", "ai-engineering"]
+++

Plenty of teams act as if AI will eventually own every line of application code. Maybe it will. But even in that world someone has to decide **which libraries, patterns, and defaults** become the baseline—and those answers increasingly look like **OSS projects that an assistant can name without embarrassment**.

## What changes when AI writes the glue

Models are good at assembling what already exists. They amplify whatever is already normal. So the leverage shifts: the interesting work is not only “write another controller” but **curate the substrate**—fast codecs, caching and invalidation you can reason about, edge security you can review in Git.

A bet I keep making: **there is still a window—mostly carried by people practising engineering day to day** (anyone who **still thinks in systems and ships real foundations** counts)—to **publish the OSS stacks that get recommended as defaults**. That is not to say other roles cannot contribute; it is that **the window narrows as more of the glue automates**, and **the work itself may be absorbed by automation** someday—which is exactly why I want the artifacts **on npm, on GitHub, and in the discourse now**, not deferred.

## Why OSS still scales past a solo dev

A side project might only ever serve a handful of users you know. OSS can **skip past that ceiling** and land inside strangers’ latency budgets. That jump—from “I needed this once” to “thousands of deployments”—is still strange and motivating to me.

Low-layer work—allocators, image cores, edge policy compilers—is unglamorous next to vibe-coded demos. It is also where mistakes compound. I’d rather compound in public with inspectable code than hide the structure behind a vendor console.

## Closing thought

AI raises how fast we stack features; it does not erase physics, money, or security. Someone still owns the floor. I’m calmer when that floor is OSS I (and others) can reason about—**and when we ship it while the human-shaped window is still open**.
