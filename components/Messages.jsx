'use client'
import React, { useEffect, useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { BiCheckDouble, BiDotsHorizontalRounded, BiSolidFilePdf,BiSolidDownload } from 'react-icons/bi'
import { MdSend, MdDelete, MdStarOutline } from 'react-icons/md'
import {io} from 'socket.io-client'

//const socket = io('http://localhost:8080')


const Testing = () => {
  const [message,setMessage] = useState({
    msg:"",
    mid:null
  })
  const [data,setData] = useState([])
  const [file,setFile] = useState()

  const handleSubmit =(e)=>{
    e.preventDefault()
    socket.emit('chat',{message})
    console.log(file)
    setMessage({Msg:"",mid:null})
    setFile("")
  }

  const getdata = async()=>{
     const res = await fetch("http://localhost:3000/messages",{
      method:"GET"
     })
     const f =  await res.json()
    // console.log(f)
     setData(f.messages)
     
    console.log(f.messages)
    }
    useEffect(()=>{
    getdata()
    },[message])
    // const df = data.filter(x=>x.time)
    // console.log(df)
  // const newd = new Date(data[0].time)
  // const gotime = (time)=>{
  //   let hour = time.getHours()
  //   let ampm = hour >=12 ? 'PM':'AM'
  //   hour = hour%12
  //   hour = hour ? hour :12
  //   let minute = time.getMinutes()
  //   minute = minute <10 ? '0'+minute : minute
  //   console.log( hour+":"+minute+" "+ampm)
  // }
  return (
    <article className=' h-auto pt-16 bg-gray-100'>
      <div className=' m-4 md:flex md:'>
        {/* contact */}
        <section className=' w-full bg-white md:w-[38%] lg:w-[30%] md:h-[460px] border border-purple-400 pb-4'>
          <div className=' flex items-center justify-between py-[15px] font-bold text-lg px-5 capitalize border-b border-purple-400'>contact history <BiDotsHorizontalRounded className=' text-3xl' /></div>
          {/* <div>
            <h2 className=' text-center py-6'>no contacts</h2>
          </div> */}
          <div className=' flex items-center justify-between bg-white py-2 px-5 md:px-3 mx-4 md:mx-3 my-1.5 rounded-sm border border-purple-400'>
            <div className=' flex items-center'>
              <img src="certificates/game.jpg" className=' w-11 h-11 rounded-full border border-purple-400' alt="" />
              <div className=' ml-2.5'>
                <h3 className=' font-medium capitalize text-sm'>yusuf</h3>
                <p className=' text-xs'>10 min ago</p>
              </div>
            </div>
            <div className=' flex items-center text-xl text-purple-700 w-12 justify-between'>
              <MdStarOutline className=' text-yellow-400' />
              <MdDelete />
            </div>
          </div>

        </section>
        {/* messages */}
        <section className='my-5 md:my-0 w-full md:w-[62%] lg:w-[70%] md:h-[460px] md:ml-4 bg-white border border-purple-400'>
          <header className=' flex items-center justify-between px-5 py-2 border-b border-purple-400'>
            <h2 className=' font-bold text-lg capitalize py-2'>messages</h2>
            <div className=' flex items-center'>
              <img src="certificates/game" className=' w-11 h-11 rounded-full bg-purple-600' alt="" />
              <h1 className=' capitalize font-medium ml-3'>yusuf</h1>
            </div>
          </header>
          <div className=' w-full h-auto'>
            <main className=' h-[340px] md:h-[335px] flex flex-col overflow-hidden overflow-y-scroll px-2 py-2'>
              {/* <h1 className=' py-7 text-center'>don't have messages</h1> */}
              { 
              data.map(msg=>{
                const {_id,Msg,time,position}=msg
               
                  return<div  className={`${position == false ?"ml-2":' md:w-60 lg:w-96 self-end mb-2'}`}>
                  <div className='w-fit py-1.5 px-3 bg-purple-500 m-2 text-white font-lato font-medium text-sm md:text-sm lg:text-[16px] rounded-md'>{Msg}</div>
                  <span className=' flex items-center -mt-2 ml-2 text-[10px] text-gray-500'><BiCheckDouble size={15} className=' text-green-500' /><p className=' ml-0.5'>11:15pm</p></span>
                </div>
                
              })}
              
             
              {/* <div className='mb-2'>
                <div className=' w-[185px] md:w-56 lg:w-72 ml-2 bg-purple-500  rounded-md overflow-hidden px-2 py-1'>
                  <div className='w-[185px] md:w-56 lg:w-72 flex items-center py-1.5 text-white'>
                    <BiSolidFilePdf className=' text-2xl md:text-3xl lg:text-[44px]' />
                    <div className=' ml-2'>
                      <h1 className=' text-[13px] md:text-[15px] lg:text-[18px] font-medium'>home.pdf</h1>
                      <p className=' text-[10px] md:text-xs lg:text-sm lg:-mt-1'>2 pages - 103kb - pdf</p>
                    </div>
                    <BiSolidDownload className=' text-[28px] lg:text-[32px] rounded-full p-1 ml-3 md:ml-5 lg:ml-11 border-[1.5px] border-white'/>
                  </div>
                </div>
                <span className=' flex items-center ml-3 text-xs text-gray-500'><BiCheckDouble size={21} className=' text-green-500' /><p className=' ml-1'>11:15pm</p></span>
              </div>
              <div className=' mb-2'>
                <div className='w-fit py-1.5 px-3 bg-purple-500 m-2 text-white text-xs md:text-sm lg:text-[16px] rounded-md'>hello world   fjjfjhfjmnfj jfjfk</div>
                <span className=' flex items-center -mt-2.5 ml-3 text-xs text-gray-500'><BiCheckDouble size={21} /><p className=' ml-1'>11:15pm</p></span>
              </div>
              <div className='w-48 md:w-60 lg:w-96 self-end mb-2'>
                <div className=' py-1.5 px-3 bg-purple-500 m-2 text-white text-xs md:text-sm lg:text-[16px] rounded-md'>hello world jgjjff dfdjdf ddlkdfd fddlfkff mfjdfdfdfkfk dfkdfd</div>
                <span className=' flex items-center -mt-2.5 ml-3 text-xs flex-row-reverse mr-3.5 text-gray-500'><BiCheckDouble size={21} /><p className=' mr-1'>11:15pm</p></span>
              </div>
              <div className='w-48 md:w-60 lg:w-96 self-end mb-2'>
                <div className=' py-1.5 px-3 bg-purple-500 m-2 text-white text-xs md:text-sm lg:text-[16px] rounded-md'>hello world jgjjff dfdjdf ddlkdfd fddlfkff mfjdfdfdfkfk dfkdfd</div>
                <span className=' flex items-center -mt-2.5 ml-3 text-xs flex-row-reverse mr-3.5 text-gray-500'><BiCheckDouble size={21} /><p className=' mr-1'>11:15pm</p></span>
              </div> */}
              {/* <div className=' w-44 md:w-52 lg:w-80 h-36 md:h-44 lg:h-60 m-2'>
                <img src="certificates/game.jpg" className=' w-44 md:w-52 lg:w-80 h-36 md:h-44 lg:h-60 border border-purple-700 rounded-md' alt="" />
                <span className=' flex items-center ml-1 text-xs text-gray-500'><BiCheckDouble size={21} /><p className=' ml-1'>11:15pm</p></span>
              </div>
              <div className=' w-44 md:w-52 lg:w-80 h-36 md:h-44 lg:h-60 m-2 self-end'>
                <img src="certificates/game.jpg" className=' w-44 md:w-52 lg:w-80 h-36 md:h-44 lg:h-60 border border-purple-700 rounded-md' alt="" />
                <span className=' flex items-center w-44 md:w-52 lg:w-80 mr-1 pr-1 text-xs text-gray-500 justify-end'><p className='mr-1'>11:15pm</p><BiCheckDouble size={21} /></span>
              </div> */}
            </main>
            <form onSubmit={handleSubmit} className=' flex items-center py-3 px-1 border-t border-purple-400'>
              <label className=' mx-3 md:text-xl text-purple-700' htmlFor="doc"><GrAttachment /></label>
              <input type="file" name="" onChange={e=>setFile(e.target.files)} id="doc" className=' hidden' />
              <input type="text" placeholder='text...' onChange={e=>setMessage({...message,msg:e.target.value})} className=' text-sm border-[1.5px] py-1 px-2 outline-none grow border-purple-600' />
              <input type="text" placeholder='text...' onChange={e=>setMessage({...message,mid:e.target.value})} className=' text-sm border-[1.5px] py-1 px-2 outline-none grow border-purple-600' />
              <button type='submit'><MdSend className=' mx-3 text-xl md:text-2xl text-purple-700' /></button>
              
            </form>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Testing