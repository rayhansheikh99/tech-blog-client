import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css'

const Posts = (props) => {
    const{_id, title, image, post, date, category, author}=props.post
    return (
        <div>
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="mb-2 img rounded-lg h-48 lg:h-60" src={image} alt="product"/>
                <div className='flex justify-between mx-2 mb-2'>
                <p className='inline text-gray-600 text-sm font-mono'>{category}</p>
                <p className='inline text-gray-600 text-sm font-mono'>{date}</p>
                </div>
                <div className="px-5 pb-5">
                <Link as={Link} to="#">
                <h3 className="mb-4 font-serif text-xs lg:text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                </Link>
                <p className='text-xs font-sans lg:text-sm mb-3'>{post.slice(0,200)}...</p>
                <div className="flex items-center justify-between">
                <span className="font-serif text-xs font-bold text-blue-800 dark:text-white">Author: <span className='text-green-500 font-light text-xs'>{author}</span></span>
                <Link as={Link} to={`/postdetails/${_id}`} className="text-white bg-orange-400 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-200 dark:focus:ring-blue-800 font-mono">Read More</Link>
                </div>
                </div>
                </div>

        </div>
    );
};

export default Posts;