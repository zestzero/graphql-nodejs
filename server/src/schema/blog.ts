import { buildSchema } from "graphql";

export const blogSchema = buildSchema(`
    type Query {
        blog(id: Int!): Blog
        blogs(topic: String): [Blog]
    },
    type Blog {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);