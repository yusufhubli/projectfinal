import NewGig from '@/components/NewGig'
import Profile, { Skill } from '@/components/Profile'
import ProfileNav from '@/components/ProfileNav'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20 grid grid-cols-7 gap-2'>
      <div className=' col-span-2 bg-gray-100'>
      <Profile/>
      <Skill/>
      </div>

      <div className=' col-span-5 bg-gray-100'>
      <ProfileNav/>
      <NewGig/>
      </div>
      
    </div>
  )
}

export default page
