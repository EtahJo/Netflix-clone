import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const login = () => {
  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/a83fadb5-cacd-42b5-a3d8-759fbca3ca29/CM-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg")]
    bg-transBlack bg-blend-darken w-full h-full
    '>
        <Link href={'/'}>
        <Image
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        width={180}
        height={60}
        alt="Netflix Logo"
        layout='fixed'
        />
        </Link>
      
        <div className='bg-transTwo w-1/4 flex flex-col p-12'>
            <h2 className='text-4xl text-white my-5'>Sign In</h2>
            <span className='flex flex-col'>
                <label>Email or Phone Number</label>
            <input type={'text'} placeholder='Email or Phone number' className='p-2 rounded-md my-4'/>
            </span>

            <input type={'password'} placeholder='Password'/>
            <button className='text-white'>Sign In</button>
        </div>
        
    </div>
  )
}

export default login