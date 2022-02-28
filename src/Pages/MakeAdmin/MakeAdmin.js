import React,{ useState} from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from './../Dashboard/Dashboard';

const MakeAdmin = () => {

    const { reset } = useForm();
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = data => {
        const user = { email };
        fetch('https://pure-retreat-99800.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
        
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                    alert('Admin Added Successfully');
                    reset();
            })
            // .then(data => {
                
                
            // })

       
    }

    return (
        <div>
            <div className='flex flex-row h-96'>
                <div  className='basis-1/4'>
                    <Dashboard/>
                </div>
                <div className='mt-20 basis-3/4' data-aos="zoom-out">
                <h4 className='py-3 mb-5 text-3xl text-center text-white bg-slate-600'>Make an Admin</h4>
                    <form  onSubmit={handleAdminSubmit}>
                    <input onBlur={handleOnBlur} className='block p-2 mx-auto mt-2 bg-gray-100 border-b-2 rounded border-rose-200 w-96' type="email" placeholder="Enter email">
                    </input>
                    <button className='block w-48 p-2 mx-auto mt-2 mb-6 font-mono font-bold bg-blue-500 rounded-2xl hover:bg-orange-400' type="submit">Make Admin</button>
                    </form>
                </div>
        </div>
        </div>
    );
};

export default MakeAdmin;