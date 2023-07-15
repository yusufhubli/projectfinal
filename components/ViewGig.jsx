'use client';
import React from 'react'
import Card, { SliderCard } from './Card'
import { AboutSeller } from './Profile'
import { GrFormPrevious, GrFormNext} from 'react-icons/gr'
import Review from './Review';

const ViewGig = (data) => {
    console.log(data.data.plans.basic.delivery)
   const {_id,cardname,description} = data.data
   const {basic,standard,premium} = data.data.plans
    return (
        <div className=' w-full'>
            <div className='mx-4 my-5 grid grid-cols-7 gap-2 w-[1250px] h-auto shadow-md shadow-purple-200 bg-gray-100'>
                <div className=' col-span-5 bg-white h-auto'>
                    <h1 className=' text-3xl font-bold text-purple-900 my-4 mx-20'>{cardname}</h1>
                    <div className='mx-20 my-2 w-[710px] h-[300px] bg-purple-500 rounded-md'>
                    </div>
                    <div className='mx-20 my-4'>
                        <h1 className=' font-bold text-lg text-purple-800 my-1'>Description</h1>
                        <p className=' font-medium text-gray-500'>{description}</p>
                    </div>
                    <div className='grid grid-cols-3 gap-9 bg-white mx-9 my-10 '>
                        <div className=' bg-white shadow-md shadow-purple-300 rounded-md border-2 border-purple-400 pl-2 py-2'>
                            <h1 className=' font-bold text-[22px] text-purple-700 my-2 ml-8'>Basic Plan</h1>
                            <ol className=' font-medium ml-8 text-gray-500'>
                            <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li> 
                            
                            </ol>
                            <p className='ml-8 my-1 font-bold text-[17px] text-purple-700'>Revisions <span>{basic.revision}</span></p>
                            <div className=' flex justify-between items-center mx-8'>
                                <p className=' font-medium text-[22px]'>Starts</p><span className='text-[27px] font-medium '>₹{basic.price}</span>
                            </div>
                        </div>

                        <div className=' bg-white shadow-md shadow-purple-300 rounded-md border border-purple-400 pl-2 py-2'>
                            <h1 className=' font-bold text-[22px] text-purple-700 my-2 ml-8'>Standard Plan</h1>
                            <ol className=' font-medium ml-8 text-gray-500'>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                            </ol>
                            <p className='ml-8 my-1 font-bold text-[17px] text-purple-700'>Revisions <span>{standard.revision}</span></p>
                            <div className=' flex justify-between items-center mx-8'>
                                <p className=' font-medium text-[22px]'>Starts</p><span className='text-[27px] font-medium '>₹{standard.price}</span>
                            </div>
                        </div>

                        <div className=' bg-white shadow-md shadow-purple-300 rounded-md border border-purple-400 pl-2 py-2'>
                            <h1 className=' font-bold text-[22px] text-purple-700 my-2 ml-8'>Premium Plan</h1>
                            <ol className=' font-medium ml-8 text-gray-500'>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                                <li>web development</li>
                            </ol>
                            <p className='ml-8 my-1 font-bold text-[17px] text-purple-700'>Revisions <span>{premium.revision}</span></p>
                            <div className=' flex justify-between items-center mx-8'>
                                <p className=' font-medium text-[22px]'>Starts</p><span className='text-[27px] font-medium '>₹{premium.price}</span>
                            </div>

                        </div>
                    </div>
                    <h1 className=' font-bold text-2xl ml-8 text-purple-700'>About Seller</h1>
                    <AboutSeller/>
                </div>
                <div className='pl-1 col-span-2 h-[920px] bg-white scrollbar overflow-hidden overflow-x-hidden overflow-y-scroll' >
                    <Review />
                </div>
                <div className=' col-span-7 py-2 bg-white'>
                    <h1 className=' text-lg font-bold text-purple-700 mx-12'>Similar Service</h1>
                    <div className='flex items-center'>
                    <div className='flex items-center h-52'>< GrFormPrevious size={30} /></div>
                    <div className=' card flex items-certer grow scrollbar-none overflow-x-scroll h-52'><SliderCard/></div>
                    <div className='flex items-center h-52'>< GrFormNext size={30}/></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ViewGig
