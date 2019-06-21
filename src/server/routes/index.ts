import { Router } from 'express';
import booksRouter from './books';

let router = Router();

router.use('./books', booksRouter);

export default router;