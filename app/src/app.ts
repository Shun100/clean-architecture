import express from 'express';

const app = express();

// JSON形式のデータを受け取れるようにする。
app.use(express.json());

// 環境変数に設定されているポート番号を使用する。（設定されていなければ3000番）
const PORT = process.env.PORT || 3000;

/**
 * HTTPリクエスト処理
 * Getリクエストを受けて、JSONメッセージを返す。
 * @param { string } url - リクエストを受けるURL
 * @param { function } doGet - リクエストを受けた際に実行する処理（コールバック関数）
 */
app.get('/', (_req, res) => {
  res.json({ message: 'Hello TypeScript' });
});

// サーバの起動
app.listen(PORT, () => console.log('Server is running'));
