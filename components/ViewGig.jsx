"use client"
import React, { useRef, useState } from 'react'
import Card, { SliderCard } from './Card'
import { AboutSeller } from './Profile'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import Review from './Review';
import Modals from './Modals'


const ViewGig = ({data,userId,review}) => {
    console.log("view page",userId,data)
    //console.log(" pppage",review)
    const [plan,setPlan] =useState('basic')
    const [tog,setTog] = useState(false)
    const sellerId = data.sellerId
    // const {image1,image2,image3} = data.data.images
    const { _id, cardname, description, images } = data
    const { basic, standard, premium } = data.plans

    const [order,setOrder] = useState({
        freelancer:sellerId,
        client:userId,
        cardname:cardname,
        plan:"",
        price:"",
        delivery:""
        })

    const handleChange = () => {
        const plans = data.plans
       const pname = Object.entries(plans).find((x)=>x[0] === plan)
   //     console.log(pname[1].price)
        order.plan = pname[0]
        order.price = pname[1].price
        order.delivery = pname[1].delivery
        console.log(order)
        setTog(true)
        
    }
    
    return (
        <div className=' w-full'>
             {tog === true && <><Modals order={order}/></>}
            <div key={_id} className='mx-4 my-5 grid grid-cols-7 gap-2 w-full h-auto shadow-md shadow-purple-200 bg-gray-100'>
                <div className=' col-span-5 md:col-span-7 bg-white h-auto'>
                    <h1 className=' text-3xl font-bold text-purple-900 my-4 mx-20'>{cardname}</h1>
                    <div className='mx-20 my-2 w-[710px] h-[300px] border border-purple-700 rounded-md'>
                        <img src={images} alt="image1" className='w-[710px] h-[300px]' />
                    </div>
                    <div className='mx-20 my-4'>
                        <h1 className=' font-bold text-lg text-purple-800 my-1'>Description</h1>
                        <p className=' font-medium text-gray-500'>{description}</p>
                    </div>
                    <div className='grid grid-cols-3 gap-9 bg-white mx-9 my-8 '>
                        <div className=' bg-white shadow-md shadow-purple-300 rounded-md border-2 border-purple-400 pl-2 py-2'>
                        <div className=' flex justify-between items-center px-6'>
                                <h1 className=' font-bold text-[22px] text-purple-700 my-2 '>Basic Plan</h1>
                                <div>
                                    <input type="radio" onClick={()=>setPlan('basic')} name="plan" value='basic' id="" />
                                </div>
                            </div>
                            <h1 className='font-medium ml-8 text-gray-500'>{basic.planname}</h1>
                            <ol className=' font-medium ml-8 text-gray-500'>
                                {basic.description}
                            </ol>
                            <p className='ml-8 my-1 font-bold text-[17px] text-purple-700'>Delivery <span>{basic.delivery} day</span></p>
                            <div className=' flex justify-between items-center mx-8'>
                                <p className=' font-medium text-[22px]'>Starts</p><span className='text-[27px] font-medium '>₹{basic.price}</span>
                            </div>
                        </div>

                        <div className=' bg-white shadow-md shadow-purple-300 rounded-md border border-purple-400 pl-2 py-2'>
                        <div className=' flex justify-between items-center px-6'>
                                <h1 className=' font-bold text-[22px] text-purple-700 my-2 '>Standard Plan</h1>
                                <div>
                                    <input type="radio" onClick={()=>setPlan("standard")} name="plan" value='standard' id="" />
                                </div>
                            </div>
                            <h1 className='font-medium ml-8 text-gray-500'>{standard.planname}</h1>
                            <ol className=' font-medium ml-8 text-gray-500'>
                               {standard.description}
                            </ol>
                            <p className='ml-8 my-1 font-bold text-[17px] text-purple-700'>Delivery <span>{standard.delivery} day</span></p>
                            <div className=' flex justify-between items-center mx-8'>
                                <p className=' font-medium text-[22px]'>Starts</p><span className='text-[27px] font-medium '>₹{standard.price}</span>
                            </div>
                        </div>

                        <div className=' bg-white shadow-md shadow-purple-300 rounded-md border border-purple-400 pl-2 py-2'>
                            <div className=' flex justify-between items-center px-6'>
                                <h1 className=' font-bold text-[22px] text-purple-700 my-2 '>Premium Plan</h1>
                                <div>
                                    <input type="radio" onClick={()=>setPlan('premium')} name="plan" value='premium' id="" />
                                </div>
                            </div>
                        <h1 className='font-medium ml-8 text-gray-500'>{premium.planname}</h1>
                            <ol className=' font-medium ml-8 text-gray-500'>
                                {premium.description}
                            </ol>
                            <p className='ml-8 my-1 font-bold text-[17px] text-purple-700'>Delivery <span>{premium.delivery}day</span></p>
                            <div className=' flex justify-between items-center mx-8'>
                                <p className=' font-medium text-[22px]'>Starts</p><span className='text-[27px] font-medium '>₹{premium.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-end my-2 items-center'>
                        <button onClick={handleChange} className='py-1 px-6 mr-10 text-sm font-bold bg-purple-700 text-white rounded-sm shadow-md shadow-gray-400'>Continue</button>
                    </div>
                    <h1 className=' font-bold text-2xl ml-8 text-purple-700'>About Seller</h1>
                    <AboutSeller data={sellerId} />
                </div>
                <div className='pl-1 col-span-2 h-[920px] bg-white scrollbar overflow-hidden overflow-x-hidden overflow-y-scroll' >
                    <Review sellerId={sellerId} userId={userId} review={review}/>
                </div>
                {/* <div className=' col-span-7 py-2 bg-white'>
                    <h1 className=' text-lg font-bold text-purple-700 mx-12'>Similar Service</h1>
                    <div className='flex items-center'>
                        <div className='flex items-center h-52'>< GrFormPrevious size={30} /></div>
                        <div className=' card flex items-certer grow scrollbar-none overflow-x-scroll h-52'><SliderCard /></div>
                        <div className='flex items-center h-52'>< GrFormNext size={30} /></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ViewGig
