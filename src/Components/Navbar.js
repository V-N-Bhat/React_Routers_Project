import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { toast } from 'react-hot-toast';
const Navbar = (props) => {
    let isLoggedin=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    function logoutHandler(){
        setIsLoggedIn(false);
        toast.success("Logged out")
    }
  return (
    <div className='flex justify-between font-bold text-richblack-100 items-center w-11/12 mt-2 max-w-[1160px] mx-auto'>
        <Link to='/'>
            <img src={logo} alt="Logo" srcset=""  width={160} height={32} loading="lazy" />
        </Link>
        <nav>
            <ul className='flex gap-44 justify-around'>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        {/* Login signup logout Dashboard  */}
        <div className='flex items-center gap-x-4'>
        {
            
            !isLoggedin &&   <Link to='/login'><button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button></Link>
        }
        {
               !isLoggedin && 
                <Link to='/signup'><button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign UP</button></Link>
        }
        {
                isLoggedin &&
                <Link to='/'><button onClick={logoutHandler} className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log out</button></Link>
        }
        {
                isLoggedin &&
                <Link to='/dashboard'><button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>DashBoard</button></Link>

        }
        </div>
    </div>
  )
}

export default Navbar