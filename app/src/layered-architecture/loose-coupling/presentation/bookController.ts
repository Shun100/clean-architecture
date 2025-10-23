import { Request, Response } from 'express';
import { BookServiceInterface } from "../businessLogic/bookServiceInterface";

export class BookController {
  constructor(private readonly bookServiceInterface: BookServiceInterface) {}

  /**
   * 書籍登録
   * @param { Reqeust } req - リクエストオブジェクト 
   * @param { Response } res - レスポンスオブジェクト 
   */
  async add(req: Request, res: Response) {
    try {
      const title = req.body.title as string;
      const book = await this.bookServiceInterface.add(title);
      res.status(201).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '書籍の登録に失敗しました' });
    }
  }

  /**
   * 書籍検索 (ID検索)
   * @param { Request } req - リクエストオブジェクト 
   * @param res 
   */
  async findById(req: Request, res: Response) {
    try {
      const id = req.body.id as string;
      const book = await this.bookServiceInterface.findById(id);
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ error: '書籍が見つかりませんでした' });
      }
    } catch(error) {
      console.error(error);
      res.status(500).json({ error: '書籍の検索に失敗しました '});
    }
  }
}