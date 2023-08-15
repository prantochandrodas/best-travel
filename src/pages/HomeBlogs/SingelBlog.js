import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingelBlog = () => {
    const data=useLoaderData();
    return (
        <div className='w-[80%] mx-auto'>
            <p className='text-white text-center my-4 text-lg font-bold '>{data.title}</p>
            <p className='text-white text-center my-4 text-md'>{data.description}</p>
        </div>
    );
};

export default SingelBlog;