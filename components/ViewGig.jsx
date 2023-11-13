"use client"
import React, { useRef, useState } from 'react'
import Card, { SliderCard } from './Card'
import { AboutSeller } from './Profile'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaCheck } from 'react-icons/fa'
import Review from './Review';
import Modals from './Modals'


const ViewGig = ({ data, userId, review }) => {
    console.log("view page", userId, data)
    //console.log(" pppage",review)
    const [plan, setPlan] = useState('basic')
    const [tog, setTog] = useState(false)
    const sellerId = data.sellerId
    // const {image1,image2,image3} = data.data.images
    const { _id, cardname, description, images } = data
    const { basic, standard, premium } = data.plans

    const [order, setOrder] = useState({
        freelancer: sellerId,
        client: userId,
        cardname: cardname,
        plan: "",
        price: "",
        delivery: ""
    })

    const handleChange = () => {
        const plans = data.plans
        const pname = Object.entries(plans).find((x) => x[0] === plan)
        //     console.log(pname[1].price)
        order.plan = pname[0]
        order.price = pname[1].price
        order.delivery = pname[1].delivery
        //console.log(order)
        setTog(true)

    }

    return (
        <div className=' w-full'>
            {tog === true && <><Modals order={order} /></>}
            <div key={_id} className=' mb-5 grid grid-cols-7 lg:gap-2 w-full h-auto bg-slate-100'>
                <div className=' col-span-7 lg:col-span-5 bg-white h-auto'>
                    <h1 className='ml-6 md:ml-20 text-lg font-medium text-black capitalize my-4'>{cardname}</h1>
                    <div className=' my-2 w-80 h-44  md:w-[650px] md:h-80 border border-purple-700 rounded-md overflow-hidden mx-auto'>
                        <img src={images} alt="image1" className='w-80 h-44 md:w-[650px] md:h-80' />
                    </div>
                    <div className='ml-6 md:ml-20 my-4'>
                        <h1 className=' font-bold text-lg text-purple-800 my-1'>Description</h1>
                        <p className=' text-gray-700 text-sm pr-4 md:pr-20'>{description}</p>
                    </div>
                    {/* plans */}
                    <div className=' col-span-7 bg-white mx-14 md:mx-4 my-8 md:flex'>
                        <div className='my-5 w-64 md:mx-3 bg-white border-[1.5px] border-purple-600 rounded-md pl-2 py-2'>
                            <div className=' flex justify-between items-center px-5 mt-3'>
                                <h1 className=' font-bold text-[22px] text-purple-700 '>Basic Plan</h1>
                                <div>
                                    <input className='' type="radio" onClick={() => setPlan('basic')} name="plan" value='basic' id="" />
                                </div>
                            </div>
                            <h1 className='font-medium ml-5 text-black text-[16px] capitalize'>{basic.planname}</h1>
                            <ol className=' px-5 text-gray-500'>
                                <p className='text-sm'>{`${basic.description.length <= 54 ? basic.description : `${basic.description.substring(0, 54)}...`}`}</p>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Source Code</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Responsive</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Debugging</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Deployment</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Unit Testing</p></li>
                            </ol>
                            <p className='ml-5 my-1 font-bold text-[16px] text-purple-700'>Delivery <span>{basic.delivery} day</span></p>
                            <div className=' flex justify-between items-center mx-5'>
                                <p className=' font-medium text-[18px]'>Starts</p><span className='text-[24px] font-bold '>₹{basic.price}</span>
                            </div>
                        </div>
                        {/* standard */}
                        <div className='my-5 w-64 md:mx-3 bg-white border-[1.5px] border-purple-600 rounded-md pl-2 py-2'>
                            <div className=' flex justify-between items-center px-5 mt-3'>
                                <h1 className=' font-bold text-[22px] text-purple-700 '>Standard Plan</h1>
                                <div>
                                    <input className='' type="radio" onClick={() => setPlan('standard')} name="plan" value='standard' id="" />
                                </div>
                            </div>
                            <h1 className='font-medium ml-5 text-black text-[16px] capitalize'>{standard.planname}</h1>
                            <ol className=' px-5 text-gray-500'>
                                <p className='text-sm'>{`${standard.description.length <= 54 ? standard.description : `${standard.description.substring(0, 54)}...`}`}</p>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Source Code</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Responsive</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Debugging</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Deployment</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Unit Testing</p></li>
                            </ol>
                            <p className='ml-5 my-1 font-bold text-[16px] text-purple-700'>Delivery <span>{standard.delivery} day</span></p>
                            <div className=' flex justify-between items-center mx-5'>
                                <p className=' font-medium text-[18px]'>Starts</p><span className='text-[24px] font-bold '>₹{standard.price}</span>
                            </div>
                        </div>
                        {/* premium */}
                        <div className='my-5 w-64 md:mx-3 bg-white border-[1.5px] border-purple-600 rounded-md pl-2 py-2'>
                            <div className=' flex justify-between items-center px-5 mt-3'>
                                <h1 className=' font-bold text-[22px] text-purple-700 '>Premium Plan</h1>
                                <div>
                                    <input className='' type="radio" onClick={() => setPlan('premium')} name="plan" value='premium' id="" />
                                </div>
                            </div>
                            <h1 className='font-medium ml-5 text-black text-[16px] capitalize'>{premium.planname}</h1>
                            <ol className=' px-5 text-gray-500'>
                                <p className='text-sm'>{`${premium.description.length <= 54 ? premium.description : `${premium.description.substring(0, 54)}...`}`}</p>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Source Code</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Responsive</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Debugging</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Deployment</p></li>
                                <li className=' flex items-center text-[15px] font-medium text-green-500 my-2 '><FaCheck /><p className='ml-3 text-black -mt-1'>Unit Testing</p></li>
                            </ol>
                            <p className='ml-5 my-1 font-bold text-[16px] text-purple-700'>Delivery <span>{premium.delivery} day</span></p>
                            <div className=' flex justify-between items-center mx-5'>
                                <p className=' font-medium text-[18px]'>Starts</p><span className='text-[24px] font-bold '>₹{premium.price}</span>
                            </div>
                        </div>

                    </div>
                    <div className=' flex justify-end my-2 items-center'>
                        <button onClick={handleChange} className='py-1 px-6 mr-10 text-sm font-bold bg-purple-700 text-white rounded-sm shadow-md shadow-gray-400'>Continue</button>
                    </div>
                    <h1 className=' font-bold text-xl ml-8 text-purple-700'>About Seller</h1>
                    <AboutSeller data={sellerId} />
                    
                </div>
                <div className='pl-1 col-span-7 lg:col-span-2 h-auto scrollbar overflow-hidden overflow-x-hidden overflow-y-scroll' >
                    <Review sellerId={sellerId} userId={userId} review={review}/>
                </div>
                <div className=' col-span-7 py-2 bg-white'>
                    <h1 className=' text-lg font-bold text-purple-700 mx-12'>Similar Service</h1>
                    <div className='flex items-center'>
                        <div className='flex items-center h-52'>< GrFormPrevious size={30} /></div>
                        <div className=' card flex items-certer grow scrollbar-none overflow-x-scroll h-52'><SliderCard /></div>
                        <div className='flex items-center h-52'>< GrFormNext size={30} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewGig
