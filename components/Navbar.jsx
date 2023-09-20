'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import { FaSearch } from 'react-icons/fa'

import { HiMenu } from 'react-icons/Hi'
import { FaUserCircle } from 'react-icons/fa'
import { SiGooglemessages } from 'react-icons/si'
import Link from 'next/link'

const Navbar = () => {
    const [state, setState] = useState(false)
    return (
        <div className='w-full fixed z-10 mb-5 bg-white h-16 flex items-center border-b-2 border-purple-200'>
            <p className=' text-purple-700 lg:hidden ml-6'><HiMenu size={35} /></p>
            <h1 className=' font-bold text-2xl italic m-6 text-purple-700'>GoGigs</h1>
            <div className=' lg:block md:hidden sm:hidden '>{state ?
                <>
                    
                    <Link className='font-bold text-purple-700 text-sm ml-16 hover:text-purple-500' href={"/order"}>Orders</Link>
                    <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/buyer"}>Buyer</Link>
                    <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/order"} onClick={() => setState(false)}>Switch to Seller</Link>
                    <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/"}>Logout</Link>
                </> :
                <>
                    
                    <Link className='font-bold text-purple-700 text-sm ml-16 hover:text-purple-500' href={"/profile"}>Profile</Link>
                    <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/buyer"} onClick={() => setState(true)}>Switch to Buyer</Link>
                    <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/"}>Logout</Link>
                </>}</div>
            <input type="text" placeholder='Search' className=' w-96 h-8 p-2 border-2 ml-20 border-purple-700 rounded outline-none md:ml-10' />
            <button className='text-white bg-purple-700 rounded px-2 font-bold ml-2 shadow-sm shadow-gray-400 py-[6.5px] hover:bg-purple-500'><FaSearch size={20}/></button>
            <p className='text-purple-700 ml-16 md:ml-10'><SiGooglemessages size={30} /></p>
            <p className='text-purple-700 ml-5'><FaUserCircle size={30} /></p>
        </div>

        // <div className='w-full fixed z-10 mb-5 bg-white h-16 flex items-center border-b-2 border-purple-200'>
        //     <p className=' text-purple-700 ml-6'><HiMenu size={35} /></p>
        //     <h1 className=' font-bold text-2xl italic m-6 text-purple-700'>Navbar</h1>
        //     <Link className='font-bold text-purple-700 text-sm ml-16 hover:text-purple-500' href={"/"}>Home</Link>
        //     <Link className='font-bold text-purple-700 text-sm ml-10 hover:text-purple-500' href={"/profile"}>Profile</Link>
        //     <Link className='font-bold text-purple-700 text-sm ml-10 hover:text-purple-500' href={"/buyer"}>Switch to Buyer</Link>
        //     <input type="text" placeholder='Search' className=' w-96 h-8 p-2 border-2 ml-20 border-purple-700 rounded outline-none' />
        //     <button className='text-white bg-purple-700 rounded px-4 font-bold ml-4 shadow-sm shadow-gray-400 py-1 text-md hover:bg-purple-500'>Search</button>
        //     <p className='text-purple-700 ml-20'><SiGooglemessages size={30}/></p>
        //     <p className='text-purple-700 ml-5'><FaUserCircle size={30}/></p>
        // </div>
    )
}

export const CategoryNav = () =>{
   const category = ["Web development","App development","Content writing","Photo editing","Web design","Data mining","Video editing","Blog writing","Marketing"] 
    return(
        <div className=' w-full h-auto overflow-hidden overflow-x-scroll scrollbar '>
      <div className='my-2 w-[1700px] h-12 border-b-2 border-purple-300 bg-white pb-1 pl-3 flex items-center flex-wrap '>
        {category.map((data)=><div
         className='py-1 px-5 rounded-full mx-3 bg-purple-100 font-medium text-purple-800 pb-1 hover:bg-gray-200 '>{data}</div>)}
      </div>
      </div>
    )
}


export default Navbar
