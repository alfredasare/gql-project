import {ApolloClient} from 'apollo-boost';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/'
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
    link: httpLink,
    cache
});
