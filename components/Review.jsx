"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import axios from 'axios'

const Review = ({ sellerId, userId, review }) => {
  console.log("review page", review)
  const clientReview = review.find(e=>e.clientId._id === userId)
  const [review1, setReview] = useState({
    clientId: userId,
    sellerId: sellerId._id,
    rating: "",
    comment: ""
  })

  const handleSubmit = async () => {
    console.log(review1)
    const res = axios.post("http://localhost:3000/api/review", review1)
    console.log(res)

  }

  return (
    <div className='w-full h-auto m-2 bg-white ' >
      <h1 className=' font-bold text-2xl text-purple-700 py-2 px-5'>Reviews</h1>
      <div className='w-full h-auto p-2'>
        <div className='flex justify-between items-center mx-4'>
          <h1 className=' text-black text-xl font-medium '>Rating</h1>
          <h1 className=' text-yellow-400 text-xl font-bold flex items-center'><AiFillStar size={22} /> 5.0 <span className=' text-sm text-gray-600 font-medium'> (40)</span></h1>
        </div>
        {/* rating */}
        <div id='rating' className='mx-3'>
          <div className=' my-2 flex items-center justify-between'>
            <div className='flex text-yellow-500'>
              <AiFillStar size={17} /><AiFillStar size={17} /><AiFillStar size={17} /><AiFillStar size={17} /><AiFillStar size={17} />
            </div>
            <div className=' w-40 mx-1'>
              <div className='w-[160px] h-[10px] bg-gray-300 rounded-full '>
                <div className='w-[130px] h-[10px] bg-yellow-500 rounded-full relative top-0'></div>
              </div>
            </div>
            <div className=' w-8 '>
              <h1 className=' text-start font-medium ml-1 text-gray-700'>700</h1>
            </div>
          </div>

          <div className=' my-2 flex items-center justify-between'>
            <div className='flex text-yellow-500'>
              <AiFillStar size={17} /><AiFillStar size={17} /><AiFillStar size={17} /><AiFillStar size={17} /><AiOutlineStar size={17} />
            </div>
            <div className=' w-40 mx-1'>
              <div className='w-[160px] h-[10px] bg-gray-300 rounded-full '>
                <div className='w-[130px] h-[10px] bg-yellow-500 rounded-full relative top-0'></div>
              </div>

            </div>
            <div className=' w-8 '>
              <h1 className=' font-medium ml-1 text-gray-700'>400</h1>
            </div>
          </div>

          <div className=' my-2 flex items-center justify-between'>
            <div className='flex text-yellow-500'>
              <AiFillStar size={17} /><AiFillStar size={17} /><AiFillStar size={17} /><AiOutlineStar size={17} /><AiOutlineStar size={17} />
            </div>
            <div className=' w-40 mx-1'>
              <div className='w-[160px] h-[10px] bg-gray-300 rounded-full'>
                <div className='w-[130px] h-[10px] bg-yellow-500 rounded-full'></div>
              </div>

            </div>
            <div className=' w-8 '>
              <h1 className=' text-start font-medium ml-1 text-gray-700'>70</h1>
            </div>
          </div>

          <div className=' my-2 flex items-center justify-between'>
            <div className='flex text-yellow-500'>
              <AiFillStar size={17} /><AiFillStar size={17} /><AiOutlineStar size={17} /><AiOutlineStar size={17} /><AiOutlineStar size={17} />
            </div>
            <div className=' w-40 mx-1'>
              <div className='w-[160px] h-[10px] bg-gray-300 rounded-full '>
                <div className='w-[130px] h-[10px] bg-yellow-500 rounded-full relative top-0'></div>
              </div>
            </div>
            <div className=' w-8 '>
              <h1 className=' text-start font-medium ml-1 text-gray-700'>7</h1>
            </div>
          </div>

          <div className=' my-2 flex items-center justify-between'>
            <div className='flex text-yellow-500'>
              <AiFillStar size={17} /><AiOutlineStar size={17} /><AiOutlineStar size={17} /><AiOutlineStar size={17} /><AiOutlineStar size={17} />
            </div>
            <div className=' w-40 mx-1'>
              <div className='w-[160px] h-[10px] bg-gray-300 rounded-full '>
                <div className='w-[130px] h-[10px] bg-yellow-500 rounded-full relative top-0'></div>
              </div>
            </div>
            <div className=' w-8 '>
              <h1 className=' text-start font-medium ml-1 text-gray-700'>0</h1>
            </div>
          </div>
        </div>
      </div>
      {/* add review */}
      <div className='mx-2 my-1 border-b-2 border-purple-700'>
        {/* <button className=' text-[15px] font-bold py-1 px-5 rounded-md bg-purple-700 text-white m-2'>Add a Review</button> */}
        {!clientReview ? <div className='mx-2 bg-white pl-4'>
          <h1 className=' font-bold text-xl'>Rate your <span className=' font-extrabold text-purple-700'>Seller</span></h1>
          <div className=' flex my-1 text-yellow-500'>
            <AiOutlineStar size={25} /><AiOutlineStar size={25} /><AiOutlineStar size={25} /><AiOutlineStar size={25} /><AiOutlineStar size={25} />
          </div>
          <input type="text" onChange={e => setReview({ ...review1, rating: e.target.value })} className=' outline-none border-2 border-purple-300 rounded-md placeholder:pl-2' id="" />
          <h1 className=' font-bold text-xl my-2'>Review your <span className=' font-extrabold text-purple-700'>Seller</span></h1>
          <textarea onChange={e => setReview({ ...review1, comment: e.target.value })} id="" cols="35" rows="5" className=' outline-none border-2 border-purple-300 rounded-md placeholder:pl-2' placeholder='Write review' /><br />
          <button onClick={handleSubmit} className=' text-[17px] font-medium py-1 px-[62px] my-2 rounded-md bg-purple-700 text-white shadow-md shadow-gray-400 flex items-center'>Send the Review
            <AiFillStar size={20} className='ml-2 pt-1' /></button>
        </div> : 
        <button className=' text-[15px] font-bold py-1 px-5 hidden rounded-md bg-purple-700 text-white m-2'>update Review</button>}
      </div>
      {/* reviews */}
      {review.map(rev =>
        <div className=' bg-purple-50 shadow shadow-purple-300 mx-2 my-4' >
          <div>
            <div className='w-full flex items-center border-b  border-purple-700 py-3'>
              <img src={rev.clientId.image} alt='image' className='ml-3 w-12 h-12 rounded-full border border-purple-700' />
              <h1 className=' text-[16px] font-bold ml-4'>{rev.clientId.name}</h1>
            </div>
            <p className='p-4 text-sm text-gray-600'>{rev.comment}</p>
          </div>
        </div>
      )}
      {/* <div className=' bg-purple-50 mx-2 shadow shadow-purple-300' >
        <div>
          <div className='w-full flex items-center border-b  border-purple-700 py-3'>
            <Image src={'/image/py.png'} width={45} height={20} className='ml-3 rounded-full border border-purple-700' />
            <h1 className=' text-[16px] font-bold ml-2'>Mohammed yusuf</h1>
          </div>
          <p className='p-4 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eius, delectus Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis
            Temporibus quidem ratione, labore suscipit atque, eligendi erferendis.</p>
        </div>
      </div> */}
    </div>
  )
}

export default Review
