import { ChartSquareBarIcon, ClipboardListIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  
return (
    <div>
        
        <div className="fixed w-40 px-1 mt-16 bg-white shadow-md h-96 md:w-60">
<ul className="relative">
<li className="relative">
    <h1 className='py-10 font-serif text-xl font-bold text-center '>RS BLOG</h1>
  <Link as={Link} to="/dashboard" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
  <ChartSquareBarIcon className="w-6 h-6 mx-2" aria-hidden="true" />
    <span>DASHBOARD</span>
  </Link>
</li>
<li className="relative">
  <Link as={Link} to="/managepost" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
  <ClipboardListIcon className="w-6 h-6 mx-2" aria-hidden="true" />
    <span>MANAGE POST</span>
  </Link>
</li>
<li className="relative">
  <Link as={Link} to="/makeadmin" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
  <UserCircleIcon className="w-6 h-6 mx-2" aria-hidden="true" />
    <span>MAKE ADMIN</span>
  </Link>
</li>
<li className="relative">
  <Link as={Link} to="/home" className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
  <HomeIcon className="w-6 h-6 mx-2" aria-hidden="true" />
    <span>HOME</span>
  </Link>
</li>

</ul>
</div>

    </div>
);
};

export default Dashboard;