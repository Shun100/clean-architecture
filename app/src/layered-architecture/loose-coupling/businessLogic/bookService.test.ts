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

// テストデータ
const testBook: Book = {
  id: '1',
  title: 'Test Book',
  isAvailable: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

describe('bookService', () => {
  let bookService: BookService;

  /**
   * テスト実施前の前処理
   * 
   * テスト対象のクラス'BookSercie'をインスタンス化する。
   * このとき、DIでBookRepositoryInterfaceを注入するようにしていると、mockBookRespositoryを注入することが
   * できるため、テストが容易になる。
   * 逆に、BookService内で直接BookRepositoryをインスタンス化していると、DBが無いと動かないためテストできない。
   */  
  beforeEach(() => bookService = new BookService(mockBookRepository));

  /**
   * テスト実施後の後処理
   * 
   * 全てのモックの状態をリセットする。
   */
  afterEach(() => jest.clearAllMocks());

  // テストケース1: 書籍登録 成功
  it('書籍登録 成功', async () => {
    /**
     * モック関数の戻り値を設定する
     * ここではテストデータを返すよう設定する
     */
    mockBookRepository.create.mockResolvedValue(testBook);

    // テスト実行
    const result = await bookService.add('Test Book');
    // 戻り値の一致確認 オブジェクトの比較はtoBeではなくtoEqualを使用する
    expect(result).toEqual(testBook);
    // mockBookRepositoryに正しい引数を渡していることの確認
    expect(mockBookRepository.create).toHaveBeenCalledWith('Test Book');
  });

  // テストケース2: 書籍検索 成功
  it('書籍検索 成功', async () => {
    mockBookRepository.findById.mockResolvedValue(testBook);

    const result = await bookService.findById('1');
    expect(result).toEqual(testBook);
    expect(mockBookRepository.findById).toHaveBeenCalledWith('1');
  });
});