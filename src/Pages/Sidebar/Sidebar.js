import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
// import { categories } from './../Categorydata';


const Sidebar = () => {
    return (
        <div>
        <div className='about text-center my-10 '>
            <h1 className='my-3 mx-6 border-y-2 p-3 font-serif border-green-400'>ABOUT US</h1>
            <p className='my-6 mx-10 text-xs md:text-base text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique aspernatur ea dignissimos voluptatum alias. Asperiores cumque voluptates id nisi, vitae provident porro, placeat nulla modi voluptas rem enim temporibus.</p>
        </div>
        <div className='category'>
            <div>
                <div>
                <Link className='block mt-4 px-2 lg:mx-6 hover:bg-gray-200 font-serif py-2 text-center' to="/blogs">ALL CATEGORY</Link>
                    <Link className='block lg:mx-6 hover:bg-gray-200 border-y-2 py-2 text-center' to="/tech">Tech</Link>
                    <Link className='block lg:mx-6 hover:bg-gray-200 py-2 text-center' to="/movies">Movies</Link>
                    <Link className='block lg:mx-6 hover:bg-gray-200 border-y-2 py-2 text-center' to="/sports">Sports</Link>
                    <Link className='block lg:mx-6 hover:bg-gray-200 border-b-2 py-2 text-center mb-4' to="/music">Music</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;