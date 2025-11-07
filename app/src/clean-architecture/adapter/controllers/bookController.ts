import { Request, Response } from 'express';
import { AddBookUsecaseInterface } from "../../application/usecases/book/addBookUsecaseInterface";
import { AddBookRequestDto } from '../../application/dtos/addBookRequestDto';

export class BookController {
  constructor(private readonly addBookUsecase: AddBookUsecaseInterface) {}

  async add(req: Request, res: Response) {
    try {
      const requestDto: AddBookRequestDto = {
        title: req.body.title,
      }
      const book = await this.addBookUsecase.execute(requestDto);
      res.status(201).json(book);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '書籍の登録に失敗しました' })
    }
  }
}