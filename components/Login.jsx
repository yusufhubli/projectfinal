import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
    return (
        <div className='w-96 h-auto flex py-10 m-10 justify-center bg-white'>
            <div>
                <p className='flex justify-center text-2xl font-extrabold text-purple-700'>Login</p> <br />
                <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700' placeholder='Email' type="text" /><br />
                <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700' placeholder='Password' type="text" />
                <div className='flex items-center'>
                    <input type="checkbox" name="" id="" className='ml-2' /><small className=' text-gray-600 m-1'>  I agree terms &conditions </small>
                </div>
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-white bg-purple-700 font-bold hover:bg-purple-600 my-4 shadow-2xl '>Login</button>
                </div>
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-purple-700 border-2 border-purple-700 font-bold hover:bg-gray-100 my-1  items-center'><FcGoogle/>with google</button>
                </div>
                <div className='flex justify-center'> 
                    <button className='flex text-lg w-80 justify-center rounded-full py-1 text-purple-700 border-2 border-purple-700 font-bold hover:bg-gray-100 my-1'><GrFacebook/>facebook</button>
                </div>
                <small className='ml-16'>don't have an account?<span className=' text-purple-700'>Register</span></small>
                </div>
            </div>
        
    )
}

export default Login
