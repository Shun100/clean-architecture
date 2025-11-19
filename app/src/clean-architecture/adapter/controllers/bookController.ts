import { Request, Response } from 'express';
import { AddBookUsecaseInterface } from "../../application/usecases/addBookUsecaseInterface";
import { AddBookRequestDto } from '../../application/dtos/addBookRequestDto';
import { FindBookRequestDto } from '../../application/dtos/findBookRequestDto';
import { FindBookUsecaseInterface } from '../../application/usecases/findBookUsecaseInterface';

export class BookController {
  constructor(
    private readonly addBookUsecase: AddBookUsecaseInterface,
    private readonly findBookUsecase: FindBookUsecaseInterface
  ) {}

  async add(req: Request, res: Response) {
    try {
      const requestDto: AddBookRequestDto = {
        title: req.body.title,
      }
      const book = await this.addBookUsecase.execute(requestDto);
      res.status(201).json(book);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '書籍の登録に失敗しました' });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const requestDto: FindBookRequestDto = {
        id: req.body.id,
      }
      const book = await this.findBookUsecase.execute(requestDto);
      res.status(200).json(book);

    } catch(error) {
      console.error(error);
      res.status(500).json({ error: '書籍の検索に失敗しました' });
    }
  }
}