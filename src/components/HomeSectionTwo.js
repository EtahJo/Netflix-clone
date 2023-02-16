import React from 'react';
import Image from 'next/image';

const HomeSectionTwo = () => {
  return (
    <div className='flex py-150 justify-around items-center w-full  border-b-8
    border-netflixGray pl-150 overflow-hidden
    '>
        <div className='flex flex-col w-3/6 '>
            <h2 className='text-white text-6xl text-start font-bold my-5'>Enjoy on your TV.</h2>
        <p className='text-white text-3xl font-semiBold'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="relative w-3/6 py-11">
        <Image
        src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
        width={550}
        height={550}
        alt='TV and remote control'
        className='absolute top-0 bottom-0 cover '
        />
        <video autoPlay muted playsInline loop >
            <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'/>
        </video>
        </div>
    </div>
  )
}

export default HomeSectionTwo