+++
title = "i18next-turbo"
description = "スケーラブルなローカリゼーションシステムのためのツールとワークフロー。"
template = "project-page.html"
weight = 3

[extra]
category = "i18n / ツール"
status = "Active"
featured = true
tech = ["TypeScript", "i18next", "CLI", "AST"]
github = "https://github.com/albert-einshutoin/i18next-turbo"
npm = "https://www.npmjs.com/package/i18next-turbo"
+++

i18next-turbo は、大規模なローカリゼーションを管理しやすく、一貫性があり、高速にするために設計されたツールとワークフローのセットです。

i18next エコシステムの上に構築され、デフォルトのツールでは対応しきれない部分に構造と自動化を追加します。

## なぜ作ったか

大規模なローカリゼーションは技術的な問題であると同時に、調整の問題でもあります。キーの欠落、陳腐化した翻訳、名前空間の不整合、壊れた補間パターン — これらがチームの速度を落とす一般的な障害モードです。

i18next-turbo は、これらの問題がプロダクションに到達する前にキャッチする CLI ツール、バリデーション、パイプライン統合を提供します。

## 機能

- AST 解析によるソースコードからのキー抽出
- 名前空間の一貫性バリデーション
- 欠落 / 未使用キーの検出
- CI フレンドリーな出力形式
- 翻訳ファイルの差分とマージコンフリクト解決
