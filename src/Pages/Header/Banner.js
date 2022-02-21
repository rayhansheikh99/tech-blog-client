import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <img className='w-full img-h' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
            <div className='text-center absolute top-64 left-16 lg:top-80 font-serif font-semibold lg:left-80 text-green-600 lg:text-4xl'>
            <h1 className=''>Welcome to RS Blog</h1>
            <h1 className='text-orange-600'>Here you can get all latest news and information</h1>
            </div>
        </div>
    );
};

export default Banner;