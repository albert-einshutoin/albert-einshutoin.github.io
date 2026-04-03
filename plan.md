# Albert Einshutoin Lab — GitHub Pages / Zola 設計書

## 1. 目的

このサイトは、Shuto Ide の **Personal Lab / R&D HQ** として機能する。

単なるポートフォリオではなく、以下を統合した **公開研究拠点** とする。

* 低レイヤー寄り OSS の紹介
* 設計思想の発信
* 実験・技術検証の蓄積
* GitHub / npm / サイト内 blog / SNS（note.com）への導線
* 個人ブランドの明確化

サイト名は **Albert Einshutoin Lab** を採用する。

この名前には次の意味を持たせる。

* **Albert**: Albert Einstein へのリスペクト
* **Einshutoin**: 自分の活動名・ブランド名
* **Lab**: 実験・研究・構造設計の拠点

---

## 2. ブランド定義

### 2-1. ブランドの核

このサイトの中核メッセージは以下。

> I don’t write code. I make ideas executable.

補助的なメッセージ候補:

* Building systems, tools, and experiments for the AI era.
* Low-layer OSS, edge infrastructure, and executable ideas.
* Engineering at the layer where structure matters.

### 2-2. Albert Einstein リスペクトの見せ方

Albert Einstein へのリスペクトは、**前面に出しすぎず、静かに効かせる** 方が上品。

入れ方は次のようにする。

#### 推奨

* About ページで短く触れる
* Hero 下の小さなサブテキストで触れる
* Footer または About 内で naming note として説明する

#### 例文

* The name “Albert” is a quiet nod to Albert Einstein — not imitation, but respect for deep thinking.
* “Albert” is included as a tribute to Albert Einstein and the spirit of first-principles thinking.

#### 避けたいこと

* Einstein 本人を前面に押し出す
* 偉人の権威を借りている印象を出す
* サイトの主役が自分ではなく Einstein になってしまう構成

つまり、**思想の背景として添える** のが最適。

---

## 3. Zola を使うべきか

### 結論

**Zola はかなり相性が良い。デザインがダサくなるわけではない。**

ダサくなるかどうかは Zola ではなく、以下で決まる。

* 情報設計
* タイポグラフィ
* 余白
* 色数
* コンポーネントの統一感
* 文章のトーン

### Zola が向いている理由

* GitHub Pages に載せやすい静的サイト構成
* Markdown ベースで blog / project を増やしやすい
* テンプレートが比較的シンプル
* 速度が速い
* ビルドが軽い
* Lab / blog / docs 型サイトと相性が良い

### 注意点

* テーマをそのまま使うと“テンプレ感”が出やすい
* フォント・余白・線・カードを自分用に整えないと安っぽく見えやすい

### 方針

**既存テーマをベースにしてもよいが、見た目は必ずカスタムする。**

---

## 4. デザイン方針

### 4-1. トーン

方向性は以下。

* dark
* quiet
* serious
* editorial
* terminal / lab / system design の空気感
* 派手すぎない
* 賢そうだが嫌味ではない

### 4-2. 避けるもの

* グラデーション過多
* 光り物の多用
* ガラスモーフィズム過多
* アニメーション過多
* SNS インフルエンサーっぽい雰囲気
* “量産型ポートフォリオ” 感

### 4-3. 目指す印象

* 静かに強い
* OSS 作者っぽい
* 研究者 / 設計者っぽい
* 深く考えていそう
* 読み物としても気持ちいい

### 4-4. ビジュアル要素

* 背景: ほぼ黒
* 文字: オフホワイト
* 補助文字: 青みグレー
* アクセント: くすんだゴールド or 青緑 どちらか 1 色
* 枠線: 細い 1px ライン
* 角丸: 小さめ〜中程度
* 影: 最小限

### 4-5. フォント案

#### 見出し

* Instrument Serif
* Bitter
* Playfair Display
* Fraunces

#### 本文 / UI

* Inter
* IBM Plex Sans
* Geist
* Source Sans 3

#### モノスペース

* IBM Plex Mono
* JetBrains Mono
* Geist Mono

### 4-6. デザインの結論

添付画像の方向性は悪くない。むしろかなり合っている。

特に良い点:

* 黒背景
* 大きい見出し
* 線による区切り
* モノスペース UI
* project / post の分離

この方向をベースにして、さらに **Lab感 / 思想感 / 高級感** を足すのがよい。

---

## 5. サイト構成

最初のバージョンでは、ページを増やしすぎない。

### 初期構成

* Home
* Projects
* Notes
* About
* Links / Contact

### 将来的に追加

* Experiments
* Benchmarks
* Uses
* Talks / Writing archive

---

## 6. 各ページの設計

## 6-1. Home

### 目的

* 何者かを一瞬で伝える
* 注目 OSS を見せる
* Blog へ導線を置く
* サイト全体の空気を決める

### セクション構成

#### Header

* Logo / site title: Albert Einshutoin Lab
* Nav: projects / blog / about / github

#### Hero

* Eyebrow: PERSONAL LAB / SYSTEMS ENGINEER / LOW-LAYER OSS のいずれか
* Main copy: I make ideas executable.
* Sub copy: Low-layer OSS, infrastructure design, and experiments for the AI era.
* Optional note: “Albert” is a quiet nod to Albert Einstein and first-principles thinking.

#### Focus areas

カード 3〜4 枚。

* Low-layer OSS
* Image optimization
* Edge / CDN security
* AI-assisted system design

#### Featured projects

3〜4件。

* lazy-image
* cdn-security-framework
* i18next-turbo
* QuantCache（Research として載せるなら）

#### Recent blog posts

最新 3 件。

#### Philosophy strip

短文で思想を置く。

例:

> AI commoditizes syntax. Structure, intent, and constraints matter more than ever.

#### Footer

* GitHub
* npm
* X
* built with Zola

---

## 6-2. Projects

### 目的

* OSS / research を一覧化する
* Active / Research / WIP を明確にする
* リポジトリや npm への導線を作る

### 表示形式

カード型がよい。

各カードに入れる要素:

* category
* project name
* one-line summary
* key tech
* status badge
* links

### プロジェクト候補

#### lazy-image

* Category: Rust / Image Processing
* Status: Active
* Summary: High-performance image processing for Node.js with a Rust-powered core.

#### cdn-security-framework

* Category: Edge / Security
* Status: Active
* Summary: Policy-driven CDN and edge security framework across providers.

#### i18next-turbo

* Category: i18n / Tooling
* Status: Active
* Summary: Tooling and workflows for scalable localization pipelines.

#### QuantCache

* Category: Research / Optimization
* Status: Research
* Summary: Exploring smarter cache decision systems for web infrastructure.

### 表示しない方がよいもの

* まだ何も出せない構想だけのもの
* 方向性がバラバラなもの
* 質が伴っていない古いもの

---

## 6-3. Blog

### 目的

* 設計思想と技術調査を置く
* ナビ・URLは **blog**（SNS の note との混同回避）。トーンは研究ノート寄りでよい

### カテゴリ案

* architecture
* oss
* edge
* wasm
* image-processing
* ai-engineering

### 記事タイトル例

* Why low-layer OSS matters in the AI era
* Designing image pipelines beyond default web stacks
* Thoughts on edge security as a software layer
* What makes an engineering system AI-safe?
* Building tools where structure matters more than syntax

### 文体

* 落ち着いている
* 断定しすぎない
* でも芯は強い
* ポエムではなく、構造がある

---

## 6-4. About

### 目的

* 人物像と思想を伝える
* 経歴の箇条書きだけにしない

### 入れる内容

#### Intro

Shuto Ide is a backend-oriented systems engineer focused on low-layer OSS, infrastructure design, and experimental tooling.

#### What I care about

* structure over surface
* performance with clarity
* OSS that enables others
* systems that remain understandable under scale

#### Tech areas

* Rust
* TypeScript / Node.js / NestJS
* AWS / CloudFront / S3
* Cloudflare
* image processing
* Wasm
* MySQL / MongoDB
* edge security

#### Naming note

The “Albert” in Albert Einshutoin Lab is a small tribute to Albert Einstein and the habit of starting from first principles.

---

## 7. コンテンツ優先順位

### 最優先で入れるもの

* Hero
* Featured projects
* About の短文
* Blog 記事 3本程度
* GitHub / npm への導線

### 次に入れるもの

* project detail page
* tag / category system
* RSS
* uses page

### 後回しでよいもの

* 凝ったアニメーション
* 複雑なフィルタUI
* 画像や図の大量投入
* 自作CMS的な仕組み

---

## 8. ナビゲーション設計

### 推奨

* projects
* blog
* about
* github ↗

### なくてもいい

* home の明示リンク
* contact 単独ページ
* archive を初期から出すこと

シンプルな方が Lab サイトには合う。

---

## 9. コンポーネント一覧

実装時に必要なコンポーネント。

* Header
* Footer
* Hero block
* Section heading
* Project card
* Status badge
* Blog list item
* Tag pill
* External link icon
* Quote / philosophy block

---

## 10. デザイン詳細ルール

### 余白

* Hero は大きく取る
* section 間は明確に空ける
* card 内余白はやや広め

### 線

* 1px の区切り線を活かす
* section header にラインを入れる

### 文字サイズ

* Hero はかなり大きくてよい
* 本文は読みやすさ優先
* small text は多用しすぎない

### カラー運用

* 基本 90% はモノトーン
* アクセント色は status / eyebrow / hover のみ

---

## 11. Zola ディレクトリ設計案

```txt
content/
  _index.md
  projects/
    _index.md
    lazy-image.md
    cdn-security-framework.md
    i18next-turbo.md
    quantcache.md
  blog/
    _index.md
    low-layer-oss-ai-era.md
    image-pipeline-thoughts.md
    edge-security-layer.md
  about.md

templates/
  base.html
  index.html
  projects.html
  project-page.html
  blog.html
  blog-page.html
  about.html
  partials/
    header.html
    footer.html
    hero.html
    project-card.html
    blog-item.html

static/
  favicon.ico
  og/
  images/

sass/
  main.scss
```

---

## 12. Home の文言たたき台

### Site title

Albert Einshutoin Lab

### Hero eyebrow

PERSONAL LAB

### Hero title

I make ideas executable.

### Hero description

Low-layer OSS, infrastructure design, and experimental systems for the AI era.

### Secondary line

Building at the layer where structure matters more than syntax.

### Small note

“Albert” is a quiet nod to Albert Einstein and first-principles thinking.

---

## 13. Projects 表示文言たたき台

### lazy-image

High-performance image processing for Node.js with a Rust-powered core.

### cdn-security-framework

Policy-driven edge and CDN security logic across multiple providers.

### i18next-turbo

Tooling and workflows for scalable localization systems.

### QuantCache

Research on smarter cache decision systems for modern web infrastructure.

---

## 14. このサイトで伝わる人物像

完成時にユーザーへ伝わるべき印象は以下。

* OSS を作っている人
* 低レイヤーを理解している人
* 見た目より構造を重視する人
* AI時代でも価値のある設計力を持つ人
* 思いつきではなく、研究として積み上げる人

---

## 15. 最終結論

### 方向性

**Albert Einshutoin Lab** は十分あり。

むしろ、

* Einstein へのリスペクト
* 自分のブランド名
* Lab という研究拠点感

が一つにまとまるので、あなたの方向性に合っている。

### Zola について

**Zola で問題ない。ダサくはならない。**

ダサくする要因はツールではなく設計不足なので、
この設計書どおりに進めればかなり良い方向に行ける。

### 実装の基本方針

* dark / editorial / lab aesthetics
* minimal but strong
* projects + blog 中心
* Einstein リスペクトは静かに効かせる
* “研究拠点” として育てる
