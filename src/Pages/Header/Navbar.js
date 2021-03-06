import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import useAuth from './../../Hooks/useAuth';


const Navbar = () => {

    const {user, logOut, admin} = useAuth();

    return (
        <div>
            
<nav className="bg-green-300 fixed top-0 inset-x-0 z-30 shadow-2xl shadow-cyan-500/50 px-2 sm:px-4 py-3.5 rounded dark:bg-gray-800">
<div className="container flex flex-wrap items-center justify-between mx-auto">
<Link as={Link} to="/home" className="flex">
<img src="" alt=""/>
<span className="self-center text-xl font-bold text-orange-400 logo-name whitespace-nowrap dark:text-white">RS Blog</span>
</Link>

<div className="flex items-center md:order-2">

<button type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
<span className="sr-only">Open user menu</span>
<img className="w-10 h-8 rounded-full" src="https://freesvg.org/img/abstract-user-flat-1.png" alt="user"/>
</button>

<div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
{user?.email?<div className="px-4 py-3">
<span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
</div>:('')}
{user?.email?
<ul className="py-1" aria-labelledby="dropdown">
{admin &&<li>
<Link as={Link} to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
</li>}
<li>
<Link as={Link} to="/myblog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Blog</Link>
</li>
<li>
<Link onClick={logOut} as={Link} to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
</li>
</ul>:
<li>
<Link as={Link} to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</Link>
</li>}
</div>
<button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
<span className="sr-only">Open main menu</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>

</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<Link as={Link} to="/home" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:pb-2 hover:border-b-2 hover:border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
</li>
<li>
<Link as={Link} to="/blogs" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:pb-2 hover:border-b-2 hover:border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
</li>
<li>
<Link as={Link} to="/about" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:pb-2 hover:border-b-2 hover:border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
</li>
{user?.email?
<li>
<Link as={Link} to="/createpost" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:pb-2 hover:border-b-2 hover:border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Write</Link>
</li>:('')}
<li>
<Link as={Link} to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:pb-2 hover:border-b-2 hover:border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
</li>
<li>
{user?.email? (''): <Link as={Link} to="/login" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:pb-2 hover:border-b-2 hover:border-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>}
</li>

</ul>
</div>
</div>
</nav>
        </div>
    );
};

export default Navbar;