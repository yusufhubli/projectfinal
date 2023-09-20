import React from 'react'

const Change = () => {
  return (
    <div className='w-full h-[300px] bg-red-500'>
       first
    </div>
  )
}

  export const Change3 = ({payment}) => {
    const total = payment.map(pay=>{
        let tot =0
         tot = tot+pay.price
        let con =0
         con = con+pay.commission
        return tot-con
    })
    console.log(total)
    let state = true
    return (
      <>
      {payment ?
       <div className='w-[780px] flex h-[300px] bg-white'>
                <div className=' w-[360px] h-[300px] border-r border-purple-700 '>
                    <h1 className=' font-bold mx-20 mt-20 text-sm'>Payment</h1><br />
                    <h1 className='mx-20 my-1 font-bold text-3xl'>₹{total}</h1>
                </div>
                <div className=' w-[360px] h-[300px]'>
                    <h1 className=' text-sm font-bold py-1 px-5'>Payment history</h1>
                   {payment.map(pay=> <><div className=' flex items-center py-3 mx-5 rounded-md shadow-sm shadow-gray-500 w-96 bg-purple-100 px-10 justify-between'>
                        <img src={pay.clientId.image} alt="image" className=' w-10 h-10 rounded-full border border-purple-700' />
                        <h1 className=' font-medium text-sm'>{pay.clientId.name}</h1>
                        <h1 className=' font-bold text-lg'>₹{pay.price-pay.commission}</h1>
                    </div></>)}
                </div>
            </div>:<div className=' text-center py-20'>not received any payment </div>}
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
