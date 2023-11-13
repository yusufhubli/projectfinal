import React from 'react'

const Change = () => {
  return (
    <div className='w-full h-[300px] bg-red-500'>
      first
    </div>
  )
}

export const Change3 = ({ payment }) => {
  const total = payment.map(pay => {
    let tot = 0
    tot = tot + pay.price
    let con = 0
    con = con + pay.commission
    return tot - con
  })
  console.log(total)
  let state = true
  return (
    <>
      {payment ?
        <div className='w-full md:flex h-auto my-2'>
          <div className=' w-80 h-auto py-5 mb-4 border border-purple-300 mx-auto bg-white md:w-full md:ml-5 md:mr-4 md:flex md:mb-0 items-center justify-around'>
            <div className=' md:-ml-10'>
            <h1 className=' font-bold ml-10 text-sm'>Payment</h1>
            <h1 className='ml-10 my-1 font-bold text-3xl'>₹{total}</h1>
            </div>
            <button className=' px-10 py-1 bg-purple-700 rounded-full font-bold text-white mx-20 mt-2 md:mt-0 md:mx-0'>Withdraw</button>
          </div>
          <div className=' w-80 mx-auto md:w-full h-auto md:mr-5 py-5 border border-purple-300 bg-white'>
            <h1 className=' text-sm font-bold py-1 px-5'>Payment history</h1>
            {payment.map(pay => <>
              <div key={pay.clientId._id} className=' flex items-center justify-between px-5 py-3 mx-3 rounded-sm bg-purple-50'>
                <div className=' flex justify-center items-center'>
                <img src={pay.clientId.image} alt="image" className=' w-10 h-10 rounded-full border border-purple-700' />
                <h1 className=' font-medium ml-4 capitalize text-sm'>{pay.clientId.name}</h1>
                </div>
                <h1 className=' font-bold text-[17px]'>₹{pay.price - pay.commission}</h1>
              </div>
            </>)}
          </div>
        </div> : <div className=' text-center py-20'>not received any payment </div>}
    </>
  )
}
export const Change4 = () => {
  return (
    <div className='w-full h-[300px] bg-fuchsia-500'>
      fouth
    </div>
  )
}

export default Change
