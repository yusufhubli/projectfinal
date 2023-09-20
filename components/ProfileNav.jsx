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
import Change,{Change2,Change3,Change4} from './Change'
import MyComponent from './test'
import { SellerOrders } from './Orders'

const ProfileNav =({userId,card,orders,pay}) => {
    //const card = await getCard()
   // const userId = await getUserId()
    const usercard =card.filter((x)=>x.sellerId._id === userId)
    const order = orders.filter(y=>y.freelancer._id === userId)
    //console.log(orders)
    const [change,setChange] = useState('1')
    
    console.log(change)
    return (
        <div className='w-[900px] h-auto'>
            <div className='flex item-center h-11  my-2 rounded-md shadow-sm shadow-purple-400 bg-white'>
                <div className='ml-28 flex items-center text-purple-700'>
                    <AiFillCreditCard size={20} />
                    <button onClick={()=>setChange('1')} className=' ml-1 text-sm font-bold '>My Gigs</button>
                </div>
                <div className='ml-28 flex items-center text-purple-700'>
                    <MdWork size={20} />
                    <button onClick={()=>setChange('2')} className='ml-1 text-sm font-bold text-purple-700'>Orders</button>
                </div>
                <div className='ml-28 flex items-center text-purple-700'>
                    <IoWalletSharp size={20} />
                    <button onClick={()=>setChange('3')} className='ml-1 text-sm font-bold text-purple-700'>Wallet</button>
                </div>
                <div className='ml-28 flex items-center text-purple-700'>
                    <IoIosCreate size={20} />
                    <button onClick={()=>setChange('4')} className='ml-1 text-sm font-bold text-purple-700'>New Gig</button>
                </div>
            </div>
            <div className='w-full h-[200px] flex flex-wrap'>
            {/* {usercard.map((e)=><Card data={e}/>)} */}
            {change == "1" && usercard.map(e=><UserCard userId={userId} card={e}/>)}
            {change == "2" && order.map(e=><div className=' w-[810px] h-[400px] overflow-hidden overflow-y-scroll scrollbar-none'><SellerOrders userId={userId} orders={e}/></div>)}
            {change == "3" && <Change3 payment={pay}/>}
            {change == "4" && <NewGig userId={userId}/>}
                </div>
        </div>
    )
}

export default ProfileNav
