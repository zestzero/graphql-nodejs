import { Blog } from '../models/blog.d';
import { BlogsModel } from '../models/Blogs';
import BlogsRepository from '../schema/blog';

const blogData: Blog[] = [
    {
        id: 1,
        title: 'Sample blog 1',
        author: 'Krit B.',
        description: 'Sample description of blog 1',
        topic: 'blog'
    },
    {
        id: 2,
        title: 'Sample blog 2',
        author: 'Krit B.',
        description: 'Sample description of blog 2',
        topic: 'blog'
    },
    {
        id: 3,
        title: 'Sample blog 3',
        author: 'Krit B.',
        description: 'Sample description of blog 3',
        topic: 'blog'
    }
];

interface BlogArgs {
    id: number;
}

interface BlogsArgs {
    topic: string;
}

const seedData = function () {
    blogData.forEach(b => {
        const blog = new BlogsModel;
        blog.set('id', b.id);
        blog.set('title', b.title);
        blog.set('author', b.author);
        blog.set('description', b.description);
        blog.set('topic', b.topic);
        blog.save();
    });
}

const getBlog = function (args: BlogArgs) {
    var id = args.id;
    return blogData.filter(course => {
        return course.id == id;
    })[0];
};

const getBlogs = async (args: BlogsArgs) => {
    const blogs = await BlogsRepository.findAll();
    if (args.topic) {
        var topic = args.topic;
        return blogs.filter(course => course.topic === topic);
    } else {
        return blogs;
    }
};

export {
    seedData,
    getBlog,
    getBlogs
};
