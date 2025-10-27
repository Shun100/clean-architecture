import { AddBookRequestDto } from '../../dtos/book/addBookRequestDto';
import { AddBookResponseDto } from '../../dtos/book/addBookResponseDto';

export interface AddBookUsecaseInterface {
  execute(requestDto: AddBookRequestDto): Promise<AddBookResponseDto>;
}