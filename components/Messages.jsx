import React from 'react'
import Image from 'next/image'
import {BsThreeDots} from 'react-icons/bs'
import { GrAchievement, GrAttachment } from 'react-icons/gr'
import { AiOutlineSend } from 'react-icons/ai'
const Messages = () => {
    return (
        <div className='w-full h-[500px] grid grid-cols-8 gap-1 bg-purple-200 px-20'>
            <div className=' bg-white col-span-2'>
                <h1 className=' font-medium text-lg text-purple-700 py-2 px-5'>Conversations</h1>
                <div className=' w-64 h-20 flex items-center bg-purple-50 shadow-sm shadow-purple-500 my-3 mx-3'>
                    <Image className=' rounded-full w-12 h-12 ml-2' src={"/image/btn.jpg"} alt='image' width={40} height={40} />
                    <div className='ml-2'>
                        <h1 className=' m-0 p-0 font-bold text-[15px]'>Mohammed Yusuf</h1>
                        <small>now</small>
                    </div>
                </div>
                <div className=' w-64 h-20 flex items-center bg-purple-50 shadow-sm shadow-purple-500 my-3 mx-3'>
                    <Image className=' rounded-full w-12 h-12 ml-2' src={"/image/btn.jpg"} alt='image' width={40} height={40} />
                    <div className='ml-2'>
                        <h1 className=' m-0 p-0 font-bold text-[15px]'>Mohammed Yusuf</h1>
                        <small>now</small>
                    </div>
                </div>
                <div className=' w-64 h-20 flex items-center bg-purple-50 shadow-sm shadow-purple-500 my-3 mx-3'>
                    <Image className=' rounded-full w-12 h-12 ml-2' src={"/image/btn.jpg"} alt='image' width={40} height={40} />
                    <div className='ml-2'>
                        <h1 className=' m-0 p-0 font-bold text-[15px]'>Mohammed Yusuf</h1>
                        <small>now</small>
                    </div>
                </div>
            </div>
            <div className=' bg-white col-span-5'>
                <div className='w-[665px] h-[450px] m-4 border-2 rounded border-purple-500'>
                    <div className=' flex items-center justify-between px-5 w-full h-16 border-b-2 border-purple-500'>
                       <Image className=' rounded-full w-9 h-9' src={`/image/btn.jpg`} alt='image' width={40} height={40}/>
                       <h1 className=' font-bold '>Mohammed Yusuf</h1>
                       <BsThreeDots size={30}/>
                    </div>
                    <div className=' bg-purple-50 h-80 w-full'></div>
                    <div className=' flex items-center w-full h-16 border-t-2 border-purple-500'>
                       <GrAttachment size={20} className=' ml-4'/>
                       <input type="text" className=' text-black outline-none px-2 py-1 ml-4 w-96 border-2 rounded border-purple-700' placeholder='Message....' />
                       <AiOutlineSend size={20} className=' text-white bg-purple-700 ml-2 w-9 h-9 p-1 rounded'/>
                       <button className='ml-6 py-2 font-bold px-3 rounded-md text-white bg-purple-600 hover:bg-purple-700'>Create an Offer</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Messages
