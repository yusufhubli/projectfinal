import React from 'react'

const Footer = () => {
  return (
    <div className='my-2  grid grid-cols-5 md:grid-cols-7 gap-0 w-full h-80 bg-purple-600 shadow-md shadow-purple-200'>
      <div className=' py-10 text-center col-span-2 bg-white'>
        <h1 className='mx-3 my-2 text-[17px] font-bold text-purple-700 pt-4 '>Feedback</h1>
        <textarea name="" id="" cols="25" rows="5" placeholder='feedback...' className=' outline-none border-2 rounded-md border-purple-700 bg-purple-50 p-1 ' />
        <button className=' my-3 font-bold bg-purple-700 text-white rounded-md shadow-md shadow-gray-400 py-1 px-20'>Send</button>
      </div>
      <div className=' md:col-span-5 md:p flex bg-purple-700'>
        <div className=' pl-7 my-10 pt-3 '>
          <h1 className=' my-2 font-bold text-lg text-white'>Categories</h1>
          <p className=' text-white md:text-[15px] text-[16px] font-medium'>web development</p>
          <p className=' text-white md:text-[15px] text-[16px] font-medium'>app development</p>
          <p className=' text-white md:text-[15px] text-[16px] font-medium'>web design</p>
          <p className=' text-white md:text-[15px] text-[16px] font-medium'>frontend development</p>
          <p className=' text-white md:text-[15px] text-[16px] font-medium'>backend development</p>
        </div>
        <div className='pl-5 my-10 pt-3'>
          <h1 className='my-2 font-bold text-lg text-white'>Categories</h1>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>video editing</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>blog writting</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>ms office</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>photo editing</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>content writter</p>
        </div>
        <div className='pl-5 my-10 pt-3'>
          <h1 className='my-2 font-bold text-lg text-white'>Contacts</h1>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>Twitter</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>Instagram</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>Facebook</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>YouTube</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>Telegram</p>
        </div>
        <div className='pl-5 my-10 pt-3'>
          <h1 className='my-2 font-bold text-lg text-white'>Links</h1>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>web development</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>app development</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>web design</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>frontend development</p>
          <p className='text-white md:text-[15px] text-[16px] font-medium'>backend development</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
