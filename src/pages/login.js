import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/Input';

const login = () => {
  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/a83fadb5-cacd-42b5-a3d8-759fbca3ca29/CM-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg")]
    bg-transBlack bg-blend-darken w-full h-full pt-4  bg-cover
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
      
        <div className='bg-transTwo w-1/4 flex flex-col p-12 mx-auto mt-5 mb-12 pb-10'>
            <h2 className='text-4xl text-white my-4'>Sign In</h2>
            <span className='flex flex-col relative rounded-md py-1'>
                
            <input type={'text'}  className=' focus-within:outline-none bg-transparent my-2 z-20 peer focus-within:bg-transparent'/>
            <label className='absolute peer-focus-within:scale-50 peer-focus-within:origin-top-left text-xl bg-netflixGray peer-focus-within:bg-white w-full peer-focus-within:w-full
            '>Email or Phone Number</label>
            </span>
            <Input/>
            <input type={'password'} placeholder='Password' className='p-2 rounded-md my-2'/>
            <button className='text-white bg-netflixRed rounded-md p-3 font-semibold mt-5'>Sign In</button>
            <span className='flex items-center justify-between'>
                <span>
                <input type={'checkbox'} className='bg-netflixGray text-netflixGray'/>
                <label className='text-netflixGray'>Remember me</label>
                </span>
               <p className='text-netflixGray'>Need help?</p>
            </span>

            <span className='flex items-center mt-12'>
                <p className='text-netflixGray'>New to Netflix?</p>
                <p className='text-white ml-1'> Sign up now.</p>
            </span>
            <span className='mt-3 mb-20'>
                <p className='text-netflixGray inline'>This page is protected by Google reCAPTCHA to ensure you{"'"}re not a bot.</p>
                <p className='text-blue-700 inline ml-1'>Learn more</p>
            </span>
           
        </div>
        <div className='bg-transBlack  py-12 w-full mt-10  '>
            <div className='mx-auto flex flex-col  w-1/2 '>
            <a href='#' className='text-netflixGray hover:underline decoration-white
             my-1 text-sm mb-5 '>Questions? Contact Us</a>
            <div className='flex'>
            <div className='w-1/4 flex flex-col'>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>FAQ</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Cookie Preferences</a>
        </div>
        <div className='w-1/4 flex flex-col'>
        <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Help Center</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Corporate Information</a>

        </div>
        <div className='w-1/4 flex flex-col'>

            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Terms of Use</a>
        </div>
        <div className='w-1/4 flex flex-col'>

            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Privacy</a>
        </div>
            </div>
            </div>
      
   
        </div>
    </div>
  )
}

export default login