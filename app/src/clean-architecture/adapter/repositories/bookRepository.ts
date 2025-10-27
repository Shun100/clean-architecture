import { PrismaClient } from '@prisma/client';
import { Book } from '../../domain/entities/book';
import { BookRepositoryInterface } from '../../domain/repositories/bookRepositoryInterface';

export class BookRepository implements BookRepositoryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  async create(book: Book): Promise<Book> {
    const createdBook = await this.prisma.book.create({
      data: {
        id: book.title,
        title: book.title,
        isAvailable: book.isAvailable,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt
      }
    });

    return new Book(
      createdBook.id,
      createdBook.title,
      createdBook.isAvailable,
      createdBook.createdAt,
      createdBook.updatedAt
    );
  }
}