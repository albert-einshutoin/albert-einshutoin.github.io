+++
title = "QuantCache"
description = "モダンな Web インフラのための、より賢いキャッシュ判断システムの研究。"
template = "project-page.html"
weight = 4

[extra]
category = "リサーチ / 最適化"
status = "Research"
featured = true
tech = ["Rust", "Mathematical Optimization", "Cache Theory"]
github = "https://github.com/albert-einshutoin/quantcache"
+++

QuantCache は、Web インフラにおけるキャッシュエビクション・アドミッションポリシーの改善を探求するリサーチプロジェクトです。

従来のキャッシング戦略（LRU, LFU, TTL ベース）はよく理解されていますが、異種オブジェクトサイズ、可変レイテンシコスト、非定常なアクセスパターンを持つ実世界のワークロードに対しては、しばしば最適ではありません。

## 研究の方向性

本プロジェクトでは以下を調査しています:

- オブジェクトサイズとオリジンレイテンシを考慮したコストアウェアなエビクションポリシー
- キャッシュ汚染を防ぐ軽量アドミッションフィルタ
- 手動チューニングなしにワークロードの変化に対応するアダプティブ戦略
- CDN エッジのレイテンシバジェットで動作可能な実用的実装

これは進行中の研究です。成果とプロトタイプは成熟次第公開します。
