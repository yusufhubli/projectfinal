import React from 'react'

const Footer = () => {
  return (
    <div className='my-2  grid grid-cols-5 gap-0 w-full h-80 bg-purple-600 shadow-md shadow-purple-200'>
      <div className=' py-10 text-center bg-white'>
        <h1 className='mx-3 font-bold text-purple-700 pt-4 '>Feedback</h1>
        <textarea name="" id="" cols="27" rows="5" placeholder='feedback...' className=' outline-none border-2 rounded-md border-purple-700 bg-purple-50 p-1 ' />
        <button className=' my-1 font-bold bg-purple-700 text-white rounded-md shadow-md shadow-gray-400 py-1 px-24'>Send</button>
      </div>
      <div className=' pl-10 my-10 pt-3 bg-purple-700'>
        <h1 className=' my-2 font-bold text-lg text-white'>Categories</h1>
        <p className=' text-white text-[16px] font-medium'>web development</p>
        <p className=' text-white text-[16px] font-medium'>app development</p>
        <p className=' text-white text-[16px] font-medium'>web design</p>
        <p className=' text-white text-[16px] font-medium'>frontend development</p>
        <p className=' text-white text-[16px] font-medium'>backend development</p>
      </div>
      <div className='pl-10 my-10 pt-3 bg-purple-700'>
        <h1 className='my-2 font-bold text-lg text-white'>Categories</h1>
        <p className='text-white text-[16px] font-medium'>video editing</p>
        <p className='text-white text-[16px] font-medium'>blog writting</p>
        <p className='text-white text-[16px] font-medium'>ms office</p>
        <p className='text-white text-[16px] font-medium'>photo editing</p>
        <p className='text-white text-[16px] font-medium'>content writter</p>
      </div>
      <div className='pl-10 my-10 pt-3 bg-purple-700'>
        <h1 className='my-2 font-bold text-lg text-white'>Contacts</h1>
        <p className='text-white text-[16px] font-medium'>Twitter</p>
        <p className='text-white text-[16px] font-medium'>Instagram</p>
        <p className='text-white text-[16px] font-medium'>Facebook</p>
        <p className='text-white text-[16px] font-medium'>YouTube</p>
        <p className='text-white text-[16px] font-medium'>Telegram</p>
      </div>
      <div className='pl-10 my-10 pt-3 bg-purple-700'>
        <h1 className='my-2 font-bold text-lg text-white'>Links</h1>
        <p className='text-white text-[16px] font-medium'>web development</p>
        <p className='text-white text-[16px] font-medium'>app development</p>
        <p className='text-white text-[16px] font-medium'>web design</p>
        <p className='text-white text-[16px] font-medium'>frontend development</p>
        <p className='text-white text-[16px] font-medium'>backend development</p>

      </div>
    </div>
  )
}

export default Footer
