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
    // <div className='w-full h-full z-10 backdrop-blur-sm fixed top-0'>
    //   <div className=' w-[600px] h-[500px] bg-white relative top-5 left-80 border-t border-purple-500 shadow-sm shadow-purple-500'>
    //     <div className=' w-[600px] h-auto py-5 bg-white border-b border-purple-600 flex justify-between items-center px-6 '>
    //       <div className=' flex items-center'>
    //         <img src={order.freelancer.image} className='w-14 h-14 bg-red-300 rounded-full border border-purple-600 ' alt="image" />
    //         <h1 className=' font-bold ml-4'>{order.freelancer.name}</h1>
    //       </div>
    //       <h1 className=' font-bold text-2xl'> ₹{order.price}</h1>
    //     </div>
    //     <div className='ml-20 mt-6'>
    //       <label htmlFor="" className=' font-bold text-purple-700 my-2'>Title</label><br />
    //       <input type="text" onChange={e=>setSend({...send,title:e.target.value})} className=' w-[80%] outline-none border-2 border-purple-700 rounded-md px-2' />
    //     </div>
    //     <div className='ml-20 my-3'>
    //       <label htmlFor="" className=' font-bold text-purple-700 my-2'>Description</label><br />
    //       <textarea rows={5} type="text" onChange={e=>setSend({...send,description:e.target.value})} className=' w-[80%] outline-none border-2 border-purple-700 rounded-md px-2' />
    //     </div>
    //     <div className='ml-20 my-3'>
    //       <label htmlFor="" className=' font-bold text-purple-700 my-2'>select file</label><br />
    //       <input type="file" onChange={handleFileChange} className=' w-[80%] outline-none border-2 border-purple-700 rounded-md px-2' />
    //     </div>
    //     <button onClick={handleSubmit} className=' px-6 py-1 rounded ml-60 bg-purple-700 text-white font-medium shadow-md shadow-gray-400 text-sm my-2'>Send Order</button>
    //   </div>
    // </div>
    <div className='w-full h-full z-10 backdrop-blur-sm fixed top-0'>
    <div className=' w-[270px] h-[360px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] bg-white relative top-44 md:top-56 lg:top-10 left-10 md:left-40 lg:left-96 border border-purple-500 shadow-xl overflow-hidden'>
      <div className=' lg:w-[500px] h-auto py-3 md:py-4 lg:py-5 bg-white border-b border-purple-600 flex justify-between items-center px-6 '>
        <div className=' flex items-center'>
          <img src={order.freelancer.image} className=' w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-red-300 rounded-full border border-purple-600 ' alt="image" />
          <h1 className=' text-sm md:text-lg font-bold ml-4'>{order.freelancer.name}</h1>
        </div>
        <h1 className=' font-bold text-xl md:text-2xl lg:text-2xl'> ₹{order.price}</h1>
      </div>
      <div className=' ml-6 md:ml-16 lg:ml-20 mt-3 lg:mt-6'>
        <label htmlFor="" className=' text-sm font-medium text-purple-700 my-2'>Title</label><br />
        <input type="text" onChange={e=>setSend({...send,title:e.target.value})} className=' w-[90%] md:w-[80%] lg:w-[80%] outline-none border-[1.5px] border-purple-700 rounded-sm px-2' />
      </div>
      <div className=' ml-6 md:ml-16 lg:ml-20 mt-3 lg:my-3'>
        <label htmlFor="" className=' text-sm font-medium text-purple-700 my-2'>Description</label><br />
        <textarea rows={3} type="text" onChange={e=>setSend({...send,description:e.target.value})} className=' w-[90%] md:w-[80%] lg:w-[80%] outline-none border-[1.5px] border-purple-700 rounded-sm px-2' />
      </div>
      <div className=' ml-6 md:ml-16 lg:ml-20 mt-1 lg:my-3'>
        <label htmlFor="" className=' text-sm font-medium text-purple-700 my-2'>Select file</label><br />
        <input type="file" onChange={handleFileChange} className=' w-[90%] md:w-[80%] lg:w-[80%] outline-none border-[1.5px] border-purple-700 rounded-sm px-2' />
      </div>
      <button onClick={handleSubmit} className=' px-10 py-1.5 rounded ml-14 md:ml-32 md:my-5 lg:ml-44 bg-purple-700 text-white font-medium shadow-md shadow-gray-400 text-sm md:text-[16px] my-3'>Send Order</button>
    </div>
  </div>
  )
}

export default Modals
