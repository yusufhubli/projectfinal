"use client"
import React, { useState } from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

const Rating = () => {
    const [state,setState] = useState(3)
  return (
    <div>
      {state == 1 && <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /></div> }
      {state == 2 && <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiOutlineStar size={20} /></div> }
      {state == 3 && <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiOutlineStar size={20} /><AiOutlineStar size={20} /></div> }
      {state == 4 && <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={20} /><AiFillStar size={20} /><AiOutlineStar size={20} /><AiOutlineStar size={20} /><AiOutlineStar size={20} /></div> }
      {state == 5 && <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={20} /><AiOutlineStar size={20} /><AiOutlineStar size={20} /><AiOutlineStar size={20} /><AiOutlineStar size={20} /></div> }
    </div>
  )
}

export default Rating
