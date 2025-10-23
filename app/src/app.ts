import express from 'express';
import { BookController as BookControllerTightCoupling } from './layered-architecture/tight-coupling/presentation/bookController';
import { BookController as BookControllerLooseCoupling} from './layered-architecture/loose-coupling/presentation/bookController';
import { BookRepositoryInterface } from './layered-architecture/loose-coupling/dataAccess/bookRepositoryInterface';
import { PrismaBookRepository } from './layered-architecture/loose-coupling/dataAccess/prismaBookRepository';
import { BookServiceInterface } from './layered-architecture/loose-coupling/businessLogic/bookServiceInterface';
import { BookService } from './layered-architecture/loose-coupling/businessLogic/bookService';

// 環境変数に設定されているポート番号を使用する。（設定されていなければ3000番）
const PORT = process.env.PORT || 3000;

const app = express();

// JSON形式のデータを受け取れるようにする。
app.use(express.json());

// レイヤードアーキテクチャ（密結合版）
const bookControllerTightCoupling: BookControllerTightCoupling = new BookControllerTightCoupling();

// レイヤードアーキテクチャ（疎結合版）
const bookRepository: BookRepositoryInterface = new PrismaBookRepository();
const bookService: BookServiceInterface = new BookService(bookRepository);
const bookControllerLooseCoupling: BookControllerLooseCoupling = new BookControllerLooseCoupling(bookService);

// エンドポイント定義
app.post('/tight-coupling/books', bookControllerTightCoupling.add.bind(bookControllerTightCoupling));
app.get('/tight-coupling/books/:id', bookControllerTightCoupling.findById.bind(bookControllerTightCoupling));
app.post('/loose-coupling/books', bookControllerLooseCoupling.add.bind(bookControllerLooseCoupling));
app.get('/loose-coupling/books/:id', bookControllerLooseCoupling.findById.bind(bookControllerLooseCoupling));

// 動作確認用
app.get('/', (_req, res) => res.json({ message: 'Hello TypeScript' }));

// サーバの起動
app.listen(PORT, () => console.log('Server is running'));
