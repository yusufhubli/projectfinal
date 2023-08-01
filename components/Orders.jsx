'use client'
import React from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
const Orders = ({orders}) => {
    const {cardname,client,freelancer,createdAt,plan,price,title,description,status} = orders
    const {filename,content} = orders.sendedfile
    console.log(freelancer.name)
   // console.log(orders)
    return (
        <div className=' w-[800px] h-auto p-3 bg-white shadow-md shadow-purple-200 rounded-md m-2'>
            {/** seller info */}
            <div className='flex justify-between items-center mx-6 my-2 border-b-2 border-purple-700 pb-4 px-2 '>
                <div className=' flex items-center w-80'>
                    <Image className=' h-20 w-20 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={60} />
                    <div className='ml-4'>
                        <h6 className='text-xl font-bold text-gray-600'>{freelancer.name}</h6>
                        <div className='flex text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
                        <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (40)</span></h1>
                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-xl text-purple-700'>{plan} plan</h1>
                    <h1 className=' text-4xl font-bold'>₹{price}</h1>
                </div>
            </div>
            {/** more info */}
            <div className='mx-6 my-2 pb-2 flex justify-between border-b-2 border-purple-700'>
                <div className=' ml-5 text-[17px] font-medium text-gray-600'>
                    <h1 className='py-1'>Orderd date</h1>
                    <h1 className='py-1'>Delivery date</h1>
                    <h1 className='py-1'>Orderd Status</h1>
                    <h1 className='py-1'>Order </h1>
                </div>
                <div className='mr-5 text-[17px] font-bold'>
                    <h1 className='py-1'>26-10-2023</h1>
                    <h1 className='py-1'>40-04-2023</h1>
                    <h1 className='py-1'>ACTIVE</h1>
                    <h1 className='py-1'>{filename}</h1>
                    <button className=' px-5 py-1 text-sm my-1 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button>
                </div>
            </div>

            {/** more view */}
            <div className=' flex justify-between items-center mx-8 '>
                <span className=' font-bold text-lg text-black'>3 days left...</span>
                <span className=' text-sm font-bold py-1 px-5 rounded-sm shadow-sm shadow-purple-500  text-green-500'>COMPLETED</span>
                <BsThreeDots size={35} className='  p-1 rounded-full hover:bg-purple-100 ' />
            </div>

        </div>
    )
}

export const SellerOrders = ({userId,orders}) => {
    const {cardname,client,freelancer,createdAt,plan,price,title,description,status} = orders
    const {filename,content} = orders.sendedfile
    console.log(freelancer.name)
   // console.log(orders)
    return (
        <div className=' w-[800px] h-auto p-3 bg-white shadow-md shadow-purple-200 rounded-md m-2'>
            {/** seller info */}
            <div className='flex justify-between items-center mx-6 my-2 border-b-2 border-purple-700 pb-4 px-2 '>
                <div className=' flex items-center w-80'>
                    <Image className=' h-20 w-20 rounded-full ml-1' src={"/image/bg2.jpg"} width={60} height={60} />
                    <div className='ml-4'>
                        <h6 className='text-xl font-bold text-gray-600'>{client.name}</h6>
                        <div className='flex text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
                        <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (40)</span></h1>
                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-xl text-purple-700'>{plan} plan</h1>
                    <h1 className=' text-4xl font-bold'>₹{price}</h1>
                </div>
            </div>
            {/** more info */}
            <div className='mx-6 my-2 pb-2 flex justify-between border-b-2 border-purple-700'>
                <div className=' ml-5 text-[17px] font-medium text-gray-600'>
                    <h1 className='py-1'>Orderd date</h1>
                    <h1 className='py-1'>Delivery date</h1>
                    <h1 className='py-1'>Orderd Status</h1>
                    <h1 className='py-1'>Order </h1>
                </div>
                <div className='mr-5 text-[17px] font-bold'>
                    <h1 className='py-1'>26-10-2023</h1>
                    <h1 className='py-1'>40-04-2023</h1>
                    <h1 className='py-1'>ACTIVE</h1>
                    <h1 className='py-1'>{filename}</h1>
                    <button className=' px-5 py-1 text-sm my-1 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button>
                </div>
            </div>

            {/** more view */}
            <div className=' flex justify-between items-center mx-8 '>
                <span className=' font-bold text-lg text-black'>3 days left...</span>
                <span className=' text-sm font-bold py-1 px-5 rounded-sm shadow-sm shadow-purple-500  text-green-500'>COMPLETED</span>
                <BsThreeDots size={35} className='  p-1 rounded-full hover:bg-purple-100 ' />
            </div>

        </div>
    )
}

export const BuyerNav = () => {
    return (
        <div className=' w-[97%] h-12 py-1 px-4 bg-white mx-5 rounded-md shadow-md shadow-purple-200 flex justify-start '>
            <div className=' w-[40%] ml-[8%] flex justify-between font-bold text-[18px] text-gray-600 '>
                <button>Orders</button>
                <button>Message</button>
                <button>Completed</button>
            </div>
        </div>
    )
}


export default Orders
