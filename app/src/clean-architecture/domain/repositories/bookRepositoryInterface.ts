import { BookEntity } from '../entities/bookEntity';

export interface BookRepositoryInterface {
  /**
   * 書籍の新規登録
   * @param { BookEntity } book - 登録する書籍情報
   * @return { Promise<BookEntity> } promiseBook - 登録した書籍情報を保持するPromiseオブジェクト
   */
  create(book: BookEntity): Promise<BookEntity>;

  /**
   * 書籍の検索
   * @param { string } id - 書籍ID
   * @return { Promise<BookEntity | null> } book - 検索にヒットした書籍の情報
   */
  findById(id: string): Promise<BookEntity | null>;
}