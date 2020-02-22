import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

// Initialize a GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver
const root = {
  hello: () => 'Hello world!'
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,  // Must be provided
  rootValue: root,
  graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));