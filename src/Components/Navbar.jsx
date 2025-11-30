import React from 'react'
import logo1 from './../assets/logo1.png'
import { Link } from 'react-router'
import nicepage from '../assets/nicepage.png'
import computer1 from '../assets/computer1.png'
import computer2 from '../assets/comuter2.png'
import computer3 from '../assets/computer3.png'
import computer4 from '../assets/computer4.png'
import computer5 from '../assets/computer5.png'


const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white-500'>
      


        <div className='grid grid-cols-2 gap-100'>
          
          <div>
            <img src={logo1} alt="logo" />
          </div>
          <div className='grid grid-cols-2 gap-6 text-right'>
<div>
            <Link to={"service"} >service</Link>
          </div>
          <div>
            <Link to={"/"} >contact</Link>
          </div>
          </div>
          


        </div>





      

    </nav>
  )
}

export default Navbar
