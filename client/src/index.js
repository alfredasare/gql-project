import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {client} from "./graphql/client";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
