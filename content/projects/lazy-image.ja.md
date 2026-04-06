+++
title = "lazy-image"
description = "Node.js 向け Web 画像エンジン — Rust（NAPI-RS）核。配送バイト優先のトレードオフ、mmap・安全デフォルト。GitHub の About 文言とは別物。"
template = "project-page.html"
weight = 1

[extra]
category = "Rust / 画像処理"
status = "Active"
featured = true
hero = true
tech = ["Rust", "Node.js", "NAPI-RS", "WebAssembly"]
github = "https://github.com/albert-einshutoin/lazy-image"
npm = "https://www.npmjs.com/package/@alberteinshutoin/lazy-image"
+++

[lazy-image README](https://github.com/albert-einshutoin/lazy-image) と揃えた説明です。**Rust（NAPI-RS）コア**による **Web 配信用の画像エンジン**で、README が謳うとおりターゲットワークロードでは **sharp のデフォルト系よりファイルサイズを抑える**方向を取り、**高速エンコード**より **帯域コスト**を優先するトレードオフです。**sharp のドロップイン代替**ではなく、API・機能の幅・生スループットの前提が異なります。

なお GitHub リポジトリの **About にある「lazy loading 用ライブラリ」という一行**は README の実態（最適化・処理エンジン）と食い違う古いメタデータです。このサイトでは README 側の定義に合わせています。

このサイトで述べている動機（圧縮・現代的エンコーダ、将来的な WASM / V8）は、すでに載っている **mmap ゼロコピー系パス**、メタデータ処理・セキュリティ寄りのデフォルト、mozjpeg / libwebp / ravif などの README 記述と矛盾しません。

## 設計の軸

- **帯域と安全性**を先に — 「とにかく最速エンコード」とは競わない前提
- スコープ内フォーマットは Rust で押さえ、sharp 全機能の置き換えを目指さない
- 制限のきついランタイムでも読めるメモリ設計
- 当面はネイティブ、**WASM は意図した延長線**

## リンク

- [github.com/albert-einshutoin/lazy-image](https://github.com/albert-einshutoin/lazy-image) · [npm](https://www.npmjs.com/package/@alberteinshutoin/lazy-image)
