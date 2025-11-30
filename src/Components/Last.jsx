import React from 'react'
import last from '../assets/last.jpg'
import Button from './Button'
const Last = () => {
  return (
    <>
      <div>
        <div   className="h-[100vh] bg-cover bg-right bg-gray text-white" style={{backgroundImage:`url(${last})`}}>
         <h2>Transform Your Space with Our Cleaning Magic</h2>
         <p>Sample text. Click to select the Text Element.</p>
         <Button/>
        </div>
      </div>
    </>
  )
}

export default Last
