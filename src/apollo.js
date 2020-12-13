import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://172.26.91.87:4000',
    cache: new InMemoryCache()
});

export default client;
