import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from '../apollo';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/:id" component={Detail} />
            </Router>
        </ApolloProvider>
    );
}

export default App;
