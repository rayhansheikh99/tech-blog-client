import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';



const Update = () => {

    const [post, setPost] = useState([])
    const [postDetails, setPostDetails] = useState([])
    const {Id} = useParams();
    const { handleSubmit, register } = useForm();
    const history = useHistory();
    useEffect(()=>{
        fetch(`https://pure-retreat-99800.herokuapp.com/allposts`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(()=>{
        const foundPost = post.find(
            (posts)=>posts._id===Id);
            setPostDetails(foundPost);
      
    },[post,Id]);
    

    const  onSubmit = data => {
        console.log(data)
        fetch(
            `https://pure-retreat-99800.herokuapp.com/updateposts/${postDetails?._id}`, 
            {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                }
                history.push('/myblog')
            })
    }

    return (
        <div >
            <div className='mt-16 lg:mx-28'>
               <img className='w-full h-60 lg:h-96' src={postDetails?.image} alt=""/> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between mt-2 text-sm text-gray-700 lg:mx-28'>
                <span className='mt-3'  defaultValue={postDetails?.category}
                {...register("category", { required: true })}>
                <span className='font-mono text-base'>CATEGORY: </span>
                <select id="category" name="category">
                    <option value="Music">Music</option>
                    <option value="Sports">Sports</option>
                    <option value="Tech">Tech</option>
                    <option value="All Category" selected>All Category</option>
                    <option value="Movies">Movies</option>
                </select>
                </span>
                
            </div>
            <h1 className='text-xl font-bold lg:mx-48 mt-7'>Image URL:</h1>
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-xl'>
            <input className='w-full border-b-2 outline-none border-x-0 border-y-0'
          defaultValue={postDetails?.image}
          {...register("image", { required: true })}
  
        />
        </div>
        <h1 className='text-xl font-bold lg:mx-48'>Title Here</h1>
        <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-xl'>
        <input className='w-full border-b-2 outline-none border-x-0 border-y-0'
          defaultValue={postDetails?.title}
          {...register("title", { required: true })}
  
        />
        </div>
        <h1 className='mt-4 text-xl font-bold lg:mx-48'>Write your post here</h1>
        <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <textarea className='w-full border-b-2 outline-none h-36 border-x-0 border-y-0' defaultValue={postDetails?.post}  {...register("post", { required: true })}/>
            </div>
            <button type="submit" className='px-4 py-2 mx-10 text-white bg-purple-600 rounded-lg mb-36 hover:bg-black lg:mx-48 '>UPDATE</button>
            </form>

        </div>
    );
};

export default Update;