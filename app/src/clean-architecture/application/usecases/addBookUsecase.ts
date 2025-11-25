import { IdGeneratorInterface } from '../../adapter/utils/idGeneratorInterface';
import { AddBookRequestDto } from '../dtos/addBookRequestDto';
import { AddBookResponseDto } from '../dtos/addBookResponseDto';
import { AddBookUsecaseInterface } from './addBookUsecaseInterface';
import { BookRepositoryInterface } from '../../domain/repositories/bookRepositoryInterface';
import { BookEntity } from '../../domain/entities/bookEntity';

export class AddBookUsecase implements AddBookUsecaseInterface {
  constructor(private readonly bookRepository: BookRepositoryInterface) {}
  
  /**
   * 書籍登録
   * @param { AddBookRequestDto } requestDto
   * @returns { Promise<AddBookResponseDto> } promiseResponseDto
   */
  async execute(requestDto: AddBookRequestDto): Promise<AddBookResponseDto> {
    const newBookEntity = new BookEntity(requestDto.title);

    const createdBookEntity = await this.bookRepository.create(newBookEntity);

    return {
      title: createdBookEntity.title,
      id: createdBookEntity.id,
      isAvailable: createdBookEntity.isAvailable,
      createdAt: createdBookEntity.createdAt,
      updatedAt: createdBookEntity.updatedAt
    }
  }
}