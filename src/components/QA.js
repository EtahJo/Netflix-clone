import React ,{useState}from 'react'

const QA = ({children,question}) => {
    const[open,setOpen]=useState(false);
  return (
    <div className='flex flex-col w-full my-3'>
        <div className='flex items-center justify-between w-full
         cursor-pointer p-8 bg-netflixGray2 hover:bg-netflixGray' onClick={()=>setOpen(!open)}>
            <p className='text-2xl text-white  w-3.5/4'>{question}</p>
           <p className='text-white text-4xl  w-0.5/4'>{open ? 'X' : '+'}</p>
        </div>
        {open && 
        (
            <div className='mt-0.5 bg-netflixGray2 p-7'>
            {children}
        </div>
        )
        }
       
    </div>
  )
}

export default QA