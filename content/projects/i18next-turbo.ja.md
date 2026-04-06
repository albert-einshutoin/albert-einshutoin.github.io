+++
title = "i18next-turbo"
description = "Rust + SWC による i18next 向けキー抽出。高速 CI・watch、optionalDependencies でバイナリ配布。"
template = "project-page.html"
weight = 3

[extra]
category = "i18n / ツール"
status = "Active"
featured = true
tech = ["Rust", "SWC", "TypeScript", "i18next", "CLI"]
github = "https://github.com/albert-einshutoin/i18next-turbo"
npm = "https://www.npmjs.com/package/i18next-turbo"
+++

[リポジトリ README](https://github.com/albert-einshutoin/i18next-turbo) のとおり、**i18next-turbo** は **Rust + SWC** ベースの抽出ツールで、i18next 流れのプロジェクト向けに **CI を速く**し、**watch も軽く**することを主眼にしています。`optionalDependencies` で **プラットフォーム別バイナリ**を引く方式（詳細は同 README のインストール章）。

動機（JS の重い処理をRust側へ）は、実装とも一致しています。

## CLI（README 掲載のコマンド）

- `init` — 設定の初期化
- `extract` — キー抽出とロケール同期
- `watch` — 開発中の継続同期
- `sync` — キャッシュ / 結果から同期
- `check` — デッドキーの検出・除去
- `lint` — ハードコードされたユーザー向け文字列
- `status` — 翻訳進捗
- `typegen` — TypeScript のリソース型
- `rename-key` — キー名の安全なリネーム
- `migrate-config` — i18next-parser 系設定からの移行

## リンク

- [github.com/albert-einshutoin/i18next-turbo](https://github.com/albert-einshutoin/i18next-turbo) · [npm](https://www.npmjs.com/package/i18next-turbo)
