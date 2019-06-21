import * as React from 'react';
import './scss/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllBooks from './Components/AllBooks';

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact Path="/books" component={AllBooks} />
                <Route exact path="/:id/details" component={OneBook} />
            </Switch>
        </BrowserRouter>
    )
}

export interface AppProps { }

export default App;