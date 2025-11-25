import { PrismaClient } from '@prisma/client';
import { BookEntity } from '../../domain/entities/bookEntity';
import { BookRepositoryInterface } from '../../domain/repositories/bookRepositoryInterface';
import { IdGeneratorInterface } from '../utils/idGeneratorInterface';

export class BookRepository implements BookRepositoryInterface {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly idGenerator: IdGeneratorInterface
  ) {}

  /**
   * 書籍登録
   * @param { BookEntity } newBookEntity - 登録する書籍情報
   * @returns { Promise<createdBookEntity> } promiseBookEntity - 登録した書籍情報
   */
  async create(newBookEntity: BookEntity): Promise<BookEntity> {
    const createdBook = await this.prisma.book.create({
      data: {
        title: newBookEntity.title,
        id: this.idGenerator.generate(),
        isAvailable: newBookEntity.isAvailable,
        createdAt: newBookEntity.createdAt,
        updatedAt: newBookEntity.updatedAt
      }
    });

    return new BookEntity(
      createdBook.title,
      createdBook.id,
      createdBook.isAvailable,
      createdBook.createdAt,
      createdBook.updatedAt
    );
  }

  /**
   * 書籍検索
   * @param { string } id - 書籍ID 
   * @returns { Promise<BookEntity | null> } promiseBookEntity - 検索にヒットした書籍情報 (Promiseオブジェクト)
   */
  async findById(id: string): Promise<BookEntity | null> {
    const foundBook = await this.prisma.book.findUnique({
      where: {
        id
      }
    });

    if (foundBook) {
      return new BookEntity(
        foundBook.title,
        foundBook.id,
        foundBook.isAvailable,
        foundBook.createdAt,
        foundBook.updatedAt
      );
    } else {
      return null;
    }
  }
}