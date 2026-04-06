+++
title = "lazy-image"
description = "圧縮と現代的なエンコーダに寄せた Pure Rust 画像処理。いまは Node API、WASM へ続く道筋を前提にする。"
template = "project-page.html"
weight = 1

[extra]
category = "Rust / 画像処理"
status = "Active"
featured = true
hero = true
tech = ["Rust", "Node.js", "napi-rs", "WebAssembly"]
github = "https://github.com/albert-einshutoin/lazy-image"
npm = "https://www.npmjs.com/package/@alberteinshutoin/lazy-image"
+++

拡張子ごとにエンコード方式が違うことは理解していたつもりでしたが、**圧縮の効率**をもっと押し込めれば、ストレージと転送量を現実的に削れるはずだと考え、調べ始めました。あわせて TypeScript 周りの画像処理を **WASM で軽くしたい** という思いもありましたが、まずは **Pure Rust の画像処理パッケージ** を核に据えるところから着手しました。

lazy-image は **Sharp のような万能パッケージではありません**。**圧縮と最新のエンコーダ** を Pure Rust で押さえ、今日は Node.js から扱いやすい API で載せています。

## これから

- **完全な WASM 化**を見据え、ネイティブ依存の負担を減らす方向へ
- V8 上で動く世界に合う **WASM ライブラリ** を増やす
- **シングルプロセス**になりがちな JavaScript の実行モデの課題を、少しずつほぐす

## 設計の軸

- Rust 核。このプロジェクトでは **WASM がゴールの一つ**
- 「なんでもできる」より、**圧縮とエンコーダ**に集中
- パイプラインに組み込みやすいストリーム API
- 並行性のある負荷でも読めるメモリ挙動
- AVIF / WebP / JPEG / PNG — フォーマット選択自体が圧縮戦略の一部
