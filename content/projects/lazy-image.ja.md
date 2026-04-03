+++
title = "lazy-image"
description = "Rust コアによる Node.js 向け高性能画像処理ライブラリ。"
template = "project-page.html"
weight = 1

[extra]
category = "Rust / 画像処理"
status = "Active"
featured = true
tech = ["Rust", "Node.js", "napi-rs", "WebAssembly"]
github = "https://github.com/albert-einshutoin/lazy-image"
npm = "https://www.npmjs.com/package/@alberteinshutoin/lazy-image"
+++

lazy-image は、napi-rs を通じた Rust コアで駆動する、Node.js 向けの高性能画像処理ライブラリです。

高速でメモリ効率の良い画像変換 — リサイズ、フォーマット変換、圧縮 — を、子プロセスの起動や ImageMagick のようなシステムレベル依存なしに提供します。

## なぜ作ったか

Node.js エコシステムの画像処理は、インストールが困難なネイティブバイナリに依存するか、大きなパフォーマンス制約のある純 JavaScript で動くかのどちらかです。

lazy-image はこのギャップを埋めます。Rust が計算集約的な処理を担い、Node.js API は使いやすく親しみやすいままです。

## 設計原則

- システム依存ゼロ — プリビルドバイナリとして配布
- パイプライン統合のためのストリーム対応 API
- 高並行性下での予測可能なメモリ使用量
- フォーマット対応: AVIF, WebP, JPEG, PNG をインテリジェントなデフォルトで
