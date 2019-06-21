import { Router } from 'express';
import db from '../db';

let router = Router();

router.use('/', async (req, res) => {
    let books = await db.books.getAllBooks();
    res.json(books);
});

export default router;