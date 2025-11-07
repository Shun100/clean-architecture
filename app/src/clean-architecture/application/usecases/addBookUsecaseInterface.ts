import { AddBookRequestDto } from '../dtos/addBookRequestDto';
import { AddBookResponseDto } from '../dtos/addBookResponseDto';

export interface AddBookUsecaseInterface {
  /**
   * 書籍登録
   * @param { AddBookRequestDto } requestDto - 登録する書籍情報
   * @return { Promise<AddBookResponseDto } promiseResponseDto - 登録した書籍情報を保持するPromiseオブジェクト
   */
  execute(requestDto: AddBookRequestDto): Promise<AddBookResponseDto>;
}