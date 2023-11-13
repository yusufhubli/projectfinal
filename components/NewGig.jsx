'use client'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'



const NewGig = ({ userId }) => {
  console.log('newgig', userId)
  const [gig, setGig] = useState({
    cardname: "",
    description: "",
    servicetype: "",
    images: "",
    plans: {
      basic: {
        planname: "",
        description: "",
        delivery: "",
        revision: "",
        price: "",
      },
      standard: {
        planname: "",
        description: "",
        delivery: "",
        revision: "",
        price: "",
      },
      premium: {
        planname: "",
        description: "",
        delivery: "",
        revision: "",
        price: "",
      },

    },
    sellerId: userId,

  })

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target;

    // If the name contains a dot (.), it's a nested property
    if (name.includes('.')) {
      const keys = name.split('.');
      const updatedData = await updateDeepGigData(gig, keys, value, files);
      setGig(updatedData);
    } else {
      if (files && files.length) {
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          setGig((prevGig) => ({
            ...prevGig,
            [name]: reader.result,
          }));
        };

        reader.readAsDataURL(file);
      } else {
        setGig((prevGig) => ({
          ...prevGig,
          [name]: value,
        }));
      }
    }
  };

  const updateDeepGigData = (data, keys, value, files) => {
    const [currentKey, ...restKeys] = keys;

    if (keys.length === 1) {
      if (files && files.length) {
        const file = files[0];
        const reader = new FileReader();

        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve({
              ...data,
              [currentKey]: reader.result,
            });
          };
          reader.readAsDataURL(file);
        });
      } else {
        return Promise.resolve({
          ...data,
          [currentKey]: value,
        });
      }
    } else {
      const currentData = data[currentKey] || {};

      return updateDeepGigData(currentData, restKeys, value, files).then((updatedData) => ({
        ...data,
        [currentKey]: updatedData,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/createcard", gig)
      console.log(res.data)
      alert(res.data.message)
    } catch (error) {
      console.log(error)
    }

    // Do something with the gig object, for example, submit it to a server or use it in some other way.
    //console.log(gig);
  };


  let num = 0
  //console.log(gig)
  let slide = ["static-div", "first-div", "second-div", "third-div"]
  const next = () => {
    const div = document.getElementById("gig")
    num++
    if (num < slide.length) {
      div.classList.add(slide[num])
    }
    console.log(num)
  }
  const back = () => {
    const div = document.getElementById("gig")
    div.classList.remove(slide[num])
    num--
    if (num > 0) {
      div.classList.add(slide[num])
    }
    console.log(num)
  }
  return (
    <div className=' bg-white w-[335px] md:w-[600px] h-auto overflow-hidden my-4 py-4 md:py-8 rounded-sm border border-purple-300'>
      <form onSubmit={handleSubmit}>
        <div id='gig' className='w-[1340px] md:w-[2400px] flex '>
          {/* first div */}
          <div className=' w-[335px] md:w-[600px] h-auto'>
            <h1 className='text-purple-700 font-bold mb-2 text-center text-xl'>Create Gig</h1>

            <div className='ml-6 md:ml-24'>
              <h4 className='font-medium ml-1 my-1 text-[13px]'>Gig Name</h4>
              <input type="text"
                name='cardname'
                value={gig.cardname}
                onChange={handleInputChange}
                className=' w-72 md:w-[400px] text-sm  mb-1 rounded-sm outline-none border-[1.5px] border-purple-600 p-1' />
            </div>

            <div className='ml-6 md:ml-24'>
              <h4 className='font-medium my-1 ml-1 text-[13px] '>Description</h4>
              <textarea rows={4} type="text"
                name='description'
                value={gig.description}
                onChange={handleInputChange}
                className='w-72 md:w-[400px] outline-none text-sm  mb-1 rounded-sm border-[1.5px] p-1 border-purple-600 ' />
            </div>
            <div className='ml-6 md:ml-24'>
              <select name="servicetype" id=""
               value={gig.servicetype} onChange={handleInputChange} 
               className='w-72 md:w-[400px] outline-none font-medium my-2 text-sm rounded-sm border-[1.5px] border-purple-700 p-1'>
                <option value="web development">web development</option>
                <option value="app development">app development</option>
                <option value="web design">web design</option>
                <option value="software development">software development</option>
              </select>
            </div>
            <div className='md:ml-20 pl-1 my-2'>
              <div className=' relative border-[1.5px] border-purple-700 rounded-sm w-40 h-24 ml-3 '>
                <h5 className=' absolute text-sm font-sans font-medium ml-2 mt-1'>Add Image</h5>
                <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
                <input type="file" name="images" onChange={handleInputChange} accept='image/*' className=' absolute top-9 opacity-0' id="" />
              </div>
            </div>
            <div className=' w-[335px] md:w-[600px] flex justify-end pt-5 pr-5 md:pr-10'>
              <section onClick={next} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-5  shadow-sm shadow-gray-500'>Next</section>
            </div>
          </div>
          {/* second div */}
          <div className=' w-[335px] md:w-[600px] h-auto'>
            <div className='py-1'>
              <h1 className='text-lg font-bold text-center my-4 text-purple-700'>Basic Plan</h1>
              <div className=' ml-6 md:ml-24'>
                <input type="text"
                  name="plans.basic.planname"
                  value={gig.plans.basic.planname}
                  onChange={handleInputChange}
                  placeholder='Plan Name' className='w-72 md:w-[400px] mb-2 rounded-sm outline-none border-[1.5px] border-purple-700 text-sm p-1 placeholder:text-black' />
                <textarea name="plans.basic.description" id=""
                  value={gig.plans.basic.description}
                  onChange={handleInputChange}
                  className='w-72 md:w-[400px] mb-2 text-sm rounded-sm outline-none border-[1.5px] border-purple-700 p-1 my-2 placeholder:text-purple-500' cols="30" rows="4" placeholder={`Plan Description (list manner)`} />
                <div className='my-1 flex'>
                  <div>
                    <h4 className='font-bold my-2 text-[13px] text-purple-700'>Delivery</h4>
                    <input type='text'
                      name='plans.basic.delivery'
                      value={gig.plans.basic.delivery}
                      onChange={handleInputChange}
                      className=' mb-2 text-sm rounded-sm outline-none border-[1.5px] w-72 md:w-[400px] border-purple-700 p-1 font-bold' />
                  </div>
                  <div>
                    <h4 className='font-bold ml-14 my-2 hidden text-[13px] text-purple-700'>Revisions</h4>
                    <input type="text"
                      name='plans.basic.revision'
                      value={gig.plans.basic.revision}
                      onChange={handleInputChange}
                      className=' hidden w-72 md:w-[400px] mb-2 ml-14 text-sm rounded-sm outline-none border-[1.5px] border-purple-700 p-1 placeholder:text-purple-700' />
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-bold my-2 text-[13px] text-purple-700'>Price</h4>
                  <input type="text"
                    name='plans.basic.price'
                    value={gig.plans.basic.price}
                    onChange={handleInputChange}
                    className=' text-sm w-72 md:w-[400px] mb-2 rounded-sm outline-none border-[1.5px] border-purple-700 p-1 placeholder:text-purple-700' />
                </div>
              </div>
            </div>
            <div className=' w-[335px] md:w-[600px] flex justify-between px-6 md:px-10 my-2'>
              <section onClick={back} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Back</section>
              <section onClick={next} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Next</section>
            </div>
          </div>
          {/* third div */}
          <div className=' w-[335px] md:w-[600px] h-auto'>
            <div className=' py-1'>
              <h1 className='text-lg font-bold text-center my-4 text-purple-700'>Standard Plan</h1>
              <div className='ml-6 md:ml-24'>
                <input type="text"
                  name='plans.standard.planname'
                  value={gig.plans.standard.planname}
                  onChange={handleInputChange}
                  placeholder='Plan Name' className='w-72 md:w-[400px] mb-2 rounded-sm outline-none border-[1.5px] border-purple-700 text-sm p-1 placeholder:text-black' />
                <textarea name="plans.standard.description" id=""
                  value={gig.plans.standard.description}
                  onChange={handleInputChange}
                  className='w-72 md:w-[400px] mb-2 text-sm rounded-sm outline-none border-[1.5px] border-purple-700 p-1 my-2 placeholder:text-black' cols="30" rows="4" placeholder={`Plan Description (list manner)`} />
                <div className='my-1 flex'>
                  <div>
                    <h4 className='font-medium my-1 ml-1 text-[13px]'>Delivery</h4>
                    <input type='text'
                      name='plans.standard.delivery'
                      value={gig.plans.standard.delivery}
                      onChange={handleInputChange}
                      className=' mb-2 text-sm rounded-sm outline-none border-[1.5px] w-72 md:w-[400px] border-purple-700 p-1 font-medium' />
                  </div>
                  <div>
                    <h4 className='font-medium ml-14 my-2 hidden text-[13px] '>Revisions</h4>
                    <input type="text"
                      name='plans.standard.revision'
                      value={gig.plans.standard.revision}
                      onChange={handleInputChange}
                      className=' hidden w-72 md:w-[400px] mb-2 ml-14 text-sm rounded-sm outline-none border-[1.5px] border-purple-700 p-1 placeholder:text-purple-700' />
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-medium my-1 ml-1 text-[13px]'>Price</h4>
                  <input type="text"
                    name='plans.standard.price'
                    value={gig.plans.standard.price}
                    onChange={handleInputChange}
                    className=' text-sm w-72 md:w-[400px] mb-2 rounded-sm outline-none border-[1.5px] border-purple-700 p-1 placeholder:text-purple-700' />
                </div>
              </div>
            </div>
            <div className=' w-[335px] md:w-[600px] flex justify-between px-6 md:px-10 my-2'>
              <section onClick={back} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Back</section>
              <section onClick={next} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Next</section>
            </div>
          </div>
          {/* forth div */}
          <div className=' w-[335px] md:w-[600px] h-auto'>
            <div className=' py-1'>
              <h1 className='text-lg font-bold text-center my-4 text-purple-700'>Premium Plan</h1>
              <div className='ml-6 md:ml-24'>
                <input type="text"
                  name='plans.premium.planname'
                  value={gig.plans.premium.planname}
                  onChange={handleInputChange}
                  placeholder='Plan Name' className='w-72 md:w-[400px] mb-2 rounded-sm outline-none border-[1.5px] border-purple-700 text-sm p-1 placeholder:text-black' />
                <textarea name="plans.premium.description" id=""
                  value={gig.plans.premium.description}
                  onChange={handleInputChange}
                  className='w-72 md:w-[400px] mb-2 text-sm rounded-sm outline-none border-[1.5px] border-purple-700 p-1 my-2 placeholder:text-black' cols="30" rows="4" placeholder={`Plan Description (list manner)`} />
                <div className='my-1 flex'>
                  <div>
                    <h4 className='font-medium my-1 ml-1 text-[13px]'>Delivery</h4>
                    <input type='text'
                      name='plans.premium.delivery'
                      value={gig.plans.premium.delivery}
                      onChange={handleInputChange}
                      className=' mb-2 text-sm rounded-sm outline-none border-[1.5px] w-72 md:w-[400px] border-purple-700 p-1 font-bold' />
                  </div>
                  <div>
                    <h4 className='font-bold hidden ml-1 text-[13px]'>Revisions</h4>
                    <input type="text"
                      name='plans.premium.revision'
                      value={gig.plans.premium.revision}
                      onChange={handleInputChange}
                      className=' hidden w-72 md:w-[400px] mb-2 ml-14 text-sm rounded-sm outline-none border-[1.5px] border-purple-700 p-1 placeholder:text-purple-700' />
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-medium my-1 ml-1 text-[13px]'>Price</h4>
                  <input type="text"
                    name='plans.premium.price'
                    value={gig.plans.premium.price}
                    onChange={handleInputChange}
                    className=' text-sm w-72 md:w-[400px] mb-2 rounded-sm outline-none border-[1.5px] border-purple-700 p-1 placeholder:text-purple-700' />
                </div>
              </div>
            </div>
            <div className=' w-[335px] md:w-[600px] flex justify-between px-6 md:px-10 my-2'>
              <section onClick={back} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Back</section>
              <button type='submit' className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Create</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export const UpdateGig = ({ card }) => {
  console.log('updategig', card._id)
  const [gig, setGig] = useState({
    cardname: card.cardname,
    description: card.description,
    servicetype: card.servicetype,
    images: card.images,
    plans: {
      basic: {
        planname: card.plans.basic.planname,
        description: card.plans.basic.description,
        delivery: card.plans.basic.delivery,
        revision: card.plans.basic.revision,
        price: card.plans.basic.price,
      },
      standard: {
        planname: card.plans.standard.planname,
        description: card.plans.standard.description,
        delivery: card.plans.standard.delivery,
        revision: card.plans.standard.revision,
        price: card.plans.standard.price,
      },
      premium: {
        planname: card.plans.premium.planname,
        description: card.plans.premium.description,
        delivery: card.plans.premium.delivery,
        revision: card.plans.premium.revision,
        price: card.plans.premium.price,
      },

    },
    sellerId: card.sellerId._id,

  })

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target;

    // If the name contains a dot (.), it's a nested property
    if (name.includes('.')) {
      const keys = name.split('.');
      const updatedData = await updateDeepGigData(gig, keys, value, files);
      setGig(updatedData);
    } else {
      if (files && files.length) {
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          setGig((prevGig) => ({
            ...prevGig,
            [name]: reader.result,
          }));
        };

        reader.readAsDataURL(file);
      } else {
        setGig((prevGig) => ({
          ...prevGig,
          [name]: value,
        }));
      }
    }
  };

  const updateDeepGigData = (data, keys, value, files) => {
    const [currentKey, ...restKeys] = keys;

    if (keys.length === 1) {
      if (files && files.length) {
        const file = files[0];
        const reader = new FileReader();

        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve({
              ...data,
              [currentKey]: reader.result,
            });
          };
          reader.readAsDataURL(file);
        });
      } else {
        return Promise.resolve({
          ...data,
          [currentKey]: value,
        });
      }
    } else {
      const currentData = data[currentKey] || {};

      return updateDeepGigData(currentData, restKeys, value, files).then((updatedData) => ({
        ...data,
        [currentKey]: updatedData,
      }));
    }
  };

  const handleSubmit = async (id) => {
     console.log(id)
    try {
      const res = await axios.put(`http://localhost:3000/api/createcard/${id}`, gig)
      console.log(res.data)
      alert(res.data.message)
    } catch (error) {
      console.log(error)
    }

    // Do something with the gig object, for example, submit it to a server or use it in some other way.
    //console.log(gig);
  };


  let num = 0
  //console.log(gig)
  let slide = ["static-div", "first-div", "second-div", "third-div"]
  const next = () => {
    const div = document.getElementById("gig")
    num++
    if (num < slide.length) {
      div.classList.add(slide[num])
    }
    console.log(num)
  }
  const back = () => {
    const div = document.getElementById("gig")
    div.classList.remove(slide[num])
    num--
    if (num > 0) {
      div.classList.add(slide[num])
    }
    console.log(num)
  }
  return (
    <div className=' bg-white w-[335px] h-auto overflow-hidden z-20 absolute mx-6 my-4 py-8 rounded-md shadow-sm shadow-purple-400'>
      <form onSubmit={()=>{handleSubmit(card._id)}}>
        <div id='gig' className='w-[3400px] flex '>
          {/* first div */}
          <div className=' w-[850px] h-auto'>
            <h1 className='text-purple-700 font-bold text-center mb-2 text-xl'>Update Gig</h1>

            <div className='ml-6 '>
              <h4 className='font-bold my-2 text-[12px] text-purple-700'>Gig Name</h4>
              <input type="text"
                name='cardname'
                value={gig.cardname}
                onChange={handleInputChange}
                className='w-72 text-sm mb-1 rounded-md outline-none border-2 border-purple-600 p-1' />
            </div>

            <div className='ml-6 '>
              <h4 className='font-bold my-2 text-[13px] text-purple-700'>Description</h4>
              <textarea rows={4} type="text"
                name='description'
                value={gig.description}
                onChange={handleInputChange}
                className='w-72 outline-none text-sm bg-purple-50 mb-1 rounded-md border-2 p-1 border-purple-600 ' />
            </div>
            <div className=' pl-1'>
              <select name="servicetype" id="" value={gig.servicetype} onChange={handleInputChange} className='w-72 outline-none bg-purple-50 my-2 text-sm rounded-md text-purple-700 border-2 border-purple-700 p-1'>
                <option value="web development">web development</option>
                <option value="app development">app development</option>
                <option value="web design">web design</option>
                <option value="software development">software development</option>
              </select>
            </div>
            <div className='flex  pl-3 my-2'>
              <div className=' relative border-2 border-purple-700 bg-purple-50 rounded-md w-40 h-24 ml-4 '>
                <h5 className=' absolute text-sm font-sans font-bold text-purple-700 m-1'>Add Image</h5>
                <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
                <input type="file" name="images" onChange={handleInputChange} accept='image/*' className=' absolute top-9 opacity-0' id="" />
              </div>
              {/* <div className=' relative border-2 border-purple-700 bg-purple-50 rounded-md w-40 h-24 ml-4 '>
              <h5 className=' absolute text-sm font-sans font-bold text-purple-700 m-1'>Add Image</h5>
              <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
              <input type="file" name="" className=' absolute top-9 opacity-0' id="" />
            </div>
            <div className=' relative border-2 border-purple-700 bg-purple-50 rounded-md w-40 h-24 ml-4 '>
              <h5 className=' absolute text-sm font-sans font-bold text-purple-700 m-1'>Add Image</h5>
              <AiOutlinePlus size={45} className=' text-purple-700 absolute left-14 top-7' />
              <input type="file" name="" className=' absolute top-9 opacity-0' id="" />
            </div> */}
            </div>
            <div className=' w-[850px] flex justify-end pr-10'>
              <section onClick={next} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Next</section>
            </div>
          </div>
          {/* second div */}
          <div className=' w-[850px] h-auto'>
            <div className=' py-1'>
              <h1 className='text-lg font-bold text-center my-4 text-purple-700'>Basic Plan</h1>
              <div className=' pl-1'>
                <input type="text"
                  name="plans.basic.planname"
                  value={gig.plans.basic.planname}
                  onChange={handleInputChange}
                  placeholder='Plan Name' className='w-72 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-700 text-sm p-1 placeholder:text-purple-500' />
                <textarea name="plans.basic.description" id=""
                  value={gig.plans.basic.description}
                  onChange={handleInputChange}
                  className='w-72 bg-purple-50 mb-2 text-sm rounded-md outline-none border-2 border-purple-700 p-1 my-2 placeholder:text-purple-500' cols="30" rows="4" placeholder={`Plan Description (list manner)`} />
                <div className='my-1 flex'>
                  <div>
                    <h4 className='font-bold my-2 text-[13px] text-purple-700'>Delivery</h4>
                    <input type='text'
                      name='plans.basic.delivery'
                      value={gig.plans.basic.delivery}
                      onChange={handleInputChange}
                      className=' bg-purple-50 mb-2 text-sm rounded-md outline-none border-2 w-64 border-purple-700 p-1 font-bold' />
                  </div>
                  <div>
                    <h4 className='font-bold ml-14 hidden my-2 text-[13px] text-purple-700'>Revisions</h4>
                    <input type="text"
                      name='plans.basic.revision'
                      value={gig.plans.basic.revision}
                      onChange={handleInputChange}
                      className=' bg-purple-50 hidden w-64 mb-2 ml-14 text-sm rounded-md outline-none border-2 border-purple-700 p-1 placeholder:text-purple-700' />
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-bold my-2 text-[13px] text-purple-700'>Price</h4>
                  <input type="text"
                    name='plans.basic.price'
                    value={gig.plans.basic.price}
                    onChange={handleInputChange}
                    className=' text-sm bg-purple-50 w-64 mb-2 rounded-md outline-none border-2 border-purple-700 p-1 placeholder:text-purple-700' />
                </div>
              </div>
            </div>
            <div className=' w-[850px] flex justify-between px-10'>
              <section onClick={back} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Back</section>
              <section onClick={next} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Next</section>
            </div>
          </div>
          {/* third div */}
          <div className=' w-[850px] h-auto'>
            <div className=' py-1'>
              <h1 className='text-lg font-bold text-center my-4 text-purple-700'>Standard Plan</h1>
              <div className='ml-32 pl-1'>
                <input type="text"
                  name='plans.standard.planname'
                  value={gig.plans.standard.planname}
                  onChange={handleInputChange}
                  placeholder='Plan Name' className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-700 text-sm p-1 placeholder:text-purple-500' />
                <textarea name="plans.standard.description" id=""
                  value={gig.plans.standard.description}
                  onChange={handleInputChange}
                  className='w-4/5 bg-purple-50 mb-2 text-sm rounded-md outline-none border-2 border-purple-700 p-1 my-2 placeholder:text-purple-500' cols="30" rows="4" placeholder={`Plan Description (list manner)`} />
                <div className='my-1 flex'>
                  <div>
                    <h4 className='font-bold my-2 text-[13px] text-purple-700'>Delivery</h4>
                    <input type='text'
                      name='plans.standard.delivery'
                      value={gig.plans.standard.delivery}
                      onChange={handleInputChange}
                      className=' bg-purple-50 mb-2 text-sm rounded-md outline-none border-2 w-64 border-purple-700 p-1 font-bold' />
                  </div>
                  <div>
                    <h4 className='font-bold ml-14 hidden my-2 text-[13px] text-purple-700'>Revisions</h4>
                    <input type="text"
                      name='plans.standard.revision'
                      value={gig.plans.standard.revision}
                      onChange={handleInputChange}
                      className=' bg-purple-50 hidden w-64 mb-2 ml-14 text-sm rounded-md outline-none border-2 border-purple-700 p-1 placeholder:text-purple-700' />
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-bold my-2 text-[13px] text-purple-700'>Price</h4>
                  <input type="text"
                    name='plans.standard.price'
                    value={gig.plans.standard.price}
                    onChange={handleInputChange}
                    className=' text-sm bg-purple-50 w-64 mb-2 rounded-md outline-none border-2 border-purple-700 p-1 placeholder:text-purple-700' />
                </div>
              </div>
            </div>
            <div className=' w-[850px] flex justify-between px-10'>
              <section onClick={back} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Back</section>
              <section onClick={next} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Next</section>
            </div>
          </div>
          {/* forth div */}
          <div className=' w-[850px] h-auto'>
            <div className=' py-1'>
              <h1 className='text-lg font-bold text-center my-4 text-purple-700'>Premium Plan</h1>
              <div className='ml-32 pl-1'>
                <input type="text"
                  name='plans.premium.planname'
                  value={gig.plans.premium.planname}
                  onChange={handleInputChange}
                  placeholder='Plan Name' className='w-4/5 bg-purple-50 mb-2 rounded-md outline-none border-2 border-purple-700 text-sm p-1 placeholder:text-purple-500' />
                <textarea name="plans.premium.description" id=""
                  value={gig.plans.premium.description}
                  onChange={handleInputChange}
                  className='w-4/5 bg-purple-50 mb-2 text-sm rounded-md outline-none border-2 border-purple-700 p-1 my-2 placeholder:text-purple-500' cols="30" rows="4" placeholder={`Plan Description (list manner)`} />
                <div className='my-1 flex'>
                  <div>
                    <h4 className='font-bold my-2 text-[13px] text-purple-700'>Delivery</h4>
                    <input type='text'
                      name='plans.premium.delivery'
                      value={gig.plans.premium.delivery}
                      onChange={handleInputChange}
                      className=' bg-purple-50 mb-2 text-sm rounded-md outline-none border-2 w-64 border-purple-700 p-1 font-bold' />
                  </div>
                  <div>
                    <h4 className='font-bold ml-14 hidden my-2 text-[13px] text-purple-700'>Revisions</h4>
                    <input type="text"
                      name='plans.premium.revision'
                      value={gig.plans.premium.revision}
                      onChange={handleInputChange}
                      className=' bg-purple-50 hidden w-64 mb-2 ml-14 text-sm rounded-md outline-none border-2 border-purple-700 p-1 placeholder:text-purple-700' />
                  </div>
                </div>
                <div className='my-2'>
                  <h4 className='font-bold my-2 text-[13px] text-purple-700'>Price</h4>
                  <input type="text"
                    name='plans.premium.price'
                    value={gig.plans.premium.price}
                    onChange={handleInputChange}
                    className=' text-sm bg-purple-50 w-64 mb-2 rounded-md outline-none border-2 border-purple-700 p-1 placeholder:text-purple-700' />
                </div>
              </div>
            </div>
            <div className=' w-[850px] flex justify-between px-10'>
              <section onClick={back} className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Back</section>
              <button type='submit' className=' text-sm font-medium rounded-sm text-white bg-purple-700 hover:bg-purple-600 py-1 px-6  shadow-sm shadow-gray-500'>Create</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewGig
