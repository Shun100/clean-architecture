#!/bin/sh

set -e

# 初回起動時に Prisma のセットアップを行う
echo "🔧 Running Prisma generate..."
npx prisma generate

# 初回マイグレーション（migrate dev はDBに接続し、マイグレーションを適用）
echo "🗃 Running Prisma migrate..."
npx prisma migrate dev --name init --skip-seed

# アプリケーションを起動
echo "🚀 Starting app..."
npx tsx watch src/index.ts
