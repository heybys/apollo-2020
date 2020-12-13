import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://172.26.91.87:4000',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      togglelikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.modify({
          id: cache.identify({
            __typename: 'Movie',
            id
          }),
          fields: {
            isLiked: () => !isLiked
          }
        });
      }
    }
  }
});

export default client;
