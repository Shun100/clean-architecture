import express from 'express';
import { PrismaClient } from '@prisma/client';
import { UuidGenerator } from '../../adapter/utils/uuidGenerator';
import { BookRepository } from '../../adapter/repositories/bookRepository';
import { AddBookUsecase } from '../../application/usecases/addBookUsecase';
import { BookController } from '../../adapter/controllers/bookController';
import { bookRoutes } from './routers/bookRouter';
import { FindBookUsecase } from '../../application/usecases/findBookUsecase';

// 環境変数に設定されているポート番号を使用する。（設定されていなければ3000番）
const PORT = process.env.PORT || 3000;

const app = express();

// expressサーバがJSONデータを返す用の設定
app.use(express.json());

// 外部インスタンス
const prisma = new PrismaClient();
const uuidGenerator = new UuidGenerator();

// 内部インスタンス
const bookRepository = new BookRepository(prisma, uuidGenerator);
const bookController = new BookController(
  new AddBookUsecase(bookRepository),
  new FindBookUsecase(bookRepository)
);

app.use('/clean-architecture/books', bookRoutes(bookController));

// サーバの起動
app.listen(PORT, () => console.log('Server is running'));