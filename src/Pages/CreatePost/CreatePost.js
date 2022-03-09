// import { PlusCircleIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from "axios";
import { useHistory } from 'react-router';



const CreatePost = () => {
    const { user } = useAuth();
    const [postData, setPostData] = useState({});
    const date = new Date();
    const currentDate = date.toDateString();
    const history = useHistory();

    const handleInputField = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPostData = { ...postData };
        newPostData[field] = value;
        setPostData(newPostData);
        
      };

     

      const handleSubmit = e => {
        const data = {
            ...postData,
            category2:"All Category",
            date: currentDate,
            author: user.displayName,
            email: user.email,
            
          };
          history.push('/blogs')
          console.log(data)
        axios
        .post('https://pure-retreat-99800.herokuapp.com/posts',data) 
        .then((res) => {
            if (res.status === 200) {
              alert("Post successfully published");
              window.location.reload();
            } else Promise.reject();
          })
          .catch((err) => alert("Something went wrong"));
      
            e.preventDefault() 
       
        };

    return (
        <div>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className='mt-16 lg:mx-28'>
               <img className='w-full h-60 lg:h-96' src='https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png' alt=""/> 
            </div>
            <div className='flex justify-between mt-2 text-sm text-gray-700 lg:mx-28'>
                <span>
                    {/* <label htmlFor='fileInput'>
                    <PlusCircleIcon className="h-6 m-3 text-gray-400 cursor-pointer lg:h-10" aria-hidden="true" />
                    </label> */}
                </span>
                <input className='hidden' type='file' name="avatar"  id='fileInput'/>
                <span onBlur={handleInputField} className='mt-3' required='true'>
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
                    <input onBlur={handleInputField} name="image" className='w-full border-b-2 outline-none border-x-0 border-y-0 border-b-orange-400' placeholder='Image URL Link' type="text" required/>
            </div>
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <input onBlur={handleInputField} name="title" className='w-full border-b-2 outline-none border-x-0 border-y-0 border-b-orange-400' type="text" placeholder='Add Title Here' required/>
            </div>
            <div className='mx-10 my-8 font-serif text-xl text-center lg:mx-48 lg:text-2xl'>
                <textarea onBlur={handleInputField} name="post" className='w-full border-b-2 outline-none h-36 border-x-0 border-y-0 border-b-orange-400' type="text" placeholder='Write your post here' required/>
            </div>
            <button type="submit" className='px-4 py-2 mx-10 text-white bg-purple-600 rounded-lg mb-36 hover:bg-black lg:mx-48 '>POST</button>
            </form>
        </div>
    );
};

export default CreatePost;