import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
// import { categories } from './../Categorydata';


const Sidebar = () => {
    return (
        <div>
        <div className='my-10 text-center about '>
            <h1 className='p-3 mx-6 my-3 font-serif border-green-400 border-y-2'>ABOUT US</h1>
            <p className='mx-10 my-6 text-xs text-justify md:text-base'>RS Blog is a blog website for everyone and that's made clear on its old about us page, it made this clear. Everyone can share their article here about their experience.</p>
        </div>
        <div className='category'>
            <div>
                <div>
                <Link className='block px-2 py-2 mt-4 font-serif text-center lg:mx-6 hover:bg-green-200' to="/blogs">ALL CATEGORY</Link>
                    <Link className='block py-2 text-center lg:mx-6 hover:bg-green-200 border-y-2' to="/tech">Tech</Link>
                    <Link className='block py-2 text-center lg:mx-6 hover:bg-green-200' to="/movies">Movies</Link>
                    <Link className='block py-2 text-center lg:mx-6 hover:bg-green-200 border-y-2' to="/sports">Sports</Link>
                    <Link className='block py-2 mb-4 text-center border-b-2 lg:mx-6 hover:bg-green-200' to="/music">Music</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;