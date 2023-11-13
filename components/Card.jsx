"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiFillStar, AiFillDelete } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import {UpdateGig} from './NewGig'
const Card = (data) => {
  const router = useRouter()
  /** flex wrap */
  // console.log(data.data.sellerId)
  const { _id, cardname, images } = data.data
  const { basic } = data.data.plans
  const { name, image } = data.data.sellerId
  // console.log(data.data.sellerId.name)
  console.log(cardname.length)
  return (
    // <div className=' flex flex-wrap w-[1250px] h-auto'>
   
    <div key={_id} onClick={() => router.push(`/buyer/${_id}`)}
     className='container rounded-sm w-72 h-56 border border-purple-200 bg-white mx-2 mt-4 overflow-hidden'>
      {/* console.log(card) */}
      <img className='w-72 h-[137px] ' alt='image' src={images} width={285} height={160} />
      <h1 className='m-2 text-sm font-medium'>{`${cardname.length <= 40 ? cardname :`${cardname.substring(0,40)}...`}`}</h1>
      <div className='flex justify-between items-center mx-3'>
        <div className=' flex items-center'>
          <img className='w-9 h-9 border border-purple-500 rounded-full ml-1' src={image} width={50} height={40} />
          <div className='ml-2'>
          <h6 className='text-[13px] font-bold text-gray-600'>{name}</h6>
          <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={11} /><AiFillStar size={11} /><AiFillStar size={11} /><AiFillStar size={11} /><AiFillStar size={11} /></div>
        </div>
        </div>
        <div className='flex items-center'>
          <small className='text-[17px] mt-1 font-medium text-gray-700'>start</small>
          <span className='text-xl ml-1 font-bold text-gray-700 flex'>₹{basic.price}</span>
        </div>
      </div>
    </div>

  )
}
export const SliderCard = () => {
  /** flex wrap */
  return (
    <div className=' flex flex-row w-auto h-auto'>
      <div className='container rounded-sm w-56 h-44 cursor-pointer bg-white ml-1 mt-2 overflow-hidden hover:bg-gray-50 shadow-sm shadow-purple-500'>
        <Image className='w-72 h-[105px] ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='my-1 mx-2 text-[13px] font-medium text-purple-700 hover:text-black'>I will do web developement</h1>
        <div className='flex items-center'>
          <div className='flex items-center mx-2 my-1'>
            <Image className='w-8 h-8 rounded-full' src={"/image/bg2.jpg"} width={60} height={40} />
            <div className='ml-2 w-28'>
              <h6 className='text-[10px] font-bold text-gray-600'>James Bond</h6>
              <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
            </div>
            <small className='text-[13px] font-medium mt-1 text-gray-700'>Starts</small>
            <span className='text-[18px] font-bold text-gray-700 ml-1'>₹500</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const UserCard = ({ card }) => {
  console.log("usercard",card)

  const { _id, cardname, images } = card
  const { basic } = card.plans
  const { name, image } = card.sellerId

  const [update, setUpdate] = useState(false)
  const [toggle, setToggle] = useState(false)
  const deleteCard = (id) => {
    const res = axios.delete(`http://localhost:3000/api/createcard/${id}`)
    console.log(res)
    alert(res.data)
  }
  return (
    // <div className=' flex flex-wrap w-[1250px] h-auto'>
    <>
      {update === false ? <><div key={_id} className='container md:m-2 rounded-sm w-72 h-56 border bg-white mt-3 relative'>
        <img className='w-72 h-[137px] ' src={images} width={285} height={160} />
        <h1 className='m-2 text-sm font-medium'>{`${cardname.length <= 40 ? cardname :`${cardname.substring(0,40)}...`}`}</h1>
        <div className='flex items-center mx-3'>
          <img className='w-9 h-9 border border-purple-500 rounded-full ml-1' src={image} width={50} height={40} />
          <div className='ml-2  w-32'>
            <h6 className='text-xs font-bold capitalize text-gray-600'>{name}</h6>
            <div className='flex -ml-[1px] text-yellow-500'><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /></div>
          </div>
          <div className='flex items-center'>
            <small className='text-sm font-medium mt-1 text-gray-700'>Starts</small>
            <span className='text-xl ml-2 mr-4 font-bold text-gray-700 flex'>₹{basic.price}</span>
          </div>
          < BsThreeDotsVertical onClick={() => setToggle(true)} size={30} className=' hover:bg-gray-100 hover:shadow-sm hover:shadow-gray-400 rounded-full' />
        </div>
        {toggle === true && <div className=' w-28 h-24 py-2 bg-white absolute rounded-md top-28 left-40 shadow-lg shadow-gray-300'>
          <div className='flex items-center pl-5 pt-1 cursor-pointer hover:bg-gray-200'
            onClick={() => setUpdate(true)}><MdEdit /><h1 className=' text-sm ml-2 '>Edit</h1></div>
          <div className='flex items-center pl-5 pt-1 cursor-pointer hover:bg-gray-200'
            onClick={() => { deleteCard(_id) }}><AiFillDelete /><h1 className=' text-sm ml-2 '>Delete</h1></div>
          <div onClick={() => setToggle(false)} className='flex items-center pl-5 pt-1 cursor-pointer hover:bg-gray-200'>back</div>
        </div>}

      </div></> : <> <div className=' absolute -mt-5 -ml-5'>
        <UpdateGig card={card} />
        <button className=' absolute top-10 z-20 left-[80px] text-purple-700 font-bold ' onClick={() => setUpdate(false)}>back</button>
      </div></>
      }
    </>


  )
}
export default Card
