import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { LockOpenIcon } from '@heroicons/react/outline'
import './login.css'

const Login = () => {
   const { handleSignIn, handleEmailChange, signInWithGoogle, handlePasswordChange} = useFirebase();
  const history = useHistory();
  let location = useLocation();


  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
    return (
        <div className='bg-img'>
          <form onSubmit={handleSignIn}>
          <div className=''>
          <div data-aos="fade-right" className="lg:mx-96 rounded-lg mx-10 py-16 px-16 mb-48">
            <div className="mb-3">
            <span className="flex p-2 rounded-lg">
                <LockOpenIcon className=" h-6 lg:h-16 text-green-400 mx-auto" aria-hidden="true" />
              </span>
            <label for="" className="inline-block mb-2 text-white form-label"
            >Email </label
            >
            <input
            type="email"
            onBlur={handleEmailChange} className="form-control bg-login border-b-2 block w-full px-3 py-1.5 focus:text-white focus:outline-none" id="exampleEmail0"placeholder="Enter email"/>
         </div>
            <div className="mb-3">
            <label for="" className="inline-block mb-2 text-white form-label"
            >Password </label
            >
            <input
            type="password"
            onBlur={handlePasswordChange} className="form-control border-b-2 block w-full px-3 py-1.5 focus:text-white bg-login focus:outline-none" id="passsword"placeholder="Enter password"/>
         </div>
         <Link as={Link} to="/signup" className='mr-10 font-bold text-blue-600 hover:text-orange-500'>Create a New Account</Link>
         <p onClick={handleGoogleSignIn}  className='lg:inline mr-10 font-bold text-blue-600 cursor-pointer hover:text-orange-500'>Login with Google</p><br/>
         <button type="submit" className='px-6 py-2 mt-6 text-white hover:bg-orange-800 rounded bg-orange-500'>LOGIN</button>
        </div>
        
        </div>
        </form>
        </div>
    );
};

export default Login;