import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

const AllBooks: React.SFC<AllBookProps> = () => {
    
        const [books, setBooks] = useState<Book[]>([]);

        useEffect(() => {
            json('/api/books')
            .then(books => setBooks(books))
        }, []);
    
        return(
            <section className="row">
                <article className="col-md-12">
                    <ul className="list-group">
                        {books.map(book => (
                            <li key={book.id}>{book.title} <Link className="btn btn-primary" to={`/${book.id}/details`}>Details</Link></li>
                        ))}
                    </ul>
                </article>
            </section>
        )
}

export interface Book {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date
}

export interface AllBookProps {

}

export default AllBooks;