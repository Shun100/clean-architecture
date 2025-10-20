import express from 'express';
import { BookController } from './presentation/bookController';

const app = express();

// JSON形式のデータを受け取れるようにする。
app.use(express.json());

const bookController: BookController = new BookController();

// 環境変数に設定されているポート番号を使用する。（設定されていなければ3000番）
const PORT = process.env.PORT || 3000;

/**
 * エンドポイント定義
 * 
 * /books - 書籍の登録
 * /books/:id - 書籍の検索
 */
app.post('/books', bookController.add.bind(bookController));
app.get('/books/:id', bookController.findById.bind(bookController));

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
