+++
title = "cdn-security-framework"
description = "ポリシー駆動の CDN セキュリティ。YAML を SSOT にし、CloudFront / Lambda@Edge / Cloudflare Workers へコンパイル。CI で lint・ビルド・ドリフト検査。"
template = "project-page.html"
weight = 2

[extra]
category = "Edge / セキュリティ"
status = "Active"
featured = true
tech = ["TypeScript", "JavaScript", "CloudFront", "CloudFront Functions", "Lambda@Edge", "Cloudflare Workers"]
github = "https://github.com/albert-einshutoin/cdn-security-framework"
npm = "https://www.npmjs.com/package/cdn-security-framework"
+++

[公開 README](https://github.com/albert-einshutoin/cdn-security-framework) と整合します。**宣言的ポリシー**（`policy/security.yml` など）が **単一の正**で、`npx cdn-security build` で検証したうえで **エッジランタイム**を `dist/edge/` に生成します（`--target cloudflare` で Workers 系、デフォルトで AWS の viewer / origin 用ハンドラ等）。**WAF とエッジの役割分担**も README で明確（正規化・軽いブロック・ヘッダはエッジ、OWASP・Bot・本格的なレート制限は WAF）。

このサイトで書いた経緯（インシデント対応で WAF 周りに触れ、CDN を前線として再認識し、JS → YAML → IaC へ）も README の設計思想と矛盾しません。

## リポジトリと揃えた要点

- **ポリシーを読むコンパイラ** — ランタイムを直接いじらない
- **CloudFront / CloudFront Functions / Lambda@Edge / Cloudflare Workers** を README の対応表どおりに扱う
- **品質ゲート** — lint・ビルド・ランタイムテスト・ドリフト・セキュリティベースライン等（リポジトリの npm scripts / CI）で再現可能にする

## リンク

- [github.com/albert-einshutoin/cdn-security-framework](https://github.com/albert-einshutoin/cdn-security-framework) · [npm](https://www.npmjs.com/package/cdn-security-framework)
