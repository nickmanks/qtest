import ApolloClient from 'apollo-boost';

export const graphClient = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
});
