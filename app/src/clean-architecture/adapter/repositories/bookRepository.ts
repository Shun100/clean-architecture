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
    const createdBookEntity = await this.prisma.book.create({
      data: {
        title: newBookEntity.title,
        id: this.idGenerator.generate(),
        isAvailable: newBookEntity.isAvailable,
        createdAt: newBookEntity.createdAt,
        updatedAt: newBookEntity.updatedAt
      }
    });

    return createdBookEntity;
  }
}