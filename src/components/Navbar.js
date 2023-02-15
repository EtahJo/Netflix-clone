import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex justify-between mx-200  align-middle'>
         <Image
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        width={180}
        height={60}
        alt="Netflix Logo"
        layout='fixed'
        />
        <button 
        className='text-white
         bg-netflixRed  w-200 h-10 
         rounded-md 
         p-2
         font-bold
         '>
            Sign In
        </button>
        
    </nav>
  )
}

export default Navbar