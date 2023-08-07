export const revalidate = 10
import axios from 'axios'
import React from 'react'
import { getUserId } from '@/helpers/getuserId'

const getOrder = async() => {
    const res = await axios.get("http://localhost:3000/api/order/getorder",{cache:'no-cache'})
    const userId = await getUserId()
    const order = res.data.filter(e=>e.freelancer._id === userId)
    return order
}

const page = async() => {
  const order = await getOrder()
  return (
    <div className=' pt-20 text-3xl font-bold text-center'>
      {order.map(e=>e.freelancer)}
    </div>
  )
}

export default page
