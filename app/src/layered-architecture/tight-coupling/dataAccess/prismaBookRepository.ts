import { Book, PrismaClient } from '@prisma/client';

export class PrismaBookRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * 書籍登録
   * NOTE: データベース関連の処理は全て非同期処理になるので、async関数にする必要がある。
   * @param { string } title - 書籍タイトル
   * @return { Promise<Book> } - 登録した書籍の情報（Promiseオブジェクト）
   */
  async create(title: string): Promise<Book> {
    return await this.prisma.book.create({
      data: {
        title,
        isAvailable: true,
      }
    });
  }

  /**
   * 書籍検索
   * @param { string } id - 書籍ID
   * @return { Promise<Book | null> } - 取得した書籍情報（該当なしの場合はnull）
   */
  async findById(id: string): Promise<Book | null> {
    return await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
  }
}