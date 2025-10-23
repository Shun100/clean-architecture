import { Book } from '@prisma/client';
import { BookRepositoryInterface } from '../dataAccess/bookRepositoryInterface';
import { BookServiceInterface } from './bookServiceInterface';

export class BookService implements BookServiceInterface {
  constructor(private readonly bookRepository: BookRepositoryInterface) {}

  /**
   * 書籍登録
   * @param { string } title - タイトル 
   * @returns { Promise<Book> } promiseBook - 登録した書籍情報を保持するPromiseオブジェクト
   */
  async add(title: string): Promise<Book> {
    return await this.bookRepository.create(title);
  }

  /**
   * 書籍情報取得
   * @param { string } id - 書籍ID
   * @returns { Promise<Book | null> } promiseBook - 書籍情報を保持するPromiseオブジェクト
   */
  async findById(id: string): Promise<Book | null> {
    return await this.bookRepository.findById(id);
  }
}