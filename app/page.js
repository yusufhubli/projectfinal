
import Card, { SliderCard, UserCard } from '@/components/Card'
import Footer from '@/components/Footer'
import Forms from '@/components/Forms'
import Form from '@/components/Forms'
import Login from '@/components/Login'
import Modals from '@/components/Modals'
import NewGig from '@/components/NewGig'
import Orders from '@/components/Orders'
import Profile, { AboutSeller, Skill } from '@/components/Profile'
import ProfileNav from '@/components/ProfileNav'
import Review from '@/components/Review'
import ViewGig from '@/components/ViewGig'
import Messages from '@/components/Messages'
import Register from '@/components/Register'
import { CategoryNav } from '@/components/Navbar'
import MyComponent from '@/components/test'
import Rating from '@/components/Rating'
import { Suspense } from 'react'
import Loading from './loading'

const page = () => {
  return (
    <div className='pt-16 h-[600px]'>
      <Login/>
    </div>
  )
}

export default page