import AdminNav from '@/components/AdminNav'
import React from 'react'

const getOrders = async()=>{
    const res = await fetch("http://localhost:3000/api/admin/orders",{next:{revalidate:10}})
    const user = res.json()
    return user
}
const page = async() => {
    const user = await getOrders()
   // console.log(user)
    return (
        <div>
            <AdminNav />
            <div>
            <div className=' text-3xl font-bold text-center my-4'>Order page</div>
                <div className='mx-10'>

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className=' border-b border-gray-600'>
                                    <th scope="col" class="px-6 py-3">
                                        Freelancer
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Client
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Cardname
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Plan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Sendedfile
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Deliveredfile
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                             {user.map(order=>
                                  <tr class="bg-white border-b border-gray-600">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      ravi
                                  </th>
                                  <td class="px-6 py-4">
                                      Black
                                  </td>
                                  <td class="px-6 py-4">
                                      {order.title}
                                  </td>
                                  <td class="px-6 py-4">
                                      {order.cardname}
                                  </td>
                                  <td class="px-6 py-4">
                                      {order.plan}
                                  </td>
                                  <td class="px-6 py-4">
                                    {order.price}
                                  </td>
                                  <td class="px-6 py-4">
                                      {order.sendedfile.filename}
                                  </td>
                                  <td class="px-6 py-4">
                                  {order.deliveredfile ? order.deliveredfile.filename : "pending"}
                                  </td>
                                  <td class="px-6 py-4">
                                      {order.status ===false && "active"}
                                  </td>
                                  <td class="px-6 py-4">
                                      {order.createdAt}
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
