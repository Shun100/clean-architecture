import { Book, PrismaClient } from '@prisma/client';
import { BookRepositoryInterface } from "./bookRepositoryInterface";

export class PrismaBookRepository implements BookRepositoryInterface {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * 書籍登録
   * @param { string } title - タイトル 
   * @returns { Promise<Book> } promiseBook - 登録した書籍情報を持つPromiseオブジェクト
   */
  async create(title: string): Promise<Book> {
    return await this.prisma.book.create({
      data: {
        title,
        isAvailable: true,
      },
    });
  }

  /**
   * 書籍検索
   * @param { string } id - 書籍ID
   * @returns { Promise<Book | null> } promiseBook - 取得した書籍情報を持つPromsieオブジェクト
   */
  async findById(id: string): Promise<Book | null> {
    return await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
  }
}