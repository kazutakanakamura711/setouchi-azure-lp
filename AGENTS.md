# SETOUCHI AZURE LP 実装ガイド

- Figma Makeのデザインと、リポジトリに登録済みの画像アセットをデザインの正とします。
- Vite、React、strict TypeScript、Tailwind CSS、npmを使用します。
- スタイルはTailwindのトークンとユーティリティを優先します。エントリーCSSの`src/index.css`はリセット、全体設定、`:focus-visible`、reduced motionなど、要素側へ移せないグローバルなルールだけに限定します。
- 条件付きのTailwindクラスには`src/lib/cn.ts`の`cn()`を使用します。
- Reactコンポーネントは、`src/app/app.tsx`の`App`を除き、`export const ComponentName = () => {}`形式で定義します。
- 具体的にアクセシブルなコンポーネントが必要になった場合のみ、shadcn/uiを追加します。将来的な利用を見越した追加はしません。
- ルーティング、API、認証、バックエンド、Storybook、実体のない外部URLは追加しません。
- ソースファイル名は小文字のkebab-case、Reactコンポーネントの識別子はPascalCaseにします。
- 繰り返し使用するコンテンツは`src/data/landing-page.ts`にまとめます。
- 状態はReactで宣言的に管理し、`document.querySelector`、`classList`、`document.body.style`による画面制御を追加しません。要素への操作が必要な場合はrefとイベントハンドラを使います。
- スクロール表示演出はFramer Motionの`useInView`を使う`Reveal`コンポーネントで実装します。新しい演出も、可能な限りReactの状態・props・Motionで表現します。
- モバイルメニューの開閉状態は`App`が保持し、背景を`inert`にします。Escape、Tabキーのフォーカストラップ、開閉時のフォーカス移動と復帰を維持します。
- セマンティックなHTML、キーボード操作、見やすいフォーカス表示、十分なコントラスト、動きを減らす設定への対応を維持します。
- 変更後は`npm run validate`で検証し、ブラウザ依存関係が利用可能な場合は`npm run test:e2e`も実行します。
- 書き込みを行う実装エージェントは同時に1つだけにします。レビューエージェントは読み取り専用とします。
