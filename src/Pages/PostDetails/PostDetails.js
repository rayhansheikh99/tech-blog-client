import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';

const PostDetails = () => {

    const [post, setPost] = useState([])
    const [postDetails, setPostDetails] = useState({})
    const {Id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/posts`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(()=>{
        const foundPost = post.find(
            (posts)=>posts._id===Id);
        setPostDetails(foundPost);
      
    },[post,Id]);

    return (
        <div>
            <div className='lg:mx-28'>
               <img className=' w-full h-60 lg:h-96' src={postDetails?.image} alt=""/> 
            </div>
            <div>
            <span className='lg:mx-28 mx-10'>
                <Link to={`/update/${postDetails?._id}`}><PencilAltIcon className="inline h-6 lg:h-10 m-3 text-blue-400" aria-hidden="true" /></Link>
                <TrashIcon className=" h-6 inline lg:h-9 m-3 text-red-700" aria-hidden="true" />
                </span>
            </div>
            <div className='grid grid-cols-3 text-sm lg:mx-28 justify-items-center mt-2 text-gray-700'>
                <span>Author: {postDetails?.author}</span>
                <span><span>Category: </span>{postDetails?.category}</span>
                <span>{postDetails?.date}</span>
            </div>
            <div className='my-8 text-center text-xl mx-6 lg:text-2xl font-serif'>
                <h1>{postDetails?.title}</h1>
            </div>
            <div className='mx-10 lg:mx-36 mb-60'>
                <p>{postDetails?.post}</p>
            </div>
        </div>
    );
};

export default PostDetails;