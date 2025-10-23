#!/bin/sh

set -e

# 初回起動時に Prisma のセットアップを行う
echo "🔧 Running Prisma generate..."
npx prisma generate

# マイグレーションファイルが存在しない場合に作成
if [ ! "$(ls -A prisma/migrations 2>/dev/null)" ]; then
  echo "🆕 No migration files found. Creating initial migration..."
  npx prisma migrate dev --name init --skip-seed
else
  echo "🗃 Resetting database to match migration history..."
  npx prisma migrate reset --force --skip-seed
fi

# アプリケーションを起動
echo "🚀 Starting app..."
npm run dev

# npm test
