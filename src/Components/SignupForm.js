import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import React from 'react'
import { Toast,toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn, isLoggedIn}) => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [accountType,setAccountType]=useState("student");
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    if(formData.createPassword!=formData.confirmPassword){
        toast.error("password not match");
        return;
    }
    toast.success("account created");
    const accountData={...formData}
    console.log(accountData);
    navigate("/dashboard");
  }
  return (
    <div >
      {/* student-instructor tab
       */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button className={`${accountType==="student"?
            "bg-richblack-900 text-richblack-100":"bg-transparent text-richblack-700"
        } py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>student</button>
        <button 
        className={`${accountType==="instructor"?
            "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-600"
        } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("instructor")}>Instructor</button>
      </div>
      <form action=" " onSubmit={submitHandler} className="mt-16 flex flex-col gap-1">
        {/* First name last name  */}
        <div className="flex justify-between ">
          <label htmlFor="" >
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter your first name"
              value={formData.firstName}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          <label htmlFor="">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter your last name"
              value={formData.lastName}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        {/* email */}
        <label className="mt-4">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email address <sup className='text-pink-200'>*</sup>
          </p>
          <input
            type="email"
            required
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter a valid email address"
            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        {/* Create passowrd and Confirmm the password */}
        <div className="flex justify-between">

            <label htmlFor="" className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Passwrod <sup className='text-pink-200'>*</sup>
            </p>
            <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                name="createPassword"
                onChange={changeHandler}
                placeholder="Enter Password"
                className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span className="absolute right-4 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
            </label>
            <label htmlFor="" className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
               confirm Passwrod <sup className='text-pink-200'>*</sup>
            </p>
            <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="confirm Password"
                className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span className="absolute right-4 top-[38px]" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
            </label>
        </div>
        <button className='text-center w-full mt-6 text-richblack-900 rounded-[8px] font-medium bg-yellow-50 px-[12px] py-[8px] mb-2'>Create account</button>
      </form>
    </div>
  );
};

export default SignupForm;
