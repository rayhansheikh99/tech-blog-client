import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory } from 'react-router';
import { LockOpenIcon } from '@heroicons/react/outline';

const Signup = () => {
    //sign up system apply here
  const {signInWithGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error} = useFirebase();
  
  const history = useHistory();
  let location = useLocation();


  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
    return (
        <div className='bg-img'>
            <form onSubmit={handleRegistration}>
            <div>
          <div className="lg:mx-96 rounded-lg mx-10 py-16 px-16 mb-48">
          <div className="mb-3">
          <span className="flex p-2 rounded-lg">
                <LockOpenIcon className=" h-6 lg:h-16 text-green-400 mx-auto" aria-hidden="true" />
              </span>
            <label for="name" className="inline-block mb-2 text-gray-700 form-label"
            >Full Name </label
            >
            <input
            type="name" onBlur={handleNameChange}
            className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:outline-none" id="name"placeholder="Enter full name"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-gray-700 form-label"
            >Email </label
            >
            <input
            type="email" onBlur={handleEmailChange}
            className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:outline-none" id="exampleEmail0"placeholder="Enter email"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-gray-700 form-label"
            >Password </label
            >
            <input
            type="password" onBlur={handlePasswordChange}
            className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-gray-700 focus:outline-none" id="passsword"placeholder="Enter password"/>
         </div>
         <Link as={Link} to="/login" className='mr-10 font-bold text-blue-600 hover:text-orange-500'>Already Have a Account</Link>
         <p onClick={handleGoogleSignIn} className='lg:inline mr-10 font-bold text-blue-600 cursor-pointer hover:text-orange-500'>Login with Google</p><br/>
         <button type='submit' className='px-6 py-2 mt-6 text-white bg-purple-600 rounded hover:bg-orange-500'>SIGN UP</button>
        </div>
        
        </div>
        </form>
        </div>
    );
};

export default Signup;