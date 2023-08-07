import AdminNav from '@/components/AdminNav'
import React from 'react'

const getCard = async()=>{
    const res = await fetch("http://localhost:3000/api/admin/cards",{next:{revalidate:10}})
    const user = res.json()
    return user
  }
const page = async() => {
    const card = await getCard()
  return (
    <div>
        <AdminNav/>
      <div>
      <h1 className=' text-3xl font-bold text-center my-4'>Card page</h1>
      <div className='mx-10'>
        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Card name
                </th>
                <th scope="col" class="px-6 py-3">
                    servicetype
                </th>
                <th scope="col" class="px-6 py-3">
                    Owner name
                </th>
                <th scope="col" class="px-6 py-3">
                    country
                </th>
                <th scope="col" class="px-6 py-3">
                createdon
                </th>
            </tr>
        </thead>
        <tbody>
           {card.map(card=>
            <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {card.cardname}
            </th>
            <td class="px-6 py-4">
                {card.servicetype}
            </td>
            <td class="px-6 py-4">
                ravi
            </td>
            <td class="px-6 py-4">
                india
            </td>
            <td class="px-6 py-4">
                {card.createAt}
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
