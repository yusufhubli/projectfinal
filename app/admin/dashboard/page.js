import AdminNav from '@/components/AdminNav'
import React from 'react'

const page = () => {
  return (
    <div>
      <AdminNav/>
      <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" bg-purple-200 px-4 py-6 rounded-lg">

              <h2 class="title-font font-medium text-3xl text-gray-900">2.7</h2>
              <p class="leading-relaxed">Users</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" bg-purple-200 px-4 py-6 rounded-lg">

              <h2 class="title-font font-medium text-3xl text-gray-900">14</h2>
              <p class="leading-relaxed">Cards</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class=" bg-purple-200 px-4 py-6 rounded-lg">

              <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
              <p class="leading-relaxed">Orders</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
            <div class=" bg-purple-200 px-4 py-6 rounded-lg">

              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Earning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
