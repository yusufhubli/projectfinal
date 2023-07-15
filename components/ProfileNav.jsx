import React from 'react'
import { IoWalletSharp } from 'react-icons/io5'
import {MdWork} from 'react-icons/md'
import {AiFillCreditCard} from 'react-icons/ai'
import {IoIosCreate} from 'react-icons/io'


const ProfileNav = () => {
    return (
        <div className='flex item-center w-[880px] h-11 m-2 rounded-md shadow-sm shadow-purple-400 bg-white'>
            <div className='ml-28 flex items-center text-purple-700'>
                <AiFillCreditCard size={20}  />
                <button className=' ml-1 text-sm font-bold '>My Gigs</button>
            </div>
            <div className='ml-28 flex items-center text-purple-700'>
                <MdWork size={20}/>
                <button className='ml-1 text-sm font-bold text-purple-700'>Orders</button>
            </div>
            <div className='ml-28 flex items-center text-purple-700'>
                <IoWalletSharp size={20} />
                <button className='ml-1 text-sm font-bold text-purple-700'>Wallet</button>
            </div>
            <div className='ml-28 flex items-center text-purple-700'>
                <IoIosCreate size={20}/>
                <button className='ml-1 text-sm font-bold text-purple-700'>New Gig</button>
            </div>
        </div>
    )
}

export default ProfileNav
