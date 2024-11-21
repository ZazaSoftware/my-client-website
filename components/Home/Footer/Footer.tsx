import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#200c30] '>
      <div>
        <Image 
        src="/images/logoo.png"
        alt='logo'
        width={180}
        height={180}
        className='mx-auto rounded-xl'
        />
      </div>
      <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 cursor-pointer text-white font-bold '>
        <div>Home</div>
        <div>Services</div>
        <div>Project</div>
        <div>Reviews</div>
        <div>Contact</div>
  
      </div>
      <p className='text-white text-opacity-60 mt-6 text-center'>© Copyright Army artz 2024</p>
    </div>
  )
}

export default Footer 