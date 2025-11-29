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
      <div className='grid grid-cols-9 gap-x-6'>
        <div>
          <img src={nicepage} width={200} height={200} alt="logo" />
        </div>
        <div>
          <img src={computer1} width={200} heiht={200} alt="1" />
        </div>
        <div>
          <img src={computer2} width={150} heiht={150} alt="2" />
        </div>
        <div>
          <img src={computer3} width={100} heiht={100} alt="3" />
        </div>
        <div>
          <img src={computer4} width={80} heiht={80} alt="4" />
        </div>
        <div>
          <img src={computer5} width={50} heiht={50} alt="5" />
        </div>


        <div className='gap-x-7 grid grid-cols-2 '>
          <div>
            <Link to={"service"} >service</Link>
          </div>
          <div>
            <Link to={"/"} >contact</Link>
          </div>

          <div>
            <img src={logo1} alt="logo" />
          </div>

        </div>





      </div>

    </nav>
  )
}

export default Navbar
