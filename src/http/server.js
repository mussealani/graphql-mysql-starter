import config from 'config';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: config.get('app.port') }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
