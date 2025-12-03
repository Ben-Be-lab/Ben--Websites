import React from 'react'
import last from '../assets/last.jpg'
import Button from './Button'
const Last = () => {
  return (
    <>
      <div>
        <div className="h-[100vh] bg-cover bg-right bg-gray text-white py-10" style={{ backgroundImage: `url(${last})` }}>
          <div className='px-10 w-1/2'>
            <h2 className='font-bold text-5xl mt-10 py-6'>Transform Your Space with Our Cleaning Magic</h2>
            <p className='py-6' >Sample text. Click to select the Text Element.</p>
          </div>
          <Button />
        </div>
      </div>
    </>
  )
}

export default Last
