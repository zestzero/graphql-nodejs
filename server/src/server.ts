import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import { blogSchema } from './schema/blog';
import { seedData, getBlog, getBlogs } from './services/blog';
import { url, options } from './services/database';

// TODO: Wait for mongodb initialization
mongoose.connect(url, options)
.then(() => {
  console.log('MongoDB Connected');
  seedData();
})
.catch(err => console.log(err));

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


// TODO: Handle SIGINT, SIGTERM to disconnect mongo (or better connect on demand)
function handle(signal: any) {
  console.log(`Received ${signal}`);
  mongoose.disconnect();
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);