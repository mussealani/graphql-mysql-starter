import config from 'config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);


const root = { hello: () => 'Hello world!' };
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const server = app.listen(3000,() => console.log('Listen on port ' + config.get('app.port')));
