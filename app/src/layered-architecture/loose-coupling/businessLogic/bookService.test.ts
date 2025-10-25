import { BookRepositoryInterface } from "../dataAccess/bookRepositoryInterface";
import { BookService } from './bookService';
import { Book } from '@prisma/client';

const mockBookRepository: jest.Mocked<BookRepositoryInterface> = {
  /**
   * モック関数の定義
   * テスト時にこれらの関数の振る舞いを自由に設定できる
   */
  create: jest.fn(),
  findById: jest.fn()
};

describe('bookService', () => {
  let bookService: BookService;

  // テスト実施前の前処理
  beforeEach(() => bookService = new BookService(mockBookRepository));

  // テスト実施後の後処理
  afterEach(() => jest.clearAllMocks()); // 全てのモックの状態をリセット

  // テストケース
  it('書籍登録 成功', async () => {
    // テストデータ
    const testBook: Book = {
      id: '1',
      title: 'Test Book',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    /**
     * モック関数の戻り値を設定する
     * ここでは上記のテストデータを返すよう設定する
     */
    mockBookRepository.create.mockResolvedValue(testBook);

    // テストの実行
    const result = await bookService.add('Test Book');
    expect(result).toEqual(testBook);
    expect(mockBookRepository.create).toHaveBeenCalledWith('Test Book'); // 指定した引数で呼ばれたことの確認
  });
});