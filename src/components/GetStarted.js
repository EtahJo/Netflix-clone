import React from 'react'

const GetStarted = () => {
  return (
    <div className='flex w-full justify-center h-15 rounded-xl'>
    <input 
    placeholder='Email address'
     type={'emails'} 
     className="p-4 w-400 rounded-tl-md rounded-bl-md"/>
    <button className='bg-netflixRed text-white 
    font-bold p-4 text-2xl rounded-tr-md rounded-br-md'>{'Get Started >' }</button>
  </div>
  )
}

export default GetStarted