import express from 'express';
import graphqlHTTP from 'express-graphql';
import { blogSchema } from './schema/blog';
import { getBlog, getBlogs } from './services/blog';

// Root resolver
const root = {
  blog: getBlog,
  blogs: getBlogs,
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: blogSchema,  // Must be provided
  rootValue: root,
  graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));