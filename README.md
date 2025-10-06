# 15パズル (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたクラシックな15パズルゲームです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-15puzzle/demo/

## 主要機能

### 操作方法
- **タイルクリック**: 空きスペースに隣接するタイルをクリックして移動
- **新しいゲームボタン**: ゲームをリセットして新しいパズルを開始

### ゲーム機能
- 4x4グリッドの15パズル（1-15の数字と1つの空きスペース）
- タイルクリックによる移動（隣接する空きスペースにのみ移動可能）
- 移動回数カウント
- 勝利判定とお祝いメッセージ
- 新しいゲーム開始機能
- 解決可能なパズル状態の保証（反転数アルゴリズムによる）

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── puzzle/                 # 15パズルゲーム機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── Tile/           # パズルタイル
│       │   ├── Status/         # ステータス表示
│       │   ├── PuzzleGrid/     # パズルグリッド
│       │   └── GameControls/   # ゲーム操作
│       ├── PuzzleGame/         # 機能ルートコンポーネント
│       ├── usePuzzle.ts        # パズル状態管理フック
│       ├── puzzleUtils.ts      # パズルロジック関数
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   └── Button/                 # 操作ボタン
├── stories/                    # Storybook用ストーリー
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## アーキテクチャ

### 機能別設計 (Feature-Based Architecture)
- **features/puzzle/**: パズルゲームに関連するすべてのロジック、コンポーネント、型定義を集約
- **components/**: 複数の機能で再利用される汎用的なUIコンポーネント

### ゲームロジック
**解決可能性アルゴリズム** (`puzzleUtils.ts`):
- 反転数カウントを使用してパズル状態の解決可能性を判定
- 4x4グリッドの場合: 空きスペースが下から奇数行にある場合は反転数が偶数、偶数行にある場合は反転数が奇数である必要がある
- シャッフル機能は解決可能な状態のみを生成

**状態管理** (`usePuzzle.ts`):
- タイル配列、空き位置、移動回数、勝利状態を含む集中管理されたパズル状態
- 空きスペースに隣接するタイルのみが移動可能
- 勝利条件: タイル1-15が正しい位置にあり、空きスペースが位置15にある

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License
