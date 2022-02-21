import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Update = () => {

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
            <form onSubmit=''>
            <div className='lg:mx-28'>
               <img className=' w-full h-60 lg:h-96' src={postDetails?.image} alt=""/> 
            </div>
            <div className='flex justify-between text-sm lg:mx-28 mt-2 text-gray-700'>
                <span> <PlusCircleIcon className=" h-6 lg:h-10 m-3 text-gray-400" aria-hidden="true" /></span>
                <span className='mt-3'>
                <span className='text-base font-mono'>CATEGORY: </span>
                <select id="categorylist" name="categorylist">
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="Tech">Tech</option>
                    <option value={postDetails?.category} selected>{postDetails?.category}</option>
                    <option value="movies">Movies</option>
                </select>
                </span>
                
            </div>
          
            <div className='my-8 text-center text-xl mx-10 lg:mx-48 lg:text-2xl font-serif'>
                <input className='border-b-2 border-x-0 border-y-0 w-full outline-none' type="text" defaultValue={postDetails?.title} placeholder='Add Title Here'/>
            </div>
            <div className='my-8 text-center text-xl mx-10 lg:mx-48 lg:text-2xl font-serif'>
                <textarea className='border-b-2 h-36 border-x-0 border-y-0 w-full outline-none' type="text" defaultValue={postDetails?.post} placeholder='Write your post here'/>
            </div>
            <div className='mx-10 lg:mx-36'>
                <p></p>
            </div>
            <button type="submit" className='mb-36 mx-10 text-white hover:bg-black bg-purple-600 px-4 py-2 rounded-lg lg:mx-48 '>UPDATE</button>
            </form>
        </div>
    );
};

export default Update;