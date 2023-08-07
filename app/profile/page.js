 export const revalidate =10
import NewGig from '@/components/NewGig'
import Profile, { Skill } from '@/components/Profile'
import ProfileNav from '@/components/ProfileNav'
import React from 'react'
import { getCard } from '../buyer/page'
import { getUserId } from '@/helpers/getuserId'
import axios from 'axios'

export const getOrders = async()=>{
  const orderall = await axios.get("http://localhost:3000/api/order",{cache:'no-cache'})
  console.log(orderall)
  const userId = await getUserId()
 const order = orderall.data.filter(e=>e.freelancer._id === userId)
 //console.log(order)
  return order

}

export const getUser = async()=>{
  const userall = await axios.get("http://localhost:3000/api/user",{next:{revalidate:10}})
  const userId = await getUserId()
 // console.log(userall.data)
  const user = userall.data.find((x)=>x._id === userId)
  return user
}

const page = async() => {
  const order = await getOrders()
  const user  = await getUser()
  const userId = await getUserId()
  const card = await getCard()
 // console.log("profile page",order)
  return (
    <div className='pt-20 h-[1000px] grid grid-cols-7 gap-2'>
      <div className=' col-span-2 bg-gray-100'>
      <Profile user={user}/>
      <Skill/>
      </div>

      <div className=' col-span-5 bg-gray-100'>
      <ProfileNav userId={userId} card={card} orders={order}/>
      </div>
      
    </div>
  )
}

export default page
