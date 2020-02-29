import { model } from "mongoose";
import { blogDbSchema } from "../schema/blog";

export const BlogsModel = model('Blogs', blogDbSchema);
