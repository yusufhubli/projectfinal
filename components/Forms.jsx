'use client'
import React, { useEffect, useState } from 'react'
//import Image from 'next/image'
import {BsFillCameraFill} from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import axios from 'axios'
import Link from 'next/link'

const Forms = ({user,userId}) => {
  const {name,image,country,description,email} = user
  const [data,setdata] = useState({
    name:name,
    country:country,
    email:email,
    description:description,
    image:image
  })
  console.log(data)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // reader.result contains the base64 encoded string
      setdata({ ...data,
        image: reader.result,
        });
  
    };

    if (file) {
      reader.readAsDataURL(file); // This will trigger the onloadend event when the file reading is complete.
    }
  };


  const submit2 = async()=>{
    console.log(userId)
          const res = await axios.post(`http://localhost:3000/api/profile/${userId}`,data)
          console.log(res.data)
        
    }
  return (
    <div className=' flex justify-center '>
       <div className=' drop-shadow-md text-center my-5 shadow-md bg-white shadow-purple-400  w-[800px] h-auto py-10 rounded-md'>
         <div className='flex justify-start ml-6'><Link href={"/profile"}>back</Link></div>
         <div className='ml-[42%] my-2 w-[15%] h-28 relative rounded-full'>
          {image ? <img src={image} alt='image' className=' h-[115px] w-[115px] rounded-full border-2 border-purple-600 '/> :<FaUserCircle size={115} className=' text-gray-500' />}
         {/* <img src={image} alt='image' className=' h-[115px] w-[115px] rounded-full border-2 border-purple-600 '/> */}
         <BsFillCameraFill size={30} className=' absolute top-[70px] left-[95px] text-black'/>
         <input type="file" name="" id="" onChange={handleFileChange} className=' absolute opacity-0 top-16 left-8'/>
         </div>
         <input type="text"
          value={data.name}
          onChange={e=>setdata({...data,name:e.target.value})}
         className='w-[70%] my-3 py-1 px-3 border-2 border-purple-700 rounded-md outline-none mx-10 bg-white placeholder:text-purple-700 font-medium' placeholder='Name'/>
         <input type="text"
         value={data.country}
         onChange={e=>setdata({...data,country:e.target.value})}
         className='w-[70%] my-3 py-1 px-3 border-2 border-purple-700 rounded-md outline-none mx-10 bg-white placeholder:text-purple-700 font-medium' placeholder='country'/>
         <input type="email"
         value={data.email}
         onChange={e=>setdata({...data,email:e.target.value})}
         className='w-[70%]  my-2 border-2 border-purple-700 rounded-md outline-none mx-10 py-1 px-3 placeholder:text-purple-700 font-medium' placeholder='Email' /><br />
         <textarea cols="30" rows="5"
         value={data.description}
         onChange={e=>setdata({...data,description:e.target.value})}
         className='w-[70%] my-2 p-1 border-2 border-purple-700 rounded-md outline-none mx-10 py-1 px-3 placeholder:text-purple-700 font-medium' placeholder='Description'/><br />
         {/* <input type="text"  className='w-[70%] py-1 px-3 border-2 my-2 border-purple-700 rounded-md outline-none mx-10 placeholder:text-purple-700 font-medium' placeholder='Qualifications' /><br /> */}
          {/* <input type="text" placeholder='Certificate' className=' w-72 border-2 border-purple-700 rounded-md outline-none py-1 px-3 my-2 placeholder:text-purple-700 font-medium' /> <input type="text" placeholder='From' className='w-64 border-2 border-purple-700 rounded-md outline-none py-1 px-3 my-2 ml-3 placeholder:text-purple-700 font-medium' /><br />          */}
         <button className='w-[70%] py-1 rounded-md bg-purple-700 text-white font-bold shadow-md shadow-gray-400 my-2' onClick={submit2}>Submit</button> 
       </div>
    </div>
  )
}

export default Forms
