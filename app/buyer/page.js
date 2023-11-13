export const revalidate = 10

import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { getUserId } from '@/helpers/getuserId'


export const getCard = async () => {
  const res = await fetch("http://localhost:3000/api/cards", { cache: 'no-cache' })
  const data = res.json()
  // console.log(data)
  return data
}

const page = async () => {
  const card = await getCard()
  const id = await getUserId()
  const filterCard = card.filter(e=>e.sellerId._id !== id)
  // console.log(d)

  return (
    <div className=' h-auto '>
      {/* <Navbar/> */}
      <div className='md:ml-7'>
      <div className='pt-16 mb-2 pb-5 w-full h-auto md:h-auto flex flex-wrap justify-center md:justify-start'>
        {filterCard.map((e) => <Card data={e} />)}
      </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default page
