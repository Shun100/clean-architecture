import { IdGeneratorInterface } from '../../../domain/utils/idGeneratorInterface';
import { AddBookRequestDto } from '../../dtos/book/addBookRequestDto';
import { AddBookUsecaseInterface } from './addBookUsecaseInterface';
import { BookRepositoryInterface } from '../../../domain/repositories/bookRepositoryInterface';
import { Book } from '../../../domain/entities/book';

export class AddBookUsecase implements AddBookUsecaseInterface {
  constructor(
    private readonly bookRepository: BookRepositoryInterface,
    private readonly idGenerator: IdGeneratorInterface
  ) {}
  
  async execute(requestDto: AddBookRequestDto) {
    const id = this.idGenerator.generate();
    const newBook = new Book(id, requestDto.title);

    const createdBook = await this.bookRepository.create(newBook);

    return {
      id: createdBook.id,
      title: createdBook.title,
      isAvailable: createdBook.isAvailable,
      createdAt: createdBook.createdAt,
      updatedAt: createdBook.updatedAt
    }
  }
}