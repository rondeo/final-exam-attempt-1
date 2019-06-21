import * as React from 'react';
import { Link } from 'react-router-dom';

const Home: React.SFC<HomeProps> = () => {
    return(
        <section className="row">
            <article className="col-12-md">
                <h1 className="text-center m-4">Bookstore for the Illiterate and Kids Who Can't Read So Good.</h1>
                <Link to="/books" className="btn btn-block btn-warning text-center">View Books</Link>
            </article>
        </section>
    )
}

export interface HomeProps {

}

export default Home;