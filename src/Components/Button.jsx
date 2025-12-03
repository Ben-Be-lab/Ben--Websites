import React from 'react'

const Button = () => {
  return (
    <>
    <div className='grid grid-cols-2 px-10 gap-4'>
      <div className='bg-white rounded-full'>
         <input type="text" placeholder='Enter a valid email address' className='text-black bg-white'/>
    </div>
    <div>
         <button className='bg-yellow-500 text-white rounded-full'>SUBMIT</button> 
    </div>
 
    </div>
    
 
     
    </>
  )
}

export default Button
