import { Book } from "@prisma/client";
import { PrismaBookRepository } from "../dataAccess/prismaBookRepository";

export class BookService {
  private readonly bookRepository: PrismaBookRepository;

  constructor() {
    this.bookRepository = new PrismaBookRepository();
  }

  /**
   * 書籍の新規登録
   * @param { string } title - 書籍のタイトル 
   * @returns { Promise<Book> } promiseBook - 登録した書籍の情報
   */
  async add(title: string): Promise<Book> {
    return await this.bookRepository.create(title);
  }

  /**
   * 書籍検索
   * @param { string } id - 書籍のID 
   * @returns { Promise<Book | null> } - 書籍情報（該当なしの場合はnull）
   */
  async findById(id: string): Promise<Book | null> {
    return await this.bookRepository.findById(id);
  }
}