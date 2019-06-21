import { Router } from 'express';
import db from '../db';
import books from '../db/books';

let router = Router();

router.use('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        let [book] = await db.books.getOne(id);
        res.json(book);
    } else {
        let books = await db.books.getAllBooks();
    res.json(books);
    }
    
});

export default router;