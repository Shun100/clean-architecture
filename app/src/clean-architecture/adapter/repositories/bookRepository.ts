import { PrismaClient } from '@prisma/client';
import { BookEntity } from '../../domain/entities/bookEntity';
import { BookRepositoryInterface } from '../../domain/repositories/bookRepositoryInterface';

export class BookRepository implements BookRepositoryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 書籍登録
   * @param { BookEntity } newBookEntity - 登録する書籍情報
   * @returns { Promise<createdBookEntity> } promiseBookEntity - 登録した書籍情報
   */
  async create(newBookEntity: BookEntity): Promise<BookEntity> {
    const createdBookEntity = await this.prisma.book.create({
      data: {
        id: newBookEntity.id,
        title: newBookEntity.title,
        isAvailable: newBookEntity.isAvailable,
        createdAt: newBookEntity.createdAt,
        updatedAt: newBookEntity.updatedAt
      }
    });

    return createdBookEntity;
  }
}