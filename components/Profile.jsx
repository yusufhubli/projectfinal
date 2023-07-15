import React from 'react'
import Image from 'next/image'
import { ImLocation2 } from 'react-icons/im'
import { AiOutlineFileDone,AiFillStar } from 'react-icons/ai'

const Profile = () => {
  return (
    <div className='container w-80 h-52 my-2 mx-4 bg-white shadow-sm shadow-purple-500 rounded-md'>
      <div className='flex justify-center'>
        <Image src={'/image/py.png'} className='rounded-full m-4 border border-purple-500 p-2' width={100} height={80} />
      </div>
      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold text-purple-900'>Mohammed Yusuf</h1>
      </div>
      <div className='flex justify-center text-green-500 text-sm font-bold'>online</div>
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

export const AboutSeller = () => {
  return (
    <div className='m-4 grid grid-cols-5 gap-2 w-[850px] h-auto p-4 rounded-md bg-white shadow-sm shadow-purple-300 border-t border-purple-300'>
      <div className=' text-center bg-white col-span-2 border-r border-purple-700'>
        <div className='ml-[36%] my-4 w-[26%] h-20 border-2 relative border-purple-600 rounded-full'>
          <Image src={'/image/py.png'} height={30} width={30} className=' rounded-full p-2 w-full' />
        </div>
        <h1 className='text-2xl font-bold my-1'>Mohammed Yusuf </h1>
        <div className=' flex items-center justify-center my-1 '>
          <div className='flex text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
          <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (40)</span></h1>
        </div>
        <button className=' font-bold py-1 px-10 text-purple-700 bg-white border-2  border-purple-700 rounded-md shadow-md shadow-gray-300 hover:bg-gray-100'>Contact Me</button>
      </div>

      <div className=' bg-white col-span-3 flex flex-wrap'>
        <div className='w-48 h-16  border-purple-700 mx-4 my-2 pl-6 py-1'>
          <h1 className=' text-lg font-bold'>Location</h1>
          <div className='flex items-center text-gray-600'>
            <ImLocation2 size={17} />
            <h2 className=' font-medium ml-1'>India</h2>
          </div>
        </div>
        <div className='w-48 h-16  border-purple-700 mx-4 my-2 pl-6 py-1'>
          <h1 className='text-lg font-bold'>Member Since</h1>
          <div className='flex items-center text-gray-600'>
            <ImLocation2 size={17} />
            <h2 className='font-medium ml-1'>Mar 2022</h2>
          </div>
        </div>
        <div className='w-48 h-16  border-purple-700 mx-4 my-2 pl-6 py-1'>
          <h1 className=' text-lg font-bold'>Orders</h1>
          <div className='flex items-center text-gray-600'>
            <AiOutlineFileDone size={17} />
            <h2 className='font-medium ml-1'>0 completed</h2>
          </div>
        </div>
        <div className='w-48 h-16  border-purple-700 mx-4 my-2 pl-6 py-1'>
          <h1 className=' text-lg font-bold'>Avg Response Time </h1>
          <div className='flex items-center text-gray-600'>
            <ImLocation2 size={17} />
            <h2 className='font-medium ml-1'>1 hour</h2>
          </div>
        </div>
        <div className='w-48 h-16  border-purple-700 mx-4 my-2 pl-6 py-1'>
          <h1 className=' text-lg font-bold'>Languages</h1>
          <div className='flex items-center text-gray-600'>
            <ImLocation2 size={17} />
            <h2 className='font-medium ml-1'>English,Hindi</h2>
          </div>
        </div>
      </div>
      <div className=' bg-white col-span-5 border-t border-purple-700 mt-2'>
        <h1 className='text-xl font-bold my-2 mx-4'>Description</h1>
        <p className=' text-gray-500 px-4 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit itaque nostrum veniam
          sit! Quod, fugit porro, incidunt laborum ipsam placeat necessitatibus autem, non nam laboriosam
          itaque facere deleniti sapiente maiores! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Saepe tempore rem consequuntur necessitatibus tempora sunt tenetur iusto, labore totam
          cum eius, dignissimos quaerat dolorum. Perferendis dolore aspernatur alias, minus earum unde
          veniam ipsum quisquam hic impedit tempore quas amet ipsam quos eius, voluptas sed magni, rem
          suscipit ab vero iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad iusto
          rem adipisci cumque? Voluptas atque explicabo nihil error nemo. Lorem ipsum dolor sit amet con
          sectetur adipisicing elit. Adipisci non optio eos atque ad! Reiciendis odio animi porro
          repellendus neque.</p>
      </div>
    </div>
  )
}

export default Profile
