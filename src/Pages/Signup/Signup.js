import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory } from 'react-router';
import { LockOpenIcon } from '@heroicons/react/outline';

const Signup = () => {
    //sign up system apply here
  const {signInWithGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange} = useFirebase();
  
  const history = useHistory();
  let location = useLocation();


  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
    return (
        <div className='bg-img'>
            <form onSubmit={handleRegistration}>
            <div>
          <div data-aos="fade-left" className="px-16 py-16 mx-10 mb-48 rounded-lg lg:mx-96">
          <div className="mb-3">
          <span className="flex p-2 rounded-lg">
                <LockOpenIcon className="h-6 mx-auto text-green-400  lg:h-16" aria-hidden="true" />
              </span>
            <label for="name" className="inline-block mb-2 text-white form-label"
            >Full Name </label
            >
            <input
            type="name" onBlur={handleNameChange}
            className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-white focus:outline-none" id="name"placeholder="Enter full name"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-white form-label"
            >Email </label
            >
            <input
            type="email" onBlur={handleEmailChange}
            className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-white focus:outline-none" id="exampleEmail0"placeholder="Enter email"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-white form-label"
            >Password </label
            >
            <input
            type="password" onBlur={handlePasswordChange}
            className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-white focus:outline-none" id="passsword"placeholder="Enter password"/>
         </div>
         <Link as={Link} to="/login" className='mr-10 font-bold text-blue-600 hover:text-orange-500'>Already Have a Account</Link>
         <p onClick={handleGoogleSignIn} className='mr-10 font-bold text-blue-600 cursor-pointer lg:inline hover:text-orange-500'>Login with Google</p><br/>
         <button type='submit' className='px-6 py-2 mt-6 text-white bg-purple-600 rounded hover:bg-orange-500'>SIGN UP</button>
        </div>
        
        </div>
        </form>
        </div>
    );
};

export default Signup;