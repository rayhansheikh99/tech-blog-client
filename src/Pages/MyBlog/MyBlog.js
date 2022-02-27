import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyBlog = () => {
    const {user} = useAuth();
    const [posts, setPosts]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch(`https://pure-retreat-99800.herokuapp.com/posts?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setPosts(data))
        


    },)

    const handleDeletePost = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://pure-retreat-99800.herokuapp.com/allposts/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully')
                const remainingPosts = posts.filter(post => post._id!==id);
                setPosts(remainingPosts);
                
            }
        })
 
    }
        }

    return (
        <div>
            <div className='grid grid-cols-1 gap-6 mt-20 mb-6 ml-10 lg:grid-cols-3'>
        
        {
           
                posts.map(post => 
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"  key={post._id}>
                <img className="h-48 mb-2 rounded-lg img lg:h-60" src={post.image} alt="product"/>
                <div className='flex justify-between mx-2 mb-4'>
               
                <span className=''>
                <Link to={`/updateposts/${post?._id}`}><PencilAltIcon className="inline h-4 mr-2 text-blue-400 cursor-pointer lg:h-6" aria-hidden="true" /></Link>
                <TrashIcon onClick={()=>handleDeletePost(post._id)} className="inline h-4 text-red-700 cursor-pointer lg:h-5" aria-hidden="true" />
                </span>
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
    );
};

export default MyBlog;