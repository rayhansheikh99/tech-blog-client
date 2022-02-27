import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Blogs = () => {

    const [posts, setPosts]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://pure-retreat-99800.herokuapp.com/allposts')
        .then(res=>res.json())
        .then(data=> setPosts(data))

    },[])

    return (
        <div>
            <div className='grid justify-center mt-28 gap-6 mx-4 lg:mx-16 mb-6 lg:grid-cols-3'>
            {
              posts.map(post=> <Posts key={post._id} post={post}/>)
            }  
            </div>
        </div>
    );
};

export default Blogs;