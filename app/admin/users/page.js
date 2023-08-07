import AdminNav from '@/components/AdminNav'
import React from 'react'

const getUser = async()=>{
  const res = await fetch("http://localhost:3000/api/admin/users",{next:{revalidate:10}})
  const user = res.json()
  return user
}
const page = async() => {
  const user = await getUser()
  return (
    <div>
        <AdminNav/>
        <div>
      <h1 className=' text-3xl font-bold text-center my-4'>Users</h1>
      <div className='mx-10'>
        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='border-b border-gray-600'>
                <th scope="col" class="px-6 py-3">
                    User name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Country
                </th>
                <th scope="col" class="px-6 py-3">
                    Created On
                </th>
            </tr>
        </thead>
        <tbody>
           {user.map(user=>
            <tr class="bg-white border-b border-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
            </th>
            <td class="px-6 py-4">
                {user.email}
            </td>
            <td class="px-6 py-4">
                {user.country}
            </td>
            <td class="px-6 py-4">
                {user.createdAt}
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
