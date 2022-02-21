import React from 'react';
import Banner from '../Header/Banner';
import HomePost from '../HomePost/HomePost';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';


const Home = () => {

    const [posts, setPosts]=useState([])
    // data fetch 
    useEffect(()=>{
         fetch('http://localhost:5000/posts')
        .then(res=>res.json())
        .then(data=> setPosts(data.slice(0,6)))

    },[])

    return (
        <div className=''>
           <Banner/>
           <div className='flex flex-row'>
               <div className='basis-1/4'>
                    <Sidebar/>
               </div>
                <div className='basis-3/4'>
                    <HomePost/>
                </div>

           </div>
        </div>
    );
};

export default Home;