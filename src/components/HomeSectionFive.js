import React from 'react';
import Image from 'next/image';

const HomeSectionFive = () => {
  return (
    <div className='border-b-8 border-netflixGray py-150 flex w-full items-center px-150'>
        <div className='w-2/4'>
            <Image
            src={'https://occ-0-300-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f'}
            width={600}
            height={300}
            alt="Kids show"
            />
        </div>
        <div className='w-2/4'>
            <h2 className='text-white text-5xl font-bold my-5'>Create profiles for kids.</h2>
            <p className='text-white text-2xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
    </div>
  )
}

export default HomeSectionFive