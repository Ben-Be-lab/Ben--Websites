import React from 'react'
import logo1 from './../assets/logo1.png'
const Navbar = () => {
  return (
    <nav className='flex justify-between bg-green-500'>
      <div className='grid grid-cols-3 gap-x-100'>
        <div>
            <img src={logo1} width={100} height={100} alt="logo"/>
        </div>

        <div className='gap-x-7 grid grid-cols-2 '>
          <div>
           <h1>Contact</h1>
        </div>
        <div>
       <h1>Services</h1>
        </div>
        </div>
        


      </div>

    </nav>
  )
}

export default Navbar
