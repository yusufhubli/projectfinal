import React from 'react'

const Register = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-96 h-auto flex py-10 m-10 justify-center backdrop:blur-md rounded-lg border-2 border-purple-100 bg-white'>
                <div>
                    <p className='flex justify-center text-2xl font-extrabold text-purple-700'>Register</p> <br />
                    <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700' placeholder='Name' type="text" /><br />
                    <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700' placeholder='Email' type="text" /><br />
                    <input className='flex justify-center border-2 border-purple-700 p-1 rounded-full w-80 outline-none placeholder:text-gray-700 placeholder:text-sm pl-4 text-gray-700' placeholder='Password' type="text" />
                    <div className='flex items-center'>
                        <input type="checkbox" name="" id="" className='ml-2' /><small className=' text-gray-600 m-1'>  I agree terms &conditions </small>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex text-lg w-80 justify-center rounded-full py-1 text-white bg-purple-700 font-bold hover:bg-purple-600 my-4 shadow-2xl '>Register</button>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex text-lg w-80 justify-center rounded-full py-1 text-purple-700 border-2 border-purple-700 font-bold hover:bg-gray-100 my-1'>google</button>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex text-lg w-80 justify-center rounded-full py-1 text-purple-700 border-2 border-purple-700 font-bold hover:bg-gray-100 my-1'>facebook</button>
                    </div>
                    <small className='ml-16'>already have an account?<span className=' text-purple-700'>Login</span></small>
                </div>
            </div>
        </div>
    )
}

export default Register

