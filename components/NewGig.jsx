import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
const NewGig = () => {
  return (
    <div className=' bg-white w-[850px] h-auto mx-6 my-4 py-8 rounded-md shadow-sm shadow-purple-400'>
      <h1 className='text-purple-700 font-bold text-center m-4 text-2xl'>Create Gig</h1>

      <div className='ml-32 pl-1 '>
        <h4 className='font-bold my-2 text-purple-700'>Gig Name</h4>
        <input type="text" className=' w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-600 p-1' />
      </div>

      <div className='ml-32 pl-1 '>
        <h4 className='font-bold my-2 text-purple-700'>Description</h4>
        <textarea rows={6} type="text" className=' w-4/5 outline-none bg-purple-50 mb-2 rounded-md border-2 p-1 border-purple-600 ' />
      </div>
      <div className='ml-32 pl-1'>
        <select name="" id="" className=' w-4/5 outline-none bg-purple-50 my-2 rounded-md text-purple-700 border-2 border-purple-700 p-1'>
          <option value="" className='font-bold'>Name</option>
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
        </select>
      </div>

      <div className='flex ml-32 pl-3 my-2'>
        <div className=' relative border-2 border-purple-700 bg-purple-50 rounded-md w-40 h-24 ml-4 '>
          <h5 className=' absolute text-sm font-sans font-bold text-purple-700 m-1'>Add Image</h5>
          <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
          <input type="file" name="" className=' absolute top-9 opacity-0' id="" />
        </div>
        <div className=' relative border-2 border-purple-700 bg-purple-50 rounded-md w-40 h-24 ml-4 '>
          <h5 className=' absolute text-sm font-sans font-bold text-purple-700 m-1'>Add Image</h5>
          <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
          <input type="file" name="" className=' absolute top-9 opacity-0' id="" />
        </div>
        <div className=' relative border-2 border-purple-700 bg-purple-50 rounded-md w-40 h-24 ml-4 '>
          <h5 className=' absolute text-sm font-sans font-bold text-purple-700 m-1'>Add Image</h5>
          <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
          <input type="file" name="" className=' absolute top-9 opacity-0' id="" />
        </div>
      </div>
      <div className=' bg-purple-400 mt-8 py-1'>
        <h1 className='text-lg font-bold text-center my-4 text-white'>Basic Plan</h1>
        <div className='ml-32 pl-1'>
          <input type="text" placeholder='Plan Name' className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-500' />
          <textarea name="" id="" className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-50 p-1 my-2 placeholder:text-purple-500' cols="30" rows="5" placeholder={`Plan Description (list manner)`} />
          <div className='my-1'>
            <h4 className='font-bold my-2 text-purple-50'>Revisions</h4>
            <select name="" id="" className=' bg-purple-50 mb-2 rounded-md outline-none border-2 w-64 border-purple-50 p-1 font-bold text-purple-400'>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select><input type="text" placeholder='Price' className=' bg-purple-50 w-64 mb-2 ml-14 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-500' />
          </div>
          <div className='my-2'>
            <h4 className='font-bold my-2 text-purple-50'>Extra Revisions</h4>
            <select name="" id="" className=' bg-purple-50 mb-2 rounded-md outline-none border-2 w-64 border-purple-50 p-1 font-bold text-purple-400'>
              <option value="">1</option>
            </select><input type="text" placeholder='Extra Price' className=' bg-purple-50 w-64 mb-2 ml-14 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-600' />
          </div>
        </div>
      </div>

      <div className=' bg-purple-600 py-1'>
        <h1 className='text-lg font-bold text-center my-4 text-white'>Standard Plan</h1>
        <div className='ml-32 pl-1'>
          <input type="text" placeholder='Plan Name' className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-500' />
          <textarea name="" id="" className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-50 p-1 my-2 placeholder:text-purple-500' cols="30" rows="5" placeholder={`Plan Description (list manner)`} />
          <div className='my-1'>
            <h4 className='font-bold my-2 text-purple-50'>Revisions</h4>
            <select name="" id="" className=' bg-purple-50 mb-2 rounded-md outline-none border-2 w-64 border-purple-50 p-1 font-bold text-purple-600'>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select><input type="text" placeholder='Price' className=' bg-purple-50 w-64 mb-2 ml-14 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-600 font-medium' />
          </div>
          <div className='my-2'>
            <h4 className='font-bold my-2 text-purple-50'>Extra Revisions</h4>
            <select name="" id="" className=' bg-purple-50 mb-2 rounded-md outline-none border-2 w-64 border-purple-50 p-1 font-bold text-purple-600'>
              <option value="">1</option>
            </select><input type="text" placeholder='Extra Price' className=' bg-purple-50 w-64 mb-2 ml-14 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-600 font-medium' />
          </div>
        </div>
      </div>

      <div className=' bg-purple-800 mb-5 py-1'>
        <h1 className='text-lg font-bold text-center my-4 text-white'>Premium Plan</h1>
        <div className='ml-32 pl-1'>
          <input type="text" placeholder='Plan Name' className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-800' />
          <textarea name="" id="" className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-50 p-1 my-2 placeholder:text-purple-800' cols="30" rows="5" placeholder={`Plan Description (list manner)`} />
          <div className='my-1'>
            <h4 className='font-bold my-2 text-purple-50'>Revisions</h4>
            <select name="" id="" className=' bg-purple-50 mb-2 rounded-md outline-none border-2 w-64 border-purple-50 p-1 font-bold text-purple-800'>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select><input type="text" placeholder='Price' className=' bg-purple-50 w-64 mb-2 ml-14 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-800 font-medium' />
          </div>
          <div className='my-2'>
            <h4 className='font-bold my-2 text-purple-50'>Extra Revisions</h4>
            <select name="" id="" className=' bg-purple-50 mb-2 rounded-md outline-none border-2 w-64 border-purple-50 p-1 font-bold text-purple-800'>
              <option value="">1</option>
            </select><input type="text" placeholder='Extra Price' className=' bg-purple-50 w-64 mb-2 ml-14 rounded-md outline-none border-2 border-purple-50 p-1 placeholder:text-purple-800 font-medium' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='text-white bg-purple-800 font-bold py-2 text-lg px-10 rounded-md shadow-md shadow-gray-300 my-4 hover:bg-purple-600'>Create Gig</button>
      </div>
    </div>
  )
}

export default NewGig
