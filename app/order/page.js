import Orders from '@/components/Orders'
import Review from '@/components/Review'
import ViewGig from '@/components/ViewGig'
import React from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

const page = () => {
  return (
    <div className='pt-20'>
      <ViewGig/>
      {/* <div className='mx-2 bg-white pl-4'>
        <h1 className=' font-bold text-xl'>Rate your <span className=' font-extrabold text-purple-700'>Seller</span></h1>
        <div className=' flex my-1 text-yellow-500'>
          <AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25}/>
        </div>
        <h1 className=' font-bold text-xl my-2'>Review your <span className=' font-extrabold text-purple-700'>Seller</span></h1>
        <textarea name=""  id="" cols="35" rows="5" className=' outline-none border-2 border-purple-300 rounded-md placeholder:pl-2' placeholder='Write review'/><br />
        <button className=' text-[17px] font-medium py-1 px-[62px] my-2 rounded-md bg-purple-700 text-white shadow-md shadow-gray-400 flex items-center'>Send the Review 
        <AiFillStar size={20} className='ml-2 pt-1'/></button>
      </div> */}
      
    </div>
  )
}

export default page
