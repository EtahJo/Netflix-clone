import React from 'react'

const Input = () => {
  return (
    <div className='my-5 flex flex-col relative'>
        <input id="firstname" class="peer " type="text" placeholder=" " />
        <label htmlFor='firstname' class=" absolute peer-focus-within:scale-75 text-white
        peer-focus:translate-y-netflixInputY peer-focus:translate-x-netflixX ">First name</label>
    </div>
  )
}

export default Input