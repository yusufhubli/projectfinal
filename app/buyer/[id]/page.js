
import ViewGig from '@/components/ViewGig'
import React from 'react' 
import { getUserId } from '@/helpers/getuserId'
import Navbar from '@/components/Navbar'


 export const getCardbyId = async(id)=>{
   const res = await fetch(`http://localhost:3000/api/cards/${id}`,{next:{revalidate:10}})
  const data = res.json()
   return data
 }

 export const getReview =async(id)=>{
   const res = await fetch(`http://localhost:3000/api/review/${id}`,{next:{revalidate:10}})
   const review = res.json()
   return review
 }


const page = async({params}) => {
  const userId = await getUserId()
  console.log("buyer",userId)
  const dat = await getCardbyId(params.id)
  //console.log("seller:",dat.sellerId._id)
  const review = await getReview(dat.sellerId._id)
 // console.log("review",review)
 
  return (
    <>
    <Navbar/>
    <div className='pt-20'>
      <ViewGig data={dat} userId={userId} review={review}/>
    </div>
    </>
  )
}

export default page
