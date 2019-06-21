import { Query } from './index';

const getAllBooks = () => Query(`select * from Books`);

export default {
    getAllBooks
};