# SETOUCHI AZURE

Figma Makeをもとに実装した、瀬戸内の架空ラグジュアリーリゾートのランディングページです。React、strict TypeScript、Tailwind CSSで構成し、スクロール演出にはFramer Motionを使用しています。

## Scripts

定義は[package.json](./package.json)の`scripts`を参照してください。

| Command                | 用途                                                                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| `npm run dev`          | Viteの開発サーバーを起動します。ローカルでデザインや挙動を確認するときに使用します。               |
| `npm run build`        | TypeScriptの型検査後、本番配信用のファイルを`dist/`に生成します。                                  |
| `npm run preview`      | `npm run build`で作成した本番ビルドをローカルで確認します。                                        |
| `npm run lint`         | ESLintでコード品質とReactの実装ルールを検査します。警告もエラーとして扱います。                    |
| `npm run typecheck`    | TypeScriptの型検査のみを実行します。ビルド成果物は生成しません。                                   |
| `npm run format`       | Prettierで対応ファイルを自動整形します。編集後に実行します。                                       |
| `npm run format:check` | Prettierの整形漏れがないか確認します。ファイルは変更しません。                                     |
| `npm run test`         | Vitestをウォッチモードで起動し、実装中にユニット／コンポーネントテストを継続実行します。           |
| `npm run test:run`     | Vitestのテストを1回だけ実行します。CIや最終確認向けです。                                          |
| `npm run test:e2e`     | 本番ビルド後、Playwrightでデスクトップ・モバイルの表示、操作、レスポンシブを検証します。           |
| `npm run validate`     | 整形確認、Lint、型検査、Vitest、本番ビルドを順に実行する総合チェックです。コミット前に推奨します。 |
| `npm run prepare`      | HuskyのGitフックを設定します。通常は`npm install`後に自動実行されます。                            |

## Quick start

Node.jsは`.nvmrc`に指定した`24.22.1`を使用します。`nvm`を導入済みの場合は、次の手順でセットアップします。

```bash
nvm install
nvm use
npm ci
npm run dev
npm run validate
npm run test:e2e
```

Tailwind CSS 4は`@tailwindcss/vite`経由でビルドします。テーマ、ブレークポイント、アニメーションは[`src/styles/theme.css`](./src/styles/theme.css)で管理します。

Node.jsを更新する場合は`.nvmrc`と`package.json`の`engines.node`を更新し、`npm ci`、`npm audit`、`npm run validate`、`npm run test:e2e`を実行してください。

Vercelでは既存のNode.js `24.x`設定を使用します。マイナー・パッチ更新はVercelが管理し、ローカル用の`.nvmrc`とは別に扱います。詳細は[VercelのNode.jsバージョン管理](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)を参照してください。

## Git hooks

- コミット前：ステージ済みファイルのLint／整形と`npm run test:run`を実行します。
- push前：`npm run validate`と`npm run test:e2e`を実行します。いずれかが失敗した場合、pushは中止されます。

## 実装方針

- スタイルはTailwindのユーティリティとトークンを優先し、エントリーCSSの`src/index.css`はリセット・全体設定・reduced motionなど、要素側へ移せないグローバルなルールだけを持ちます。
- セクションとレイアウトのコンポーネントは`export const ComponentName = () => {}`形式で定義しています。繰り返し表示するデータは[`src/data/landing-page.ts`](./src/data/landing-page.ts)に集約しています。
- 条件付きのTailwindクラスは[`src/lib/cn.ts`](./src/lib/cn.ts)の`cn()`で安全に結合します。
- スクロール時の表示演出は[`src/components/ui/reveal.tsx`](./src/components/ui/reveal.tsx)の`useInView`で宣言的に実装しています。要素検索や`classList`操作には依存しません。
- モバイルメニューの開閉状態は`App`が保持し、`inert`、Escape、フォーカストラップ、フォーカス復帰に対応しています。

## Stack

- React + TypeScript + Vite
- Tailwind CSS + Framer Motion
- clsx + tailwind-merge
- ESLint + Prettier
- Vitest + Testing Library
- Playwright
- Husky + lint-staged
