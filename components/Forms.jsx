import React from 'react'
import Image from 'next/image'
import {BsFillCameraFill} from 'react-icons/bs'

const Forms = () => {
  return (
    <div className='pt-20 '>
       <div className=' drop-shadow-md text-center my-5 shadow-md bg-white shadow-gray-300  w-[800px] h-auto py-10 rounded-md'>
         <div className='ml-[42%] my-2 w-[15%] h-28 border-2 relative border-purple-600 rounded-full'>
         <Image src={'/image/py.png'} height={30} width={30} className=' rounded-full p-2 w-full'/>
         <BsFillCameraFill size={30} className=' absolute top-[70px] bg-white left-[95px] text-purple-400'/>
         <input type="file" name="" id="" className=' absolute top-16 opacity-0 left-8'/>
         </div>
         <input type="text" className='w-[70%] my-3 py-1 px-3 border-2 border-purple-700 rounded-md outline-none mx-10 bg-white placeholder:text-purple-700 font-medium' placeholder='Name'/>
         <input type="email" className='w-[70%]  my-2 border-2 border-purple-700 rounded-md outline-none mx-10 py-1 px-3 placeholder:text-purple-700 font-medium' placeholder='Email' /><br />
         <textarea cols="30" rows="5"  className='w-[70%] my-2 p-1 border-2 border-purple-700 rounded-md outline-none mx-10 py-1 px-3 placeholder:text-purple-700 font-medium' placeholder='Description'/><br />
         <input type="text"  className='w-[70%] py-1 px-3 border-2 my-2 border-purple-700 rounded-md outline-none mx-10 placeholder:text-purple-700 font-medium' placeholder='Qualifications' /><br />
          <input type="text" placeholder='Certificate' className=' w-72 border-2 border-purple-700 rounded-md outline-none py-1 px-3 my-2 placeholder:text-purple-700 font-medium' /> <input type="text" placeholder='From' className='w-64 border-2 border-purple-700 rounded-md outline-none py-1 px-3 my-2 ml-3 placeholder:text-purple-700 font-medium' /><br />         
         <button className='w-[70%] py-1 rounded-md bg-purple-700 text-white font-bold shadow-md shadow-gray-400 my-2'>Submit</button>
       </div>
    </div>
  )
}

export default Forms
