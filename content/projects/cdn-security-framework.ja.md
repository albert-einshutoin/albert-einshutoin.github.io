+++
title = "cdn-security-framework"
description = "インシデント対応の経験から生まれたエッジセキュリティ。JS 一枚から YAML、IaC に載せられる形へと育てた。"
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

セキュリティインシデントのときは WAF の調整や CloudWatch、サーバー確認に追われがちでしたが、その手前のレイヤーとして **CDN をセキュリティの主役として意識したことがなかった** と気づきました。IDS/IPS や下流の対策とは別に、そもそもトラフィックは CDN を通っているはずだ、という当たり前を後から拾い上げた感覚です。

最初は **ただの JavaScript ファイル** でした。**YAML を食うプログラム** にし、さらに **IaC に乗せられる** 形へと変えていきました。

主に触っているのは **CloudFront** と **Cloudflare** です。

## コアコンセプト

- 宣言的なポリシー定義
- **CloudFront / Cloudflare** 向けのアダプタ
- コンポーザブルなルールチェーン
- 安全なロールアウトのための dry-run / 監査モード
