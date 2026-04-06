+++
title = "i18next-turbo"
description = "i18next 互換を保ちつつ、重い処理は Rust に押し出して JS のオーバーヘッドを減らすツール群。"
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

動機はシンプルで、大規模な i18n では **JavaScript 側のオーバーヘッド**（パース、検証、差分、CI 連携など）が積み上がるので、**Rust でそこをできるだけ削る** ことを狙っています。チームがすでに使っている i18next の上に載せる前提です。

## 機能

- AST 解析によるソースコードからのキー抽出
- 名前空間の一貫性バリデーション
- 欠落 / 未使用キーの検出
- CI フレンドリーな出力形式
- 翻訳ファイルの差分とマージコンフリクト解決

*（各機能の完成度はまだ詰め直し中で、上記は CLI が目指している形です。）*
