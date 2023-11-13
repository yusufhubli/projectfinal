"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImLocation2 } from 'react-icons/im'
import { AiOutlineFileDone, AiFillStar } from 'react-icons/ai'


const Profile = (user) => {
  const { name, image, country, description } = user.user
  // console.log('user',user)
  return (
    // <div className='container w-80 h-60 my-2 mx-4 bg-white shadow-sm shadow-purple-500 rounded-md'>
    //   <div className='flex justify-center'>
    //     <img src={image} className='rounded-full border w-20 mt-6 h-20 border-purple-500' width={130} height={100} />
    //   </div>
    //   <div className='flex justify-center pt-2 text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
    //   <div className='flex justify-center'>
    //     <h1 className='text-2xl font-bold text-purple-900'>{name}</h1>
    //   </div>
    //   <div className='flex justify-center items-center py-1 text-gray-500'>
    //     <ImLocation2 size={16}/><h1 className='text-sm font-medium'>{country}</h1>
    //   </div>
    //   <div className=' flex justify-center'>
    //     <Link href={"/edit"} className='px-10 py-1 mt-2 bg-purple-700 text-white rounded-sm shadow-md shadow-gray-500 font-bold text-sm'>Edit</Link>
    //   </div>
    // </div>
    <div className='m-2 w-[90%] md:w-[65%] h-auto p-4 bg-white border border-purple-300 rounded-sm '>
      <div className=' md:w-[90%] md:flex md:mx-auto'>
        <div className=' md:w-[40%] col-span-7 mb-2 md:border-r border-purple-300 py-4'>
          <div className='ml-[28%] overflow-hidden my-1 w-[26%] md:w-[30%] h-20 border-[1px] relative border-purple-600 rounded-full'>
            <Image src={image} height={10} width={10} alt='image' className=' rounded-full w-full h-full' />
          </div>
          <h1 className='text-xl ml-[90px] capitalize font-bold'>{name}</h1>
          <div className=' flex items-center ml-16 '>
            <div className='flex items-center text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
            <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (40)</span></h1>
          </div>
          {/* <button className=' font-bold py-1 px-10 text-purple-700 bg-white border-2  border-purple-700 rounded-md shadow-md shadow-gray-300 hover:bg-gray-100'>Contact Me</button> */}
        </div>

        <div className='md:w-[60%] col-span-7 bg-white flex justify-center items-center flex-wrap py-3'>
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className=' text-sm font-bold'>Location</h1>
            <div className='flex items-center text-gray-600'>
              <ImLocation2 size={12} />
              <h2 className=' font-medium ml-1 text-[13px]'>India</h2>
            </div>
          </div>
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className='text-sm font-bold'>Member Since</h1>
            <div className='flex items-center text-gray-600'>
              <ImLocation2 size={12} />
              <h2 className='font-medium ml-1 text-[13px]'>Mar 2022</h2>
            </div>
          </div>
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className=' text-sm font-bold'>Orders</h1>
            <div className='flex items-center text-gray-600'>
              <AiOutlineFileDone size={12} />
              <h2 className='font-medium ml-1 text-[13px]'>0 completed</h2>
            </div>
          </div>
          {/* <div className='w-36 md:w-44 h-16  border-purple-700 my-2 pl-6 py-1'>
        <h1 className=' text-sm font-bold'>Avg Response Time </h1>
        <div className='flex items-center text-gray-600'>
          <ImLocation2 size={12} />
          <h2 className='font-medium ml-1 text-[13px]'>1 hour</h2>
        </div>
      </div> */}
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className=' text-sm font-bold'>Languages</h1>
            <div className='flex items-center text-gray-600'>
              <ImLocation2 size={12} />
              <h2 className='font-medium ml-1 text-[13px]'>English,Hindi</h2>
            </div>
          </div>
        </div>
      </div>

      <div className=' bg-white col-span-5 md:border-t border-purple-300 mt-2'>
        <h1 className=' text-lg md:text-xl font-bold my-2 md:mx-10'>Description</h1>
        <p className=' text-gray-700 text-[13px] lg:text-[15px] md:mx-10 md:p-4 font-medium'>{description}</p>
      </div>
    </div>
  )
}

export const Skill = () => {
  return (
    <div className=' container w-80 h-52 my-4 mx-4 bg-white shadow-sm shadow-purple-500 rounded-md'>
      <h2 className='font-bold text-lg m-2 text-purple-800'>Add Skill</h2>
      <div>
        <input type="text" className='border-2 w-56 h-8 p-1 ml-2 mt-2 rounded-md border-purple-800' placeholder='Ex:JavaScript' />
        <button className=' bg-purple-700 hover:bg-purple-600 px-5 py-1 ml-2 rounded-md font-bold text-md text-white'>Add</button>
      </div>
    </div>
  )
}

export const AboutSeller = (data) => {
  //console.log(data.data.name)
  const { name, image, description } = data.data
  return (
    <div className='m-2 col-span-5 h-auto p-4 '>
      <div className=' md:w-[90%] md:flex md:mx-auto'>
        <div className=' md:w-[40%] text-center bg-slate-100 col-span-7 mb-2 md:border-r border-purple-700 py-4'>
          <div className='ml-[36%] overflow-hidden my-1 w-[26%] md:w[30%] h-20 border-[1.5px] relative border-purple-600 rounded-full'>
            <Image src={image} height={10} width={10} alt='image' className=' rounded-full w-full h-full' />
          </div>
          <h1 className='text-xl capitalize font-bold'>{name}</h1>
          <div className=' flex items-center justify-center '>
            <div className='flex items-center text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
            <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (40)</span></h1>
          </div>
          {/* <button className=' font-bold py-1 px-10 text-purple-700 bg-white border-2  border-purple-700 rounded-md shadow-md shadow-gray-300 hover:bg-gray-100'>Contact Me</button> */}
        </div>

        <div className='md:w-[60%] col-span-7 bg-slate-100 flex justify-center items-center flex-wrap py-3'>
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className=' text-sm font-bold'>Location</h1>
            <div className='flex items-center text-gray-600'>
              <ImLocation2 size={12} />
              <h2 className=' font-medium ml-1 text-[13px]'>India</h2>
            </div>
          </div>
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className='text-sm font-bold'>Member Since</h1>
            <div className='flex items-center text-gray-600'>
              <ImLocation2 size={12} />
              <h2 className='font-medium ml-1 text-[13px]'>Mar 2022</h2>
            </div>
          </div>
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className=' text-sm font-bold'>Orders</h1>
            <div className='flex items-center text-gray-600'>
              <AiOutlineFileDone size={12} />
              <h2 className='font-medium ml-1 text-[13px]'>0 completed</h2>
            </div>
          </div>
          {/* <div className='w-36 md:w-44 h-16  border-purple-700 my-2 pl-6 py-1'>
          <h1 className=' text-sm font-bold'>Avg Response Time </h1>
          <div className='flex items-center text-gray-600'>
            <ImLocation2 size={12} />
            <h2 className='font-medium ml-1 text-[13px]'>1 hour</h2>
          </div>
        </div> */}
          <div className='w-36 md:w-44 h-16  border-purple-700 pl-6 py-1'>
            <h1 className=' text-sm font-bold'>Languages</h1>
            <div className='flex items-center text-gray-600'>
              <ImLocation2 size={12} />
              <h2 className='font-medium ml-1 text-[13px]'>English,Hindi</h2>
            </div>
          </div>
        </div>
      </div>

      <div className=' bg-white col-span-5 border-purple-700 mt-2'>
        <h1 className='text-xl font-bold my-2 md:mx-10'>Description</h1>
        <p className=' text-gray-700 text-[13px] lg:text-[15px] md:mx-10 font-medium'>{description}</p>
      </div>
    </div>
  )
}

export default Profile
