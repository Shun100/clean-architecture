import { IdGeneratorInterface } from '../../../adapter/utils/idGeneratorInterface';
import { AddBookRequestDto } from '../../dtos/book/addBookRequestDto';
import { AddBookResponseDto } from '../../dtos/book/addBookResponseDto';
import { AddBookUsecaseInterface } from './addBookUsecaseInterface';
import { BookRepositoryInterface } from '../../../domain/repositories/bookRepositoryInterface';
import { BookEntity } from '../../../domain/entities/bookEntity';

export class AddBookUsecase implements AddBookUsecaseInterface {
  constructor(
    private readonly bookRepository: BookRepositoryInterface,
    private readonly idGenerator: IdGeneratorInterface
  ) {}
  
  /**
   * 書籍登録
   * @param { AddBookRequestDto } requestDto
   * @returns { Promise<AddBookResponseDto> } promiseResponseDto
   */
  async execute(requestDto: AddBookRequestDto): Promise<AddBookResponseDto> {
    const id = this.idGenerator.generate();
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