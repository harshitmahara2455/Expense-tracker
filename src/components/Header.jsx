import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex bg-blue-500 h-15 min-w-full justify-between items-center'>
        <div className='flex'>
        <GiHamburgerMenu size={ 55} color='white' className='p-4 '/>
        <p className='p-3 text-white font-semibold text-lg'>Overview</p>

        </div>
        <div>
            <CiSettings size={ 55} color='white' className='p-4 '/>
        </div>

       

      
    </div>
  )
}

export default Header
