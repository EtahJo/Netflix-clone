import React from 'react';
import {GrLanguage} from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='py-100 w-1/2 flex items-center justify-center mx-auto'>
        <div className='w-1/4 flex flex-col'>
            <a href='#' className='text-netflixGray hover:underline decoration-white
             my-1 text-sm mb-5'>Questions? Contact Us</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>FAQ</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Media Center</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Terms of Use</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Contact Us</a>
            {/* <div className='border-2 border-netflixGray rounded-md my-5 flex'>
              <GrLanguage size={25} color='#fff' className='bg-white'/>
                <p className='text-white'>English</p>
            </div> */}
            <p className='text-netflixGray mt-5'>Netflix Cameroon</p>
        </div>
        <div className='w-1/4 flex flex-col'>
        <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Help Center</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Jobs</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Cookie Preferences</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Legal Notices</a>
        </div>
        <div className='w-1/4 flex flex-col'>
        <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Account</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Ways to Watch</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Corporate Information</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Only on Netflix</a>
        </div>
        <div className='w-1/4 flex flex-col'>
        <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Media Center</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Terms of Use</a>
            <a href='#' className='text-netflixGray hover:underline  decoration-white my-1 text-sm'>Contact Us</a>
        </div>
    </div>
  )
}

export default Footer