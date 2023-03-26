import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react';

function Navbar() {
  const [nav, setNav] = useState(true)

  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='flex justify-between p-4 my-4 mx-auto max-w-[1240px] text-white'>
      <h1 className='w-full text-3xl font-bold text-[#59dda8] pt-3'>CALCULATOR!</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}

      </div>
      <div className={!nav?'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]  ease-in-out duration-500':' fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold mt-10 px-4 text-[#59dda8] pt-3'>CALCULATOR!</h1>
        <ul className='pt-9 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
