'use client'
import React, { useState } from 'react'
import { IoWalletSharp } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'
import { AiFillCreditCard } from 'react-icons/ai'
import { IoIosCreate } from 'react-icons/io'
import NewGig from './NewGig'
import Card, { UserCard } from './Card'
//import { getCard } from '@/app/buyer/page'
//import { getUserId } from '@/helpers/getuserId'
//import { SiVelog } from 'react-icons/si'
import { Change3 } from './Change'
import { SellerOrders } from './Orders'
import Profile from './Profile'

const ProfileNav =({userId,user,card,orders,pay}) => {
    //const card = await getCard()
   // const userId = await getUserId()
    const usercard =card.filter((x)=>x.sellerId._id === userId)
    const order = orders.filter(y=>y.freelancer._id === userId)
    //console.log(orders)
    const [change,setChange] = useState('1')
    
    console.log(change)
    return (
        <div className='w-full h-auto'>
            <div className='flex item-center justify-around h-12 md:h-14  my-2 px-3 border border-purple-300 bg-white'>
                <div className='flex items-center text-purple-700'>
                    <AiFillCreditCard size={20} className=' hidden md:block' />
                    <button onClick={()=>setChange('1')} className=' ml-1 text-[13px] text-xs md:text-sm font-medium md:font-bold '>Profile</button>
                </div>
                <div className='flex items-center text-purple-700'>
                    <AiFillCreditCard size={20} className=' hidden md:block' />
                    <button onClick={()=>setChange('2')} className=' ml-1 text-[13px] text-xs md:text-sm font-medium md:font-bold '>My Gigs</button>
                </div>
                <div className='flex items-center text-purple-700'>
                    <MdWork size={20} className=' hidden md:block' />
                    <button onClick={()=>setChange('3')} className='ml-1 text-[13px] text-xs md:text-sm font-medium md:font-bold text-purple-700'>Orders</button>
                </div>
                <div className='flex items-center text-purple-700'>
                    <IoWalletSharp size={20} className=' hidden md:block' />
                    <button onClick={()=>setChange('4')} className='ml-1 text-[13px] text-xs md:text-sm font-medium md:font-bold text-purple-700'>Wallet</button>
                </div>
                <div className='flex items-center text-purple-700'>
                    <IoIosCreate size={20} className=' hidden md:block' />
                    <button onClick={()=>setChange('5')} className='ml-1 text-[13px] text-xs md:text-sm font-medium md:font-bold text-purple-700'>New Gig</button>
                </div>
            </div>
            <div className='w-full h-auto flex flex-wrap justify-center'>
            {/* {usercard.map((e)=><Card data={e}/>)} */}
            {change == "1" && <Profile user={user}/>}
            {change == "2" && usercard.map(e=><div className=' bg-red-200'><UserCard card={e}/></div>)}
            {change == "3" && order.map(e=><div className='block'><SellerOrders userId={userId} orders={e}/></div>)}
            {change == "4" && <Change3 payment={pay}/>}
            {change == "5" && <NewGig userId={userId}/>}
                </div>
        </div>
    )
}

export default ProfileNav
