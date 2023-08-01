import Orders from '@/components/Orders'
import React from 'react'
import { getUserId } from '@/helpers/getuserId'
import axios from 'axios'

export const getOrders = async()=>{
  const orderall = await axios.get("http://localhost:3000/api/order")
 // console.log(orderall)
  const userId = await getUserId()
 const order = orderall.data.filter(e=>e.client._id === userId)
 //console.log(order)
  return order

}


const page = async() => {
  const order = await getOrders()
  return (
    <div className='pt-20'>
      {order.map(e=><> <Orders orders={e}/></>)}
      
    </div>
  )
}

export default page
