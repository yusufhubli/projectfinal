'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { HiMenu } from 'react-icons/Hi'
//  import { BiSolidCategory,BiSolidEditAlt } from 'react-icons/bi'
import { MdHome,MdViewList,MdNotifications,MdContacts,MdInvertColors,MdSettings,MdOutlineClose } from 'react-icons/md'
import { FaUserCircle,FaSearch } from 'react-icons/fa'
import { SiGooglemessages } from 'react-icons/si'
import Link from 'next/link'

const Navbar =() => {
    const [state, setState] = useState(false)
    const [toggle,setToggle] = useState(false)
    return (
        // <div className='w-full fixed z-10 mb-5 bg-white h-16 flex items-center border-b-2 border-purple-200'>
        //     <p className=' text-purple-700 md:hidden lg:hidden ml-6'><HiMenu /></p>
        //     <h1 className=' font-bold text-2xl italic m-6 text-purple-700'>GoGigs</h1>
        //     <div className=' lg:block md:hidden sm:hidden '>{state ?
        //         <>
                    
        //             <Link className='font-bold text-purple-700 text-sm ml-16 hover:text-purple-500' href={"/order"}>Orders</Link>
        //             <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/buyer"}>Buyer</Link>
        //             <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/order"} onClick={() => setState(false)}>Switch to Seller</Link>
        //             <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/"}>Logout</Link>
        //         </> :
        //         <>
                    
        //             <Link className='font-bold text-purple-700 text-sm ml-16 hover:text-purple-500' href={"/profile"}>Profile</Link>
        //             <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/buyer"} onClick={() => setState(true)}>Switch to Buyer</Link>
        //             <Link className='font-bold text-purple-700 text-sm ml-6 hover:text-purple-500' href={"/"}>Logout</Link>
        //         </>}</div>
        //     <input type="text" placeholder='Search' className=' w-96 h-8 p-2 border-2 ml-20 border-purple-700 rounded outline-none md:ml-10' />
        //     <button className='text-white bg-purple-700 rounded px-2 font-bold ml-2 shadow-sm shadow-gray-400 py-[6.5px] hover:bg-purple-500'><FaSearch size={20}/></button>
        //     <p className='text-purple-700 ml-16 md:ml-10'><SiGooglemessages size={30} /></p>
        //     <p className='text-purple-700 ml-5'><FaUserCircle size={30} /></p>
        // </div>
        <>
        {/* side bar */}
        <div className={`w-72 fixed ${toggle === false ? '-ml-72' : 'ml-0'}`}>
          <section className=' w-72 h-[740px] bg-white'>
            <header className=' h-14 flex items-center justify-between px-4 border-b-2 border-purple-200'>
              <h1 className="logo text-[22px] font-bold text-purple-700 flex italic">GoGigs</h1>
              <MdOutlineClose onClick={() => setToggle(false)} className=' text-purple-600 text-3xl' />
            </header>
            <div className=' h-20 my-2 py-2 bg-purple-100 px-5 flex justify-between items-center'>
              <div className=' flex items-center'>
                <Image src={'/image/bg1.jpg'} width={30} height={30} className=' w-10 bg-black rounded-full' alt="" />
                <h1 className=' font-bold text-[20px] mx-4 italic'>Rohit sharma</h1>
              </div>
  
              <MdHome className='p-1 rounded-md hover:bg-blue-500 hover:text-white ' size={30} />
            </div>
            <ul className='m-6'>
              <li ><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdHome size={25} className=' mr-5' />Home</Link></li>
              <li ><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdHome size={25} className=' mr-5' />Categories</Link></li>
              <li ><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdViewList size={25} className=' mr-5' />Product</Link></li>
              <li ><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdContacts size={25} className=' mr-5' />About</Link></li>
              <div className=' h-[1px] my-2 bg-purple-600'></div>
              <li><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdNotifications className=' mr-5' size={25} />Notification</Link></li>
              <li><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdInvertColors className=' mr-5' size={25} />Theme</Link></li>
              <div className=' h-[1px] my-2 bg-purple-600'></div>
              <li><Link className='my-7 flex items-center text-[16px] font-medium hover:text-gray-500' href="/"><MdSettings className='mr-5' size={25} />Setting</Link></li>
            </ul>
          </section>
        </div>
  
        {/* navbar */}
        <div className={` ${toggle === true ? 'hidden' : 'flex'} fixed z-10 sm:w-full mb-5 bg-white h-14 md:h-16 flex items-center border-b-2 border-purple-200`}>
          <p className=' text-purple-700 mx-2 text-3xl md:hidden lg:hidden'><HiMenu onClick={() => setToggle(true)} /></p>
          <h1 className=' md:pl-7 font-bold text-[20px] italic text-purple-700'>GoGigs</h1>
          <div className='mx-5 md:w-[40%] md:px-9 lg:w-[34%] lg:px-12 md:flex md:justify-between hidden '>{state ?
            <>
  
              <Link className='font-medium text-purple-700 text-sm hover:text-purple-500' href={"/order"}>Orders</Link>
              <Link className='font-medium text-purple-700 text-sm  hover:text-purple-500' href={"/buyer"}>Buyer</Link>
              <p className='font-medium cursor-pointer text-purple-700 text-sm  hover:text-purple-500' onClick={() => setState(false)}>Switch to Seller</p>
              <Link className='font-medium text-purple-700 text-sm  hover:text-purple-500' href={"/"}>Logout</Link>
            </> :
            <>
  
              <Link className='font-medium text-purple-700 text-sm hover:text-purple-500' href={"/profile"}>Profile</Link>
              <p className='font-medium cursor-pointer text-purple-700 text-sm hover:text-purple-500' onClick={() => setState(true)}>Switch to Buyer</p>
              <Link className='font-medium text-purple-700 text-sm hover:text-purple-500' href={"/"}>Logout</Link>
            </>}</div>
          <input type="text" placeholder='&#128269;Search' className=' w-[75%] md:w-[40%] lg:w-[38%] py-1 px-2 mx-2 border-2 text-sm border-purple-700 rounded outline-none' />
          <button className='text-white bg-purple-700 rounded px-2 font-bold shadow-sm shadow-gray-400 py-[6.5px] mr-4 hover:bg-purple-500'><FaSearch /></button>
          <p className='text-purple-700 hidden lg:block ml-5'><SiGooglemessages size={30} /></p>
          <p className='text-purple-700 hidden lg:block ml-5 '><FaUserCircle size={30} /> </p>
        </div>
        </>
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
