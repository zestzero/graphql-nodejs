import { Blog } from '../models/blog.d';

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

const getBlog = function (args: BlogArgs) {
    var id = args.id;
    return blogData.filter(course => {
        return course.id == id;
    })[0];
};

const getBlogs = function (args: BlogsArgs) {
    if (args.topic) {
        var topic = args.topic;
        return blogData.filter(course => course.topic === topic);
    } else {
        return blogData;
    }
};

export {
    getBlog,
    getBlogs
};
