import * as React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';

const AllBooks: React.SFC<AllBookProps> = () => {
    
        const [books, setBooks] = useState<Book[]>([]);

        useEffect(() => {

        }, []);
    
        return(

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