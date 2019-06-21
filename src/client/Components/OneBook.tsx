import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { json } from '../utils/api';

const OneBook: React.SFC<OneBookProps> = props => {

    const [ book, setBook ] = useState<any> ({});
    useEffect(() => {
        json(`/api/books/${props.match.params.id}`)
        .then(book => setBook(book))
    }, []);

    return (
        <>
            <section className="row">
                <article className="md-12">
                    <h2>{book.title}</h2>
                </article>
            </section>
        </>
    )
};

export interface OneBookProps extends RouteComponentProps<{id:string}> { }

export default OneBook;