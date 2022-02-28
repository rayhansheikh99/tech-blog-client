import React from 'react';
import Dashboard from './../Dashboard/Dashboard';

const DashboardAdmin = () => {
    return (
        <div>
            <div className='flex flex-row h-96'>
                <div  className='basis-1/4'>
                    <Dashboard/>
                </div>
                <div className='mt-20 basis-3/4'>
                    <h1 className='py-3 mb-5 text-3xl text-center text-white bg-slate-600'>Dashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;