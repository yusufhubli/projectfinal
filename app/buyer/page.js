export const revalidate =10

import Card from '@/components/Card'
import React from 'react'

export const getCard = async()=>{
    const res = await fetch("http://localhost:3000/api/cards",{cache:'no-cache'})
    const data = res.json()
    return data
}

const page = async() => {
   const card = await getCard()
   //console.log(card)
    return (
    <div className=' pt-20 w-full flex flex-wrap'>
      {card.map((e)=><Card data={e}/>)}
    </div>
  )
}

export default page
