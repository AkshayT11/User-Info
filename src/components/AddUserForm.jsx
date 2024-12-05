import React, { useState } from 'react'

const AddUserForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",phone:"",company:"",
    });

    const [error,setError] = useState({});

    const handleChange= (e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})        
    }

    const validate = ()=>{
        const newError = {};
        if(!formData.name.trim()){
            newError.name = "Name is Required";  
        } 
        if(!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email) ){
            newError.email = "Email Id is not Valid";
        }
        if(!formData.phone.trim() || !/^\d+$/.test(formData.phone) ){
            newError.phone = "Phone number is not valid";
            }
        if(!formData.company.trim() ){
            newError.company = "Company name is required";
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validate()){
            console.log("Form Submitted",formData);
            alert("user added Successfully")
            setFormData({name:"",email:"",phone:"",company:""}) 
        }
        
        
    }

    
    

  return (
    <div className='w-full px-28 h-screen'>
      {/* form */}
      <div className='max-w-md border border-slate-400 rounded px-4 mx-auto mt-20'>
        <h2 className='text-2xl text-center my-2'>Add New User</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            className={`w-full rounded-md border px-2 py-1 my-2 
                ${error.name ? "border-red-600" : "border-gray-300" } `}
                placeholder='Enter User Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
            />
            {error.name && <p className='text-red-500 text-sm'>{error.name} </p> }
            <input type="text"
            className={`w-full rounded-md border px-2 py-1 my-2 
              ${error.email ? "border-red-600" : "border-gray-300" }  `}
                placeholder='Enter Email Id'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
             {error.email && <p className='text-red-500 text-sm'>{error.email} </p> }
            <input type="text"
            className={`w-full rounded-md border px-2 py-1 my-2  
                ${error.phone ? "border-red-600" : "border-gray-300" }`}
                placeholder='Enter User Phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
            />
            {error.phone && <p className='text-red-500 text-sm'>{error.phone} </p> }
            <input type="text"
            className={`w-full rounded-md border px-2 py-1 my-2  
                 ${error.company ? "border-red-600" : "border-gray-300" } `}
                placeholder='Enter Company'
                name='company'
                value={formData.company}
                onChange={handleChange}
            />
            {error.company && <p className='text-red-500 text-sm'>{error.company} </p> }
            <button type='submit'
             className='px-5 py-2 border-none bg-green-500 text-white
             w-full rounded-lg my-6 hover:bg-green-600'
            >
                Add User
            </button>
        </form>
      </div>
    </div>
  )
}

export default AddUserForm
