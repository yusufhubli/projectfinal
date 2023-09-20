"use client"
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import AdminNav from '@/components/AdminNav'


const page = () => {
    const router = useRouter()
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    // async function onLogin(){
    //     try {
    //         const res = await axios.post("/api/user/login",user)
    //         console.log("signup success",res.data)
    //         router.push("/buyer")
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    return (
        <>
        <AdminNav/>
          <div className='w-full h-auto flex justify-center'>
            <div className='w-96 h-auto py-10 mt-20 px-10 bg-white'>
                <p className='flex justify-center text-2xl font-extrabold text-purple-700'>Admin Login</p> <br />
                <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder='Email' type="text" /><br />
                <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                 value={user.password}
                 onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder='Password' type="text" />
                {/* <div className='flex items-center'>
                    <input type="checkbox" name="" id="" className='ml-2' /><small className=' text-gray-600 m-1'>  I agree terms &conditions </small>
                </div> */}
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-white bg-purple-700 font-bold hover:bg-purple-600 my-4 shadow-2xl '
                     onClick={()=>router.push("/admin/users")}>Login</button>
                </div>
               
                
                </div>
            </div>
        </>        
    )
}

export default page





