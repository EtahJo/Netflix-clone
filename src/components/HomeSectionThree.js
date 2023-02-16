import React from 'react';
import Image from 'next/image';
import download from '../assets/downloading.json';
import Lottie from "lottie-react";

const HomeSectionThree = () => {
  return (
    <div className='flex py-150 w-full items-center px-200 border-b-8 border-netflixGray'>
           <div className='relative w-2/4'>
        <Image
        src={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'}
        width={660}
        height={560}
        alt='Stranger Things'
        />
        <div className='flex border-4 border-netflixGray rounded-xl justify-between
         bg-netflixBG w-96 h-24 p-2 absolute inset-y-96 inset-x-32'>
        <span className='flex items-center'>
            <Image
            src={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'}
            width={50}
            height={70}
            alt='Stranger Things'
           
            />
           <span className='ml-4'>
           <p className='text-white'>Stranger Things</p>
                <p className='text-blue-600'>Downloading...</p>
           </span>
               
            </span>
           <Lottie animationData={download} loop={true}/>
         
        </div>
        </div>
        <div className='w-2/4'>
            <h2 className='text-white text-5xl font-bold my-5'>Download your shows to watch offline.</h2>
            <p className='text-white text-2xl'>Save your favorites easily and always have something to watch.</p>
        </div>
     
    </div>
  )
}

export default HomeSectionThree