import { FindBookRequestDto } from "../dtos/findBookRequestDto";
import { FindBookResponseDto } from "../dtos/findBookResponseDto";
import { FindBookUsecaseInterface } from "./findBookUsecaseInterface";
import { BookRepositoryInterface } from '../../domain/repositories/bookRepositoryInterface';
import { BookEntity } from "../../domain/entities/bookEntity";

export class FindBookUsecase implements FindBookUsecaseInterface {
  constructor(private readonly bookRepository: BookRepositoryInterface) {}

  /**
   * 書籍検索
   * @param { FindBookRequestDto } requestDto - リクエストDTO 
   * @returns { Promise<ResponseDto> } responseDto - レスポンスDTOを保持するPromiseオブジェクト
   */
  async execute(requestDto: FindBookRequestDto): Promise<FindBookResponseDto> {
    const id: string = requestDto.id;
    const book: BookEntity | null = await this.bookRepository.findById(id);

    return {
      id:           book ? book.id : null,
      title:        book ? book.title : null,
      isAvailable:  book ? book.isAvailable : null,
      createdAt:    book ? book.createdAt : null,
      updatedAt:    book ? book.updatedAt : null
    }
  }
}