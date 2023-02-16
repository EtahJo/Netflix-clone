import React from 'react';
import Navbar from './Navbar';

const HomeHero = () => {
  return (
    <div
    className="bg-[url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')]
    my-0 py-5 bg-transBlack bg-blend-darken border-b-8 border-netflixGray
    ">
     <Navbar/>
     <div className='flex flex-col justify-center my-40'>
       <h2 className='text-white font-bold text-5xl text-center'>
         Unlimited movies, TV shows, and more.
       </h2>
       <p className='text-2xl text-white text-center py-5'>Watch anywhere. Cancel anytime.</p>
       <p className='text-2xl text-white text-center pb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
       <div className='flex w-full justify-center h-15 rounded-xl'>
         <input 
         placeholder='Email address'
          type={'emails'} 
          className="p-4 w-400"/>
         <button className='bg-netflixRed text-white font-bold p-4 text-2xl'>{'Get Started >' }</button>
       </div>
     </div>
   </div>
  )
}

export default HomeHero