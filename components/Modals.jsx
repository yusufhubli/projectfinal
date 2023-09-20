'use client'
import React, { useState } from 'react'
import axios from 'axios'

const Modals = ({order}) => {
  const [send,setSend] = useState({
    freelancer:order.freelancer._id,
    client:order.client,
    cardname:order.cardname,
    plan:order.plan,
    price:order.price,
    delivery:order.delivery,
    title:"",
    description:"",
   // sendedfile:"",
   sendedfile: {
    filename: '',
    content: '',
  },

  })
  console.log(order)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // reader.result contains the base64 encoded string
      setSend({ ...send,
        sendedfile: {
          filename: file.name,
          content: reader.result,
        },});
  
    };

    if (file) {
      reader.readAsDataURL(file); // This will trigger the onloadend event when the file reading is complete.
    }
  };

  const handleSubmit = async()=>{

    console.log(send)
    const res = await axios.post("http://localhost:3000/api/order",send)
    console.log(res)
    alert(res.data.message)
   
   
  }

  return (
    <div className='w-full h-full z-10 backdrop-blur-sm fixed top-0'>
      <div className=' w-[600px] h-[500px] bg-white relative top-5 left-80 border-t border-purple-500 shadow-sm shadow-purple-500'>
        <div className=' w-[600px] h-auto py-5 bg-white border-b border-purple-600 flex justify-between items-center px-6 '>
          <div className=' flex items-center'>
            <img src={order.freelancer.image} className='w-14 h-14 bg-red-300 rounded-full border border-purple-600 ' alt="image" />
            <h1 className=' font-bold ml-4'>{order.freelancer.name}</h1>
          </div>
          <h1 className=' font-bold text-2xl'> ₹{order.price}</h1>
        </div>
        <div className='ml-20 mt-6'>
          <label htmlFor="" className=' font-bold text-purple-700 my-2'>Title</label><br />
          <input type="text" onChange={e=>setSend({...send,title:e.target.value})} className=' w-[80%] outline-none border-2 border-purple-700 rounded-md px-2' />
        </div>
        <div className='ml-20 my-3'>
          <label htmlFor="" className=' font-bold text-purple-700 my-2'>Description</label><br />
          <textarea rows={5} type="text" onChange={e=>setSend({...send,description:e.target.value})} className=' w-[80%] outline-none border-2 border-purple-700 rounded-md px-2' />
        </div>
        <div className='ml-20 my-3'>
          <label htmlFor="" className=' font-bold text-purple-700 my-2'>select file</label><br />
          <input type="file" onChange={handleFileChange} className=' w-[80%] outline-none border-2 border-purple-700 rounded-md px-2' />
        </div>
        <button onClick={handleSubmit} className=' px-6 py-1 rounded ml-60 bg-purple-700 text-white font-medium shadow-md shadow-gray-400 text-sm my-2'>Send Order</button>
      </div>
    </div>
  )
}

export default Modals
