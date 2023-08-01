"use client"
import React, { useState } from 'react'
import {GrFacebook} from 'react-icons/gr'
import {FcGoogle} from 'react-icons/fc'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Login = () => {
    const router = useRouter()
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    async function onLogin(){
        try {
            const res = await axios.post("/api/user/login",user)
            console.log("signup success",res.data)
            router.push("/buyer")
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='w-96 h-auto flex py-10 m-10 justify-center bg-white'>
            <div>
                <p className='flex justify-center text-2xl font-extrabold text-purple-700'>Login</p> <br />
                <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder='Email' type="text" /><br />
                <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                 value={user.password}
                 onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder='Password' type="text" />
                <div className='flex items-center'>
                    <input type="checkbox" name="" id="" className='ml-2' /><small className=' text-gray-600 m-1'>  I agree terms &conditions </small>
                </div>
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-white bg-purple-700 font-bold hover:bg-purple-600 my-4 shadow-2xl '
                     onClick={onLogin}>Login</button>
                </div>
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-purple-700 border-2 border-purple-700 font-bold hover:bg-gray-100 my-1  items-center'><FcGoogle/>with google</button>
                </div>
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-purple-700 border-2 border-purple-700 font-bold hover:bg-gray-100 my-1'><GrFacebook/>facebook</button>
                </div>
                <small className='ml-16'>don't have an account?<span className=' text-purple-700 text-sm font-bold cursor-pointer' onClick={()=>router.push("/")}>Register</span></small>
                </div>
            </div>
        
    )
}

export default Login
