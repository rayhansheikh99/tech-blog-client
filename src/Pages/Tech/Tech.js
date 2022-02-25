import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Tech = () => {

    const [posts, setPosts]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch(`http://localhost:5000/techposts?category=Tech`)
        .then(res=>res.json())
        .then(data=> setPosts(data))

    },)


    return (
        <div className='flex flex-row'>
        <div className='basis-1/4'>
             <Sidebar/>
        </div>
         <div className='basis-3/4'>
             <div className='grid grid-cols-1 gap-6 mt-6 mb-6 ml-10 lg:grid-cols-2'>
        
        {
           
                posts.map(post => 
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"  key={post._id}>
                <img className="h-48 mb-2 rounded-lg img lg:h-60" src={post.image} alt="product"/>
                <div className='flex justify-between mx-2 mb-4'>
                <p className='inline font-mono text-sm text-gray-600'>{post.category || post.category2}</p>
                <p className='inline font-mono text-sm text-gray-600'>{post.date}</p>
                </div>
               
                
                <div className="px-5 pb-5">
                <Link as={Link} to="#">
                <h3 className="mb-4 font-serif text-xs font-semibold tracking-tight text-gray-900 lg:text-sm dark:text-white">{post.title}</h3>
                </Link>
                <p className='mb-3 font-sans text-xs lg:text-sm'>{post.post.slice(0,200)}...</p>
                <div className="flex items-center justify-between">
                <span className="font-serif text-xs font-bold text-blue-800 dark:text-white">Author: <span className='text-xs font-light text-green-500'>{post.author}</span></span>
                <Link as={Link} to={`/postdetails/${post._id}`} className="px-2 py-2 font-mono text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 lg:px-5 dark:bg-blue-600 dark:hover:bg-blue-200 dark:focus:ring-blue-800">Read More</Link>
                </div>
                </div>
                </div>
                
                )
                
        }
            
        
       
        </div>
        </div>
         </div>

    
    );
};

export default Tech;