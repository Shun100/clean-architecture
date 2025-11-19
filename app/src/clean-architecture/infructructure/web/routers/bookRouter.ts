import { Router } from 'express';
import { BookController } from "../../../adapter/controllers/bookController";

/**
 * URLマッピング
 * <p>
 * URLと処理のマッピングを行う。
 * </p>
 * @param { BookController } bookController 
 * @returns { Router } router
 */
export function bookRoutes (bookController: BookController): Router {
  const router = Router();
  router.post('', bookController.add.bind(bookController));
  router.get('', bookController.findById.bind(bookController));
  return router;
}