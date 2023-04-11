import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toast,toast } from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
const LoginForm = ({setIsLoggedIn, isLoggedIn}) => {
    const navigate=useNavigate();
    const [formData,setformData]=useState({
        email:"",password:""
    })
    const [showPassword,setShowPassword]=useState(false)
    function changeHandler(event){
        setformData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged in");
        const accountData={...formData};
        console.log("printing login details ");
        console.log(accountData);
        navigate("/dashboard");
    }
     return (
    <form action="" onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email address <sup className='text-pink-200'>*</sup></p>
            <input type="email" required value={formData.email}  name='email' onChange={changeHandler} placeholder='Enter a valid email address' className='
            bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>
        <label htmlFor="" className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Passwrod <sup className='text-pink-200'>*</sup></p>
            <input type={showPassword?("text"):("password")} required value={formData.password}  name='password' onChange={changeHandler} placeholder='Password' className='
              bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            <span className='absolute right-3 top-[38px] cursor-pointer '
            onClick={()=>
                setShowPassword((prev)=>!prev)
            }>
                {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye  fontSize={24} fill='#AFB2BF' />)}
            </span>
            <Link to="#">
                <p className='text-left mt-1 text-blue-100 max-w-max ml-auto'>
                    forgot password
                </p>
            </Link>
        </label>
        <button className='text-center text-richblack-900 rounded-[8px] font-medium bg-yellow-50 px-[12px] py-[8px] mb-2'>
            Sign in
        </button>
    </form>
  )
}

export default LoginForm