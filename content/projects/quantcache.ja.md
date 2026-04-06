+++
title = "QuantCache"
description = "LRU/LFU の次を探るキャッシュ研究のメモ場所。量子レベルの発想がエッジの現実にどこまで接続できるか試す。"
template = "project-page.html"
weight = 4

[extra]
category = "リサーチ / 最適化"
status = "Research"
featured = true
tech = ["Rust", "Mathematical Optimization", "Cache Theory"]
github = "https://github.com/albert-einshutoin/quantcache"
+++

Web サービスを非エンジニアが当たり前につくれる世界になると、不足するのは **開発インフラを支える OSS** だと感じ、lazy-image や i18next-turbo、cdn-security-framework を進めてきました。その **さらに先** に行ったときに、古典的ヒューリスティックだけでは足りない局面が出るのではないか—そこで **量子レベルのアルゴリズム** が何をもたらすか、できるところから調べています。

趣味の面もありますが、**自分の発想がどれだけ正しいか**、**世の中のどれくらい先を走れるか** を知りたい、という気持ちも半分です。タイムラインはまだ保留で、問いの輪郭がはっきりしたところから形にします。

## 調べている方向

- オブジェクトサイズ・オリジン遅延・コストを踏まえたエビクション
- キャッシュ汚染を抑える軽量アドミッション
- 手動チューニングなしにワークロード変化へ追従する仕組み
- **CDN エッジのレイテンシ**を前提にした、現実的な実装
