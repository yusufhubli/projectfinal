import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare,FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    // <div className='my-2  grid grid-cols-5 md:grid-cols-7 gap-0 w-full h-80 bg-purple-600 shadow-md shadow-purple-200'>
    //   <div className=' py-10 text-center col-span-2 bg-white'>
    //     <h1 className='mx-3 my-2 text-[17px] font-bold text-purple-700 pt-4 '>Feedback</h1>
    //     <textarea name="" id="" cols="25" rows="5" placeholder='feedback...' className=' outline-none border-2 rounded-md border-purple-700 bg-purple-50 p-1 ' />
    //     <button className=' my-3 font-bold bg-purple-700 text-white rounded-md shadow-md shadow-gray-400 py-1 px-20'>Send</button>
    //   </div>
    //   <div className=' md:col-span-5 md:p flex bg-purple-700'>
    //     <div className=' pl-7 my-10 pt-3 '>
    //       <h1 className=' my-2 font-bold text-lg text-white'>Categories</h1>
    //       <p className=' text-white md:text-[15px] text-[16px] font-medium'>web development</p>
    //       <p className=' text-white md:text-[15px] text-[16px] font-medium'>app development</p>
    //       <p className=' text-white md:text-[15px] text-[16px] font-medium'>web design</p>
    //       <p className=' text-white md:text-[15px] text-[16px] font-medium'>frontend development</p>
    //       <p className=' text-white md:text-[15px] text-[16px] font-medium'>backend development</p>
    //     </div>
    //     <div className='pl-5 my-10 pt-3'>
    //       <h1 className='my-2 font-bold text-lg text-white'>Categories</h1>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>video editing</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>blog writting</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>ms office</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>photo editing</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>content writter</p>
    //     </div>
    //     <div className='pl-5 my-10 pt-3'>
    //       <h1 className='my-2 font-bold text-lg text-white'>Contacts</h1>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>Twitter</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>Instagram</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>Facebook</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>YouTube</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>Telegram</p>
    //     </div>
    //     <div className='pl-5 my-10 pt-3'>
    //       <h1 className='my-2 font-bold text-lg text-white'>Links</h1>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>web development</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>app development</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>web design</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>frontend development</p>
    //       <p className='text-white md:text-[15px] text-[16px] font-medium'>backend development</p>
    //     </div>
    //   </div>
    // </div>
    <div className=' mt-2 pb-6 bg-purple-800 w-full'>
      <div className=' w-full h-auto bg-purple-100'>
        <h1 className=' ml-5 md:mx-16 lg:mx-40 pt-6 text-[17px] font-medium text-black '>Share your <span className=' font-bold text-purple-800 italic text-[20px]'>Feedback</span></h1>
        <div className=' flex justify-center pt-1 pb-5'>
          <input type='text' placeholder='feedback...' className=' w-[70%] outline-none border-2 rounded-md border-purple-700 bg-purple-50 px-2 text-sm ' />
          <button className=' ml-2 font-bold bg-purple-700 text-white rounded-md shadow-md shadow-gray-400 py-1 px-4'>Send</button>
        </div>
      </div>
      <div className=' w-full bg-purple-800 '>
        <div className=' md:flex md:justify-center md:flex-1 py-7'>
          <div className=' w-64 ml-10'>
            <h1 className=' py-1 pt-7 md:py-2 font-bold text-lg text-white'>Categories</h1>
            <p className=' text-white md:text-[15px] text-[16px] italic'>web development</p>
            <p className=' text-white md:text-[15px] text-[16px] italic'>app development</p>
            <p className=' text-white md:text-[15px] text-[16px] italic'>web design</p>
            <p className=' text-white md:text-[15px] text-[16px] italic'>frontend development</p>
            <p className=' text-white md:text-[15px] text-[16px] italic'>backend development</p>
          </div>
          <div className=' w-64 ml-10 '>
            <h1 className='py-1 pt-7 md:py-2 font-bold text-lg text-white'>Categories</h1>
            <p className='text-white md:text-[15px] text-[16px] italic'>video editing</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>blog writting</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>ms office</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>photo editing</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>content writter</p>
          </div>
          <div className=' w-64 ml-10'>
            <h1 className='py-1 pt-7 md:py-2 font-bold text-lg text-white'>Contacts</h1>
            <p className='text-white md:text-[15px] text-[16px] italic'>Twitter</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>Instagram</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>Facebook</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>YouTube</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>Telegram</p>
          </div>
          <div className=' w-64 ml-10'>
            <h1 className='py-1 pt-7  md:py-2 font-bold text-lg text-white'>Links</h1>
            <p className='text-white md:text-[15px] text-[16px] italic'>web development</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>app development</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>web design</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>frontend development</p>
            <p className='text-white md:text-[15px] text-[16px] italic'>backend development</p>
          </div>
        </div>
        <div className=' flex h-14 pt-5 px-4 md:px-16 items-center justify-between border-t border-white'>
          <div className=' w-[50%] text-xl font-medium text-white md:flex md:items-center'>
            <h1 className=' m-0'>GoGigs</h1> <span className=' flex items-center md:ml-2 md:border-l md:border-white text-[12px] font-light md:pl-2'>copyright <FaCopyright className='pt-[1.5px] mx-[1px]'/> reserved 2023</span>
          </div>
          <div className=' flex w-[50%] justify-end items-center text-white'>
            <div className=' md:w-[45%] lg:w-[35%] flex justify-between text-3xl md:text-4xl'>
            <FaFacebookSquare className=' hover:text-purple-100' />
            <FaInstagramSquare className=' hover:text-purple-100' />
            <FaTwitterSquare className=' hover:text-purple-100' />
            <FaLinkedin className=' hover:text-purple-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
