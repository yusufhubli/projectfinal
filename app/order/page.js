export const revalidate =10
import Orders from '@/components/Orders'
import React from 'react'
import { getUserId } from '@/helpers/getuserId'
import axios from 'axios'

export const getOrder = async()=>{
  const orderall = await axios.get("http://localhost:3000/api/order/getorder",{cache:'no-cache'})
  //console.log(orderall)
  const userId = await getUserId()
 const order = orderall.data.filter(e=>e.client._id === userId)
 //console.log(order)
  return order

}


const page = async() => {
  const order = await getOrder()
  return (
    <div className='pt-20'>
      {order ? order.map(e=><> <Orders orders={e}/></>) : 
      <div className=' flex justify-center pt-96'>
        <h1 className=' font-bold text-xl '>you have not ordered yet</h1>
      </div> }
      
    </div>
  )
}

export default page
