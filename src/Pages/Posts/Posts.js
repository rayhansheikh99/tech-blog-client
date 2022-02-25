import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css'

const Posts = (props) => {
    const{_id, title, image, post, date, category, category2, author}=props.post
    return (
        <div>
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="h-48 mb-2 rounded-lg img lg:h-60" src={image} alt="product"/>
                <div className='flex justify-between mx-2 mb-2'>
                <p className='inline font-mono text-sm text-gray-600'>{category || category2}</p>
                <p className='inline font-mono text-sm text-gray-600'>{date}</p>
                </div>
                <div className="px-5 pb-5">
                <Link as={Link} to="#">
                <h3 className="mb-4 font-serif text-xs font-semibold tracking-tight text-gray-900 lg:text-sm dark:text-white">{title}</h3>
                </Link>
                <p className='mb-3 font-sans text-xs lg:text-sm'>{post.slice(0,200)}...</p>
                <div className="flex items-center justify-between">
                <span className="font-serif text-xs font-bold text-blue-800 dark:text-white">Author: <span className='text-xs font-light text-green-500'>{author}</span></span>
                <Link as={Link} to={`/postdetails/${_id}`} className="px-2 py-2 font-mono text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 lg:px-5 dark:bg-blue-600 dark:hover:bg-blue-200 dark:focus:ring-blue-800">Read More</Link>
                </div>
                </div>
                </div>

        </div>
    );
};

export default Posts;