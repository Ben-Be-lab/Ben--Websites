import React from 'react'
import Button1 from './Button1'
import Contact from './Contact'
import contactphoto from '../assets/contactphoto.jpg'
const ContactLast = () => {
  return (
    <>
      <div>
        <Contact />
      </div>

      <div>


      </div>
      <div >
        <div className="h-[100vh] bg-cover bg-right bg-gray text-white" style={{ backgroundImage: `url(${contactphoto})` }}>
          <h2 className='font-bold'>Transform Your Space with Our Cleaning Magic</h2>
          <p>Sample text. Click to select the Text Element.</p>
<div>
  <Button1 />
</div>
        </div>
        <div>

        </div>
      </div>



    </>
  )
}

export default ContactLast
