import Forms from '@/components/Forms'
import React from 'react'
import { getUser } from '../profile/page'
import { getUserId } from '@/helpers/getuserId'


const page = async() => {
  const user = await getUser()
  const userId = await getUserId()
  return (
    <div className='pt-20'>
      <Forms  user={user} userId={userId}/>
    </div>
  )
}

export default page
