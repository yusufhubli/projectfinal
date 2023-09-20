 export const revalidate = 10
import AdminNav from '@/components/AdminNav'
import React from 'react'

const getPayment = async()=>{
    const res = await fetch("http://localhost:3000/api/admin/earning",{ cache:'no-cache' })
    const pay = res.json()
    return pay
}

const page = async() => {
    const payment = await getPayment()
  return (
    <div>
        <AdminNav/>
      <div className=' pt-20'>
      <h1 className=' text-3xl font-bold text-center my-4'>Earning page</h1>
      <div className='mx-10'>
        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ClientId
                </th>
                <th scope="col" class="px-6 py-3">
                    OrderId
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Commission
                </th>
            </tr>
        </thead>
        <tbody>
           {payment.map(pay=>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {pay.clientId.name}
                </th>
                <td class="px-6 py-4">
                    {pay.orderId}
                </td>
                <td class="px-6 py-4">
                ₹{pay.price}
                </td>
                <td class="px-6 py-4">
                ₹{pay.commission}
                </td>
            </tr>)}
        </tbody>
    </table>
</div>

      </div>
    </div>
    </div>
  )
}

export default page
