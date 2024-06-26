"use client"
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'
import axios from 'axios'

const Register = () => {
    const router = useRouter()
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
    })
    async function onReg(){
        try {
            const res = await axios.post("/api/user/register",user)
            console.log("signup success",res.data)
            alert(res.data.message)
            router.push("/signin")
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='w-full flex justify-center items-center bg-red-200'>
            <div className='w-80 md:w-[500px] my-10 h-auto flex py-10 justify-center backdrop:blur-md rounded-lg border-2 border-purple-100 bg-white'>
                <div>
                    <p className='flex justify-center text-2xl font-extrabold text-purple-700'>Register</p> <br />
                    <input className=' my-2 w-64 md:w-96 border-2 border-purple-700 p-1 rounded-full outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                    value={user.name}
                    onChange={(e)=>setUser({...user,name:e.target.value})}
                    placeholder='Name' type="text" /><br />
                    <input className=' my-2 w-64 md:w-96 border-2 border-purple-700 p-1 rounded-full  outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                     value={user.email}
                     onChange={(e)=>setUser({...user,email:e.target.value})}
                     placeholder='Email' type="text" /><br />
                    <input className=' my-2 w-64 md:w-96 border-2 border-purple-700 p-1 rounded-full  outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700'
                     value={user.password}
                     onChange={(e)=>setUser({...user,password:e.target.value})}
                     placeholder='Password' type="text" />
                    {/* <div className='flex items-center'>
                        <input type="checkbox" name="" id="" className='ml-2' /><small className=' text-gray-600 m-1'>  I agree terms &conditions </small>
                    </div> */}
                    <div className='flex justify-center'>
                        <button className='flex text-lg w-64 md:w-96 justify-center rounded-full py-1 text-white bg-purple-700 font-bold hover:bg-purple-600 mt-2 shadow-2xl '
                        onClick={onReg}>Register</button>
                    </div>
                    <small className='ml-9 md:ml-24'>already have an account?<span className=' text-purple-700 cursor-pointer text-sm ml-1 font-bold' onClick={()=>router.push("/signin")}>Login</span></small>
                </div>
            </div>
        </div>
    )
}

export default Register

