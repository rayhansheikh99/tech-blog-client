import React from 'react';
import './about.css'

const About = () => {
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" className='mt-10'>
             <img className='w-full img-h' src="https://decisionsindentistry.com/wp-content/uploads/2020/06/hand-typing-keyboard.jpg" alt=""/>
            <div className='absolute bg-text top-20 mt-2 lg:mt-3 lg:top-96 border-t-2 border-orange-600 p-6'>
            <h1 className='font-serif font-semibold text-orange-300 lg:text-4xl'>About Us</h1>
            <p className='text-sm text-white font-serif mx-10 mt-2'>RS Blog is a blog website for everyone and that's made clear on its old about us page, it made this clear. Everyone can share their article here about their experience. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptatibus possimus saepe quidem dignissimos? Laboriosam quis doloribus fuga quae, officia voluptatem recusandae iusto aliquid explicabo nulla vel dolores. Pariatur, rem?</p>
            </div>
        </div>
    );
};

export default About;