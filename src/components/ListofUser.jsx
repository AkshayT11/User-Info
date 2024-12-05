import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const ListofUser = () => {
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.users);

    // making search to filter user by name & email;
    const searchUsers = allUsers.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.email.toLowerCase().includes(search.toLowerCase())
    } )

    const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
        dispatch(addUsers(data))

    };

    useEffect(() => {
        if(allUsers.length == 0){
            fetchUsers();
        }
    }, [allUsers,dispatch])

    return (
        <div className='w-full px-28 '>
            <h2 className='font-semibold text-3xl my-4 text-center'>List of Users</h2>
            <div className='text-center'>
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4 p-2 border border-gray-400  rounded md:w-[50%] w-full mx-auto my-5"
                />
                <Link 
                className='px-6 py-2 bg-blue-600 text-white ml-6' 
                to={"/adduser"}>
                    Add User
                </Link>
            </div>
            {/* cards of list of users */}
            <section className='grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 mb-8'>
                {searchUsers.map((item) => (
                 <Link key={item.id} to={`/display/${item.id}`}>
                    <div                   
                    className='p-3 rounded-md border border-gray-400 cursor-pointer'>
                        <h2 className='text-lg font-bold'>Name: <span className='font-semibold text-lg'> {item.name} </span></h2>
                        <p className='py-1 font-bold text-lg'>Email: <span className='font-normal text-lg'> {item.email} </span></p>
                        <p className='py-1 font-bold text-lg'>Phone: <span className='font-normal text-lg'> {item.phone} </span></p>
                        <p className='py-1 font-bold text-lg'>Company: <span className='font-normal text-lg'>
                            {item.company.name} </span>
                        </p>

                    </div>
                </Link>
                ))}

            </section>

        </div>
    )
}

export default ListofUser
