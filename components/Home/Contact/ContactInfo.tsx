import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa';
import { contactData } from "@/Data/data";
import { FiPhone } from 'react-icons/fi';
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div>

<Link href={"tel:+2349028823818"}>
      <div className='flex items-center space-x-8 mb-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaPhone  className='w-4 h-4  md:w-7 md:h-7  text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Phone</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.phone}</h1>
        </div>
      </div>
      </Link>

      <Link href={"mailto:ajaguprinceart@gmail.com"}>
      <div className='flex items-center space-x-8 mb-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaEnvelope  className='w-4 h-4  md:w-7 md:h-7  text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>EmailAddress</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70 cursor-pointer'>{contactData.email}</h1>
        </div>
      </div>
      </Link>

        <Link href={"https://wa.me/+2349028823818"}>
      <div className='flex items-center space-x-8 mb-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FiPhone  className='w-4 h-4  md:w-7 md:h-7  text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>WhatsApp</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.whatsapp}</h1>
        </div>
      </div>

      </Link>

      <div className='flex items-center space-x-8  '>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaMap  className='w-4 h-4  md:w-7 md:h-7  text-white'/>
        </div>
        <div>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Address</h1>
          <h1 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.address}</h1>
        </div>
      </div>

     

    </div>
  )
}

export default ContactInfo