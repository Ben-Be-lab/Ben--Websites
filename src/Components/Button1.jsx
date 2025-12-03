import React from 'react'

const Button1 = () => {
  return (
    <>
       <div className='px-10 grid-cls-2 gap-10'>
        <input type="text" placeholder='Enter a valid email address' className='rounded-full text-black bg-white' />
         <button className='bg-yellow-500 text-white rounded-full'>SUBMIT</button> 
    </div>
    </>
  )
}

export default Button1
