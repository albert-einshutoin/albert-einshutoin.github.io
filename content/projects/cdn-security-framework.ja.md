+++
title = "cdn-security-framework"
description = "複数プロバイダにまたがるポリシー駆動の CDN・エッジセキュリティフレームワーク。"
template = "project-page.html"
weight = 2

[extra]
category = "Edge / セキュリティ"
status = "Active"
featured = true
tech = ["TypeScript", "CloudFront", "Cloudflare", "AWS Lambda@Edge"]
github = "https://github.com/albert-einshutoin/cdn-security-framework"
npm = "https://www.npmjs.com/package/cdn-security-framework"
+++

cdn-security-framework は、複数のクラウドプロバイダにまたがる CDN・エッジセキュリティへの統一的でポリシー駆動のアプローチを提供します。

セキュリティルールをプロバイダ固有の設定に散在させるのではなく、ポリシーを一元管理し、プロバイダネイティブの形式にコンパイルします。

## なぜ作ったか

エッジセキュリティは後回しにされがちです — CloudFront のビヘイビア、Cloudflare のページルール、WAF 設定に散らばるアドホックなルールの集合体。監査は困難で、ドリフトは避けられません。

このフレームワークは、エッジセキュリティを明確なインターフェース、テスト可能なポリシー、決定論的な振る舞いを持つソフトウェアレイヤーとして扱います。

## コアコンセプト

- 宣言的なポリシー定義
- プロバイダアダプタ（CloudFront, Cloudflare, Fastly）
- コンポーザブルなルールチェーン
- 安全なロールアウトのための dry-run / 監査モード
