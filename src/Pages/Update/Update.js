import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';



const Update = () => {

    const [post, setPost] = useState([])
    const [postDetails, setPostDetails] = useState([])
    const {Id} = useParams();
    const { handleSubmit, register } = useForm();
    useEffect(()=>{
        fetch(`http://localhost:5000/allposts`)
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
            `http://localhost:5000/updateposts/${postDetails?._id}`, 
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
            })
    }

    return (
        <div >
            <div className='lg:mx-28'>
               <img className='w-full h-60 lg:h-96' src={postDetails?.image} alt=""/> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between mt-2 text-sm text-gray-700 lg:mx-28'>
                {/* <span> <PlusCircleIcon className="h-6 m-3 text-gray-400 lg:h-10" aria-hidden="true" /></span> */}
                <span className='mt-3' required>
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
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <h1>Image URL:</h1>
            <input className='w-full border-b-2 outline-none border-x-0 border-y-0'
          defaultValue={postDetails?.image}
          {...register("image", { required: true })}
  
        />
        </div>
        <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
        <input className='w-full border-b-2 outline-none border-x-0 border-y-0'
          defaultValue={postDetails?.title}
          {...register("title", { required: true })}
  
        />
        </div>
        <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <textarea className='w-full border-b-2 outline-none h-36 border-x-0 border-y-0' defaultValue={postDetails?.post}  {...register("post", { required: true })}/>
            </div>

            {/* <div className='lg:mx-28'>
               <img className='w-full h-60 lg:h-96' src={postDetails?.image} alt=""/> 
            </div>
            <div className='flex justify-between mt-2 text-sm text-gray-700 lg:mx-28'>
                <span> <PlusCircleIcon className="h-6 m-3 text-gray-400 lg:h-10" aria-hidden="true" /></span>
                <span className='mt-3' required>
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
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <h1>Image URL:</h1>
                    <input name="image" defaultValue={postDetails?.image} className='w-full border-b-2 outline-none border-x-0 border-y-0' placeholder='Image URL Link' type="text" required/>
            </div>
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <input onBlur={handleProductInfo} className='w-full border-b-2 outline-none border-x-0 border-y-0' name="title" type="text" placeholder='Add Title Here' />
            </div>
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <textarea onBlur={handleProductInfo} className='w-full border-b-2 outline-none h-36 border-x-0 border-y-0' name="post" type="text" defaultValue={postDetails?.post} placeholder='Write your post here' required/>
            </div> */}
            <button type="submit" className='px-4 py-2 mx-10 text-white bg-purple-600 rounded-lg mb-36 hover:bg-black lg:mx-48 '>UPDATE</button>
            </form>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
       <h1 className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>Image URL:</h1>
        <input className='w-full border-b-2 outline-none border-x-0 border-y-0' placeholder='Image URL Link'
          defaultValue={postDetails.image}
          {...register("image", { required: true })}
          
        />
        <input
          defaultValue={postDetails?.title}
          {...register("title", { required: true })}
          
        />
        <input
          defaultValue={postDetails?.post}
          {...register("post", { required: true })}
          
        />
        <input
          defaultValue={postDetails?.category}
          {...register("category", { required: true })}
          
        />
      </form> */}
        </div>
    );
};

export default Update;