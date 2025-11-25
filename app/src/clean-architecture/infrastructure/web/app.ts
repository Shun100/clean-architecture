import express from 'express';
import { PrismaClient } from '@prisma/client';
import { UuidGenerator } from '../../adapter/utils/uuidGenerator';
import { BookRepository } from '../../adapter/repositories/bookRepository';
import { AddBookUsecase } from '../../application/usecases/addBookUsecase';
import { BookController } from '../../adapter/controllers/bookController';
import { bookRoutes } from './routers/bookRouter';
import { FindBookUsecase } from '../../application/usecases/findBookUsecase';

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