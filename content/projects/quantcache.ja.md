+++
title = "quant-cache"
description = "CDN 向け経済目的関数（$/期間）でキャッシュを評価・最適化。ナップサック選択、トレースリプレイ、qc CLI。"
template = "project-page.html"
weight = 4

[extra]
category = "CDN / 最適化"
status = "Active"
featured = true
tech = ["Rust", "CLI", "CDN トレース", "ナップサック / ILP", "シミュレーション"]
github = "https://github.com/albert-einshutoin/quant-cache"
+++

[quant-cache](https://github.com/albert-einshutoin/quant-cache) は **Rust のワークスペースと `qc` CLI** から成る、**CDN オペレーション向けの経済評価フレームワーク**です。ヒット率だけでなく、レイテンシ価値・オリジン削減・鮮度ペナルティを **$/期間** にまとめた目的関数で比較するため、「ヒット率は高いが経済目的は負」といったパターン（README にある GDSF と SIEVE の対比など）が見えます。

SIEVE や S3-FIFO などのエビクタそのものの**置き換え**ではなく、**判断・評価レイヤー**として位置づけられます。CloudFront ログの取り込み、トレース上のリプレイ、`optimize` / `policy-search`、**Cloudflare / CloudFront** 向けのコンパイル足場などが揃っています。ナップサック系ソルバ（貪欲 / ILP / SA）やパラメータのキャリブレーションも含みます。

lazy-image や i18next-turbo、cdn-security-framework と同じ筋で、**エッジとキャッシュをデプロイ前に数値で押さえる**ための土台です。README のロードマップどおり複数フェーズが進行中で、ここに書いた内容は実リポジトリに追従します。

## ざっくりできること

- トレースを取り込み・生成し、LRU / GDSF / SIEVE / S3-FIFO / Belady などを **経済指標つき**で比較する
- ポリシー探索やプロバイダ向け成果物の生成・検証に繋げる
- キャッシュ載せの可否を、ROI を意識した言葉で説明する

## リンク

- リポジトリ: [github.com/albert-einshutoin/quant-cache](https://github.com/albert-einshutoin/quant-cache)
