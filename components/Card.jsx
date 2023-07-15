"use client"
import React from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const Card = (data) => {
  const router = useRouter()
  /** flex wrap */
console.log(data.data._id)
 const {_id,cardname,description} = data.data
 const {basic} =data.data.plans
  return (
    // <div className=' flex flex-wrap w-[1250px] h-auto'>

      <div key={_id} onClick={()=>router.push(`/buyer/${_id}`)} className='container rounded-md w-72 h-60 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-36 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 font-bold'>{cardname}</h1>
        <div className='flex items-center m-2'>
          <Image className='w-10 h-10 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 mt-1 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <p>stars</p>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700 flex'>{basic.price}</span>
          </div>
        </div>
      </div>

  )
}
export const SliderCard = () => {
  /** flex wrap */
  return (
    <div className=' flex flex-row w-auto h-auto'>

      <div className='container rounded-md w-56 h-48 cursor-pointer bg-white ml-1 mt-2 overflow-hidden hover:bg-gray-50 shadow-sm shadow-purple-500'>
        <Image className='w-72 h-[100px] ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='my-1 mx-4 text-[13px] font-medium text-purple-700 hover:text-black'>I will do web developer for your projects</h1>
        <div className='flex items-center'>
          <div className='flex items-center mx-2 my-0'>
            <Image className='w-7 h-7 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
            <div className='ml-2 w-28'>
              <h6 className='text-[10px] font-bold text-gray-600'>James Bond</h6>
              <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
            </div>
            <small className='text-[13px] font-bold text-gray-700'>Starts</small>
            <span className='text-[18px] font-bold text-gray-700 ml-[1px]'>₹500</span>
          </div>
        </div>
      </div>

      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>
      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>
      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>
      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>
      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>
      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>
      <div className='container rounded-md w-56 h-48 border-2 bg-white ml-4 mt-2 overflow-hidden'>
        <Image className='w-72 h-28 ' src={"/image/bg1.jpg"} width={285} height={160} />
        <h1 className='m-2 text-sm font-bold'>I will do web developer for your projects</h1>
        <div className='flex items-center m-2'>
          <Image className='w-8 h-8 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={40} />
          <div className='ml-2 w-32'>
            <h6 className='text-xs font-bold text-gray-600'>James Bond</h6>
            <div className='flex text-yellow-500'><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /></div>
          </div>
          <div>
            <small className='text-sm font-bold text-gray-700'>Starts</small>
            <span className='text-xl ml-2 font-bold text-gray-700'>500</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
