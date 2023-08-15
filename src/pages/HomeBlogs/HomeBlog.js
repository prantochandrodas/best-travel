import React from 'react';
import './HomeBlogs.css'
import { Link } from 'react-router-dom';
const HomeBlog = ({ blog }) => {
    return (
        <div className='box'>
            <article className="flex w-[80%] mx-auto bg-[#232B2B] transition hover:shadow-xl">
               
                <div className="hidden sm:block sm:basis-56">
                    <img alt="Guitar" src={blog.image} className="aspect-square h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 className="font-bold uppercase text-white-900">
                                {blog.title}
                            </h3>
                        </a>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white-700">
                            {blog.description.length>200?blog.description.slice(0,200):blog.description}...
                        </p>
                    </div>
                    <div className="sm:flex sm:items-end sm:justify-end">
                        <Link to={`blogsById/${blog._id}`} className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                            Read Blog
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default HomeBlog;