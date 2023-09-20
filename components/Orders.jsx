'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

import axios from 'axios'
const Orders = ({ orders }) => {
    const {_id, cardname, client, freelancer, createdAt,deliveredfile, plan, price,delivery, title, description, status } = orders
    const { filename, content } = orders.sendedfile
    console.log(freelancer.name)
    const [pay,setPay] = useState({
        clientId:client._id,
        orderId:_id,
        sellerId:freelancer._id,
        price:price,
        commission:price/10,
        status:true,
       

    })

     //console.log(pay)
    const handlePayment = async(id)=>{
        console.log("pay",pay)
        const res = await axios.post("http://localhost:3000/api/pay",pay)
        console.log(res.data)
        alert(res.data)
    }


    const downloadFile = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/order/dfile/${id}`, {
                responseType: 'blob', // Set the response type to 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = deliveredfile.filename; // Set the filename for download
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };
    return (
        <div className=' w-[800px] h-auto p-3 bg-white shadow-md shadow-purple-200 rounded-md m-2'>
            {/** seller info */}
            <div className='flex justify-between items-center mx-6 my-2 border-b-2 border-purple-700 pb-4 px-2 '>
                <div className=' flex items-center w-80'>
                    <img className=' h-20 w-20 rounded-full border border-purple-700 ml-1' src={freelancer.image} width={60} height={60} />
                    <div className='ml-4'>
                        <h6 className='text-xl font-bold text-gray-600'>{freelancer.name}</h6>
                        <div className='flex text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
                        <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (1)</span></h1>
                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-xl text-purple-700'>{plan} plan</h1>
                    <h1 className=' text-4xl font-bold'>₹{price}</h1>
                </div>
            </div>
            {/** more info */}
            <div className='mx-6 my-2 pb-2 border-b-2 border-purple-700'>
                <h1 className=' font-bold text-xl'>{cardname}</h1>
            <h1 className=' font-bold text-xl'> Title: {title}</h1>
                <section className=' text-[17px] font-medium text-gray-500 py-2 border-b border-gray-600'>Description: {description}</section>
                <div className=' text-[15px] font-medium text-black flex justify-between py-1 px-10'><h1>Order Date</h1><h1>{createdAt}</h1></div>
                <div className=' text-[15px] font-medium text-black flex justify-between py-1 px-10'><h1>status</h1><h1>{status === false ? <b className=' text-green-500'>Active</b> : <b className=' text-purple-700'>Completed</b>}</h1></div>
                <div className=' text-[15px] font-medium text-black flex justify-between py-1 px-10'><h1>Sended File</h1><h1>{filename}</h1></div>
                <div className=' text-[15px] font-medium text-black flex justify-between items-center py-1 px-10'><h1>Received file</h1>{deliveredfile ? <div className='flex items-center'><h1 className=' text-xs text-gray-500'>{deliveredfile.filename}</h1>
                    <button onClick={() => downloadFile(_id)} className=' px-5 py-1 text-sm my-1 ml-4 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button></div> : <h1 className=' font-medium'>Pending</h1>}
                </div>
                {/* <div className=' ml-5 text-[17px] font-medium text-gray-600'>
                    <h1 className='py-1'>Orderd date</h1>
                    <h1 className='py-1'>Delivery date</h1>
                    <h1 className='py-1'>Orderd Status</h1>
                    <h1 className='py-1'>Sended File </h1>
                    <h1 className='py-1'>Received File </h1>
                </div>
                <div className='mr-5 text-[17px] font-bold'>
                    <h1 className='py-1'>26-10-2023</h1>
                    <h1 className='py-1'>29-10-2023</h1>
                    <h1 className='py-1'>ACTIVE</h1>
                    <h1 className='py-1'>{filename}</h1>
                    <h1 className='py-1'>{deliveredfile ? deliveredfile.filename : "pending"}
                     <button onClick={() => downloadFile(_id)} className=' px-5 py-1 text-sm my-1 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button></h1> 
                    {/* <button className=' px-5 py-1 text-sm my-1 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button> */}

            </div>

            {/** more view */}
            <div className=' flex justify-between items-center mx-8 '>
                <span className=' font-bold text-lg text-black'>Duration {delivery} days</span>
                <span className=' text-sm font-bold py-1 px-5 rounded-sm shadow-sm shadow-purple-500  text-green-500'>{status === false ? <b>Active</b> : <b className='text-sm font-bold text-gray-700 '>Completed</b>}</span>
               {status === true ?<></>:<> {deliveredfile && <button onClick={()=>handlePayment(_id)} className=' px-5 py-1 text-sm my-1 ml-5 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Done</button>}</>}
            </div>

        </div>
    )
}

export const SellerOrders = ({ userId, orders }) => {
    const [send,setSend] =useState({
        deliveredfile:{
            filename:'',
            content:''
        }
    })
    const { _id, cardname, client, freelancer, deliveredfile, createdAt, plan, price,delivery, title, description, status } = orders
    const { filename, content } = orders.sendedfile
    console.log(freelancer.name)
    // console.log(orders)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // reader.result contains the base64 encoded string
            setSend({
                ...send,
                deliveredfile: {
                    filename: file.name,
                    content: reader.result,
                },
            });

        };

        if (file) {
            reader.readAsDataURL(file); // This will trigger the onloadend event when the file reading is complete.
        }
    };

    const downloadFile = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/order/${id}`, {
                responseType: 'blob', // Set the response type to 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = filename; // Set the filename for download
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleSubmit = async(id)=>{
        console.log(send)
        const res = await axios.put(`http://localhost:3000/api/order/${id}`,send)
        console.log(res)
      }


    return (

        
        <div className=' w-[800px] h-auto p-3 bg-white shadow-md shadow-purple-200 rounded-md m-2'>
            {/** seller info */}
            <div className='flex justify-between items-center mx-6 my-2 border-b-2 border-purple-700 pb-4 px-2 '>
                <div className=' flex items-center w-80'>
                    <Image className=' h-20 w-20 rounded-full border border-purple-700 ml-1' src={client.image} width={60} height={60} />
                    <div className='ml-4'>
                        <h6 className='text-xl font-bold text-gray-600'>{client.name}</h6>
                        <div className='flex text-yellow-500'><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /><AiFillStar size={16} /></div>
                        <h1 className=' text-yellow-500 text-[18px] font-bold flex items-center'> 5.0 <span className=' text-[12px] pt-1 text-gray-600 font-medium'> (40)</span></h1>
                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-xl text-purple-700'>{plan} plan</h1>
                    <h1 className=' text-4xl font-bold'>₹{price}</h1>
                </div>
            </div>
            {/** more info */}
            <div className='mx-6 my-2 pb-2 border-b-2 border-purple-700'>
            <h1 className=' font-bold text-xl'>{cardname}</h1>
            <h1 className=' font-bold text-xl'>Title: {title}</h1>
                <section className=' text-[17px] text-gray-500 py-2 border-b border-gray-600'>Description: {description}</section>
                <div className=' text-[15px] font-medium text-black flex justify-between py-1 px-10'><h1 className=''>Order Date</h1><h1>{createdAt}</h1></div>
                <div className=' text-[15px] font-medium text-black flex justify-between py-1 px-10'><h1 className=''>status</h1><h1>{status === false ? <b className=' text-green-500'>Active</b> : <b className=' text-purple-700'>Completed</b>}</h1></div>
                <div className=' text-[15px] font-medium text-black flex justify-between py-1 px-10'><h1 className=''>Sended File</h1>
                    <div className=' flex items-center'>
                        <h1 className=' text-sm '>{filename}</h1><button onClick={() => downloadFile(_id)} className=' px-5 py-1 text-sm my-1 ml-5 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button>
                    </div>
                </div>
                <div className='text-[15px] font-medium text-black flex justify-between items-center py-1 px-10'><h1 className=''>Deliver file <small className=' font-thin'>(single file zip or other files)</small></h1>
                    {deliveredfile ? <h1 className=' font-bold text-purple-700'>File Delivered</h1> 
                    :<div className=' flex items-center'>
                        <input type="file" className='-mr-16' onChange={handleFileChange} name="" id="" />
                        <button onClick={() => handleSubmit(_id)} className=' px-5 py-1 text-sm my-1 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Send</button>
                    </div>}
                </div>
                {/* <div className=' ml-5 text-[17px] font-medium text-gray-600'>
                    <h1 className='py-1'>Orderd date</h1>
                    <h1 className='py-1'>Delivery date</h1>
                    <h1 className='py-1'>Orderd Status</h1>
                    <h1 className='py-1'>Received file</h1>
                    <h1 className='py-1'>send file</h1>
                </div>
                <div className='mr-5 text-[17px] font-bold'>
                    <h1 className='py-1'>26-10-2023</h1>
                    <h1 className='py-1'>40-04-2023</h1>
                    <h1 className='py-1'>ACTIVE</h1>
                    <h1 className='py-1'>{filename}<button onClick={() => downloadFile(_id)} className=' px-5 py-1 text-sm my-1 ml-5 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Download</button></h1>
                    <h1 className='py-1'>
                        <input type="file" onChange={handleFileChange} name="" id="" />
                        <button onClick={()=>handleSubmit(_id)} className=' px-5 py-1 text-sm my-1 ml-5 rounded-md text-white bg-purple-700 hover:bg-purple-500 shadow-sm shadow-gray-400'>Send</button>
                    </h1>

                </div> */}
            </div>

            {/** more view */}
            <div className=' flex justify-between items-center mx-8 '>
                <span className=' font-bold text-lg text-black'>Duration {delivery} days</span>
                <span className=' text-sm font-bold py-1 px-5 rounded-sm shadow-sm shadow-purple-500  text-green-500'>{status === false ?<b> Active</b> : <b className='text-sm font-bold text-gray-700 '>Completed</b>}</span>
            
            </div>

        </div>
        
    )
}

export const BuyerNav = () => {
    return (
        <div className=' w-[97%] h-12 py-1 px-4 bg-white mx-5 rounded-md shadow-md shadow-purple-200 flex justify-start '>
            <div className=' w-[40%] ml-[8%] flex justify-between font-bold text-[18px] text-gray-600 '>
                <button>Orders</button>
                <button>Message</button>
                <button>Completed</button>
            </div>
        </div>
    )
}


export default Orders
