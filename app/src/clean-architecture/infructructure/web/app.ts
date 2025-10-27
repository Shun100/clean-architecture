import express from 'express';
import { PrismaClient } from '@prisma/client';
import { UuidGenerator } from '../../adapter/utils/uuidGenerator';
import { BookRepository } from '../../adapter/repositories/bookRepository';
import { AddBookUsecase } from '../../application/usecases/book/addBookUsecase';
import { BookController } from '../../adapter/controllers/bookController';
import { bookRoutes } from './routers/bookRouter';

const app = express();

app.use(express.json());

const prisma = new PrismaClient();
const uuidGenerator = new UuidGenerator();

const bookRepository = new BookRepository(prisma);
const addBookUsecase = new AddBookUsecase(bookRepository, uuidGenerator);
const bookController = new BookController(addBookUsecase);

app.use('/clean-architecture/books', bookRoutes(bookController));