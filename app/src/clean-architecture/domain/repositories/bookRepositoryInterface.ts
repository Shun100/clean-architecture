import { BookEntity } from '../entities/bookEntity';

export interface BookRepositoryInterface {
  create(book: BookEntity): Promise<BookEntity>;
  // findById(id: string): Promise<Book | null>;
}