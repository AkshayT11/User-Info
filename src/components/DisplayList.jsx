import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DisplayList = () => {
    const {id} = useParams();
    const allUsers = useSelector((state)=> state.users.users );
    const oneUser = allUsers.find((item)=> item.id === parseInt(id) )
  

    console.log(oneUser);
    

  return (
    <div className='w-full px-28 p-4 '>
      <div className='border max-w-2xl mx-auto mt-20 border-gray-400 rounded-md p-4'>
        <h2 className='font-semibold text-2xl my-1'> 
          <span> {oneUser.name} </span>
            </h2>
        <p className='text-lg py-3 font-semibold'>Email:
           <span className='font-normal text-[17px]'> {oneUser.email} </span> </p>
        <p className='text-lg py-3 font-semibold'>Phone: 
          <span className='font-normal text-[17px]'> {oneUser.phone}</span> </p>
        <p className='text-lg py-3 font-semibold'>Website: 
          <span className='font-normal text-[17px]'> {oneUser.website} </span> </p>
        <p className='text-lg py-3 font-semibold'>Company: 
          <span className='font-normal text-[17px]'> {oneUser.company.name} </span> </p>
        <p className='text-lg py-3 font-semibold'>Address : 
          <span className='font-normal text-[17px]'> {`${oneUser.address.suite}, ${oneUser.address.street}, ${oneUser.address.city}`} </span> </p>
      </div>
    </div>
  )
}

export default DisplayList;
