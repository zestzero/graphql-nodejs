import { buildSchema } from "graphql";
import { Document, Schema, Model, model } from "mongoose";

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

export const blogDbSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    description: String,
    topic: String,
    url: String
});

interface IBlogSchema extends Document {
    id: number,
    title: string,
    author: string,
    description: string,
    topic: string,
    url: string
}

blogDbSchema.statics.findAll = async function () {
    return this.find().exec();
}

blogDbSchema.statics.findByBlogId = async function (id: number) {
    return this.findById(id).exec();
}

export interface IBlogModel extends Model<IBlogSchema> {
    findAll(): Promise<IBlogSchema[]>
    findByBlogId(id: string): Promise<IBlogSchema>
}

export default model<IBlogSchema, IBlogModel>("Blogs", blogDbSchema)
