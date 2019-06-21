import * as React from 'react';
import './scss/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.SFC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact Path="/books" component={AllBooks} />
            </Switch>
        </BrowserRouter>
    )
}

export interface AppProps { }