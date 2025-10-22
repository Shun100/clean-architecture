# ベースイメージ
FROM node:18

# 作業ディレクトリ作成
WORKDIR /usr/src/app

# 依存関係のインストール
# docker-composeによってディレクトリがマウントされるのは、コンテナ起動時。
# 対して、Dockerfileが実行されるのはイメージビルド時（コンテナ起動よりも前）であるため、ホスト側のファイルがビルドに必要な場合は、明示的にコピーする必要がある。
# COPY package*.json ./ : 依存関係のインストールに必要なpackage.jsonとpackage-lock.jsonをコピーする。
# npm install : 依存関係をインストールする。
# COPY . . : プロジェクト全体をコピーする。npm installよりも前にコピーすると、既に依存関係がインストール済みであったとしても、キャッシュがクリアされて毎回全てインストールし直しになってします。キャッシュを利用するために、依存関係のインストール後にコピーする。
COPY package*.json ./
RUN npm install
COPY . .

# TypeScriptコンパイラ設定
RUN npx tsc --init || true

# ポート開放
EXPOSE 3000

# コンテナ起動後、TypeScriptファイルを実行
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]
