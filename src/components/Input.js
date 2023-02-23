import React from 'react'

const Input = ({type,id,label}) => {
  return (
    <div className='my-3 flex flex-col relative bg-netflixGray2'>
        <input id={id} class="peer appearance-none border-0 focus:outline-0 bg-transparent py-2 px-1 mt-2" type={type} placeholder=" " />
        <label htmlFor={id} class=" absolute peer-focus-within:scale-75 text-white text-xl
        peer-focus:translate-y-netflixInputY peer-focus:translate-x-netflixX mt-1 ml-1 peer-focus:text-sm
        peer-placeholder-shown [&:not(peer-placeholder-shown)]:translate-x-netflixX [&:not(peer-placeholder-shown)]:translate-y-netflixY
        [&:not(peer-placeholder-shown)]:scale-75 [&:not(peer-placeholder-shown)]:text-sm
        " >{label}</label>
    </div>
  )
}

export default Input