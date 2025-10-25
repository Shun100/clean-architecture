import { BookRepositoryInterface } from "../dataAccess/bookRepositoryInterface";
import { BookService } from './bookService';
import { Book } from '@prisma/client';

const mockBookRepository: jest.Mocked<BookRepositoryInterface> {
  create: jest.fn(),
  findById: jest.fn()
};

describe('bookService', () => {
  let bookService: BookService;

  // テスト実施前の前処理
  beforeEach(() => {
    bookService = new BookService(mockBookRepository);
  });

  // テスト実施後の後処理
  afterEach(() => {
    jest.clearAllMocks(); // 全てのモックの状態をリセット
  });

  it('書籍登録 成功', async () => {
    const newBook: Book = {
      id: '1',
      title: 'Test Book',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
});