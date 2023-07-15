
import ViewGig from '@/components/ViewGig'
import React from 'react'

const getCardbyId = async(id)=>{
   const res = await fetch(`http://localhost:3000/api/cards/${id}`,{next:{revalidate:30}})
  const data = res.json()
   return data
 }
const page = async({params}) => {
  const dat = await getCardbyId(params.id)
  // const res = await fetch(`http://localhost:3000/api/cards/${params.id}`,{cache:'no-cache'})
  // const dat = res.json()
  return (
    <div className='pt-20'>
      <ViewGig data={dat}/>
    </div>
  )
}

export default page
