import React from 'react';
import TypeAnimation from 'react-type-animation';
const Banner = () => {
    return (
        <div>
            
            <img className='w-full img-h' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>

            <div className='absolute font-serif font-semibold text-center text-orange-600 top-64 left-10 lg:top-80 lg:left-60 lg:text-4xl'>

            <TypeAnimation
            cursor={true}
            sequence={[
              'Welcome to RS Blog to expand your experience',
              2000,
              'Here you can get all latest news and information.',
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
           />
           
            {/* <h1 className='text-orange-600'>Here you can get all latest news and information</h1> */}
            </div>
        </div>
    );
};

export default Banner;