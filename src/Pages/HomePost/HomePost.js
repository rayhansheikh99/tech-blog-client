import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Posts from './../Posts/Posts';

const HomePost = () => {

    const [posts, setPosts]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://pure-retreat-99800.herokuapp.com/allposts')
        .then(res=>res.json())
        .then(data=> setPosts(data.slice(0,6)))

    },[])

    return (
        <div>
            <div className='grid justify-center mt-8 gap-6 mx-4 lg:mx-16 mb-6 lg:grid-cols-2'>
            {
              posts.map(post=> <Posts key={post._id} post={post}/>)
            }  
            </div>
        </div>
    );
};

export default HomePost;