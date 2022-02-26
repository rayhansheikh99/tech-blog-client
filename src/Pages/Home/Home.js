import React from 'react';
import Banner from '../Header/Banner';
import HomePost from '../HomePost/HomePost';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {

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