import { Query } from './index';

const getAllBooks = () => Query(`select * from Books`);
const getOne = (id: number) => Query(`select b.*, c.name from Books b join categories c on c.id = b.categoryid where b.id=?`, [id]);

export default {
    getAllBooks,
    getOne
};