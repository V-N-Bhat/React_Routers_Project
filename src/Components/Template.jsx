import React from 'react';
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'
const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn,isLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-around'>
    <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1> 
        <p className='text-[1.125rem] leading-[2rem]'>
            <span className='text-richblack-25'>{desc1}</span>
            <br></br>
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formType==='signup'?
            <SignupForm  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>:
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        }
        <div className='flex w-full items-center gap-x-2'>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
            <p className='text-richblack-100'>OR</p>
            <div className='h-[1px] bg-richblack-100 w-full'></div>
        </div>
        <button className='flex items-center w-full rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] mt-6 justify-center gap-x-6 '>
        <FcGoogle />
            <p>Sign Up with Google</p>
        </button>
    </div>
    <div className='relative w-11/12 max-w-[450px] '>
        <img src={frameImage} alt="pattern" srcset="" width={558}  height={504} loading='lazy'/>
        <img src={image} alt="students" srcset="" width={558}  height={504} loading='lazy' className='absolute -top-4 right-3'/>
    </div>
    </div>
  )
}

export default Template