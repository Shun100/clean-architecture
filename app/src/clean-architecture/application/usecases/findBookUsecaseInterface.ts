import { FindBookRequestDto } from "../dtos/findBookRequestDto";
import { FindBookResponseDto } from "../dtos/findBookResponseDto";

export interface FindBookUsecaseInterface {
  /**
   * 書籍検索
   * @param { FindBookRequestDto } requestDto - 検索条件
   * @return { Promise<FindBookResponseDto> } responseDto - 検索にヒットした書籍情報を保持するPromiseオブジェクト 
   */
  execute(requestDto: FindBookRequestDto): Promise<FindBookResponseDto>;
}