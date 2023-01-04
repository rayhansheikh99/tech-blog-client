import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const PostDetails = () => {

    const [post, setPost] = useState([])
    const [postDetails, setPostDetails] = useState({})
    const {Id} = useParams();

    useEffect(()=>{
        fetch(`https://tech-blog-server-ogqh.onrender.com/allposts`)
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
            <div className='mt-20 lg:mx-28'>
               <img className='w-full h-60 lg:h-96' src={postDetails?.image} alt=""/> 
            </div>
            
            <div className='grid grid-cols-3 mt-2 text-sm text-gray-700 lg:mx-28 justify-items-center'>
                <span>Author: {postDetails?.author}</span>
                <span><span>Category: </span>{postDetails?.category || postDetails?.category2}</span>
                <span>{postDetails?.date}</span>
            </div>
            <div className='mx-6 my-8 font-serif text-xl text-center lg:text-2xl'>
                <h1>{postDetails?.title}</h1>
            </div>
            <div className='mx-10 lg:mx-36 mb-60'>
                <p>{postDetails?.post}</p>
            </div>
        </div>
    );
};

export default PostDetails;