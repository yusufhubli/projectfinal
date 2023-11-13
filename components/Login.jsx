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
            alert(res.data.message)
            router.push("/buyer")
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='w-80 md:w-[500px] my-10 h-auto flex py-10 justify-center bg-white'>
            <div>
                <p className='flex justify-center text-2xl font-extrabold text-purple-700'>Login</p> <br />
                <input className='my-2 border-2 border-purple-700 p-1 rounded-full w-64 md:w-96 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder='Email' type="text" /><br />
                <input className='my-2 border-2 border-purple-700 p-1 rounded-full w-64 md:w-96 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                 value={user.password}
                 onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder='Password' type="text" />
                {/* <div className='flex items-center'>
                    <input type="checkbox" name="" id="" className='ml-2' /><small className=' text-gray-600 m-1'>  I agree terms &conditions </small>
                </div> */}
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-64 md:w-96 justify-center rounded-full py-1 text-white bg-purple-700 font-bold hover:bg-purple-600 my-4 shadow-2xl '
                     onClick={onLogin}>Login</button>
                </div>
               
                <small className='ml-9 md:ml-24'>don't have an account?<span className=' text-purple-700 text-sm font-bold cursor-pointer' onClick={()=>router.push("/")}>Register</span></small>
                </div>
            </div>
        
    )
}

export default Login
