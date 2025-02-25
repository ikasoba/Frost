# 技術ドキュメント

## 全般
### 基本的な開発の方法
基本的には以下の流れで作業を進める。
1. 作業ブランチで作業する
2. 自分でdevelopにマージする

マージしてもよいか分からない場合は以下のようなフローで作業を進める。
1. 作業ブランチで作業を行う
2. PullRequestを立てる
3. 誰かにdevelopにマージしてもらう

変更の方向性の議論が必要な場合は、issueを立ててから作業する。

たとえば大規模の変更を行うなどの例外があれば、この方法に従う必要はない。

## バックエンド
### 技術選定
- 言語: TypeScript(Node.js)
- フレームワーク: Nest.js
- データベース: PostgreSQL

### WebSocket使用禁止
ソケットの同時接続数が増加するため。スケーラビリティに影響を与える。  
代わりにポーリングする。  

### フレームワークの使う機能を絞る
いろいろ入っているので使う機能以外は使用禁止にする。

### ORMライブラリの使用は控える
ORMライブラリだと複雑な問い合わせを書こうとすると、ライブラリ固有の書き方に依存するため余計に複雑になったりする。  
ただでさえSQLクエリは複雑になりがちなので、そのままSQLを書くべきという考え方。

基本的には薄いDBドライバを使う。  
DBテーブルの構築・マイグレーションはライブラリに頼っても良さそう。

## フロントエンド
### 技術選定
- 言語: TypeScript
- モジュールバンドラ: Vite
- フレームワーク: React
- UIフレームワーク: 未定
