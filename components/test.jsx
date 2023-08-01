"use client"
import React,{ useState } from 'react';
import axios from 'axios';

const MyComponent = ({userId}) => {
 // console.log("from mycomponent",userId)
  const [gig, setGig] = useState({
    cardname: "",
    description: "",
    servicetype: "",
    images:"",
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
  });

  // const handleInputChange = (e) => {
  //   const { name, value, files } = e.target;

  //   // If the name contains a dot (.), it's a nested property
  //   if (name.includes('.')) {
  //     const keys = name.split('.');
  //     setGig((prevGig) => updateDeepGigData(prevGig, keys, value, files));
  //   } else {
  //     setGig((prevGig) => ({
  //       ...prevGig,
  //       [name]: value,
  //     }));
  //   }

 
  //  };

  
  // const updateDeepGigData = (data, keys, value, files) => {
  //   const [currentKey, ...restKeys] = keys;

  //   if (keys.length === 1) {
  //     if (files && files.length) {
  //       const file = files[0];
  //       const reader = new FileReader();

  //       reader.onloadend = () => {
  //         const dataUrl = reader.result;
  //         setGig((prevGig) => ({
  //           ...prevGig,
  //             [currentKey]: dataUrl,
  //         }));
  //       };

  //       reader.readAsDataURL(file);
       
  //     } else {
  //      return { ...data, [currentKey]: value };
        
  //     }
  //   } else {
  //     return {
  //       ...data,
  //       [currentKey]: updateDeepGigData(data[currentKey], restKeys, value, files),
  //     };
  //   }
  // };
  // const handleInputChange = (e) => {
  //   const { name, value, files } = e.target;

  //   // If the name contains a dot (.), it's a nested property
  //   if (name.includes('.')) {
  //     const keys = name.split('.');
  //     setGig((prevGig) => updateDeepGigData(prevGig, keys, value, files));
  //   } else {
  //     setGig((prevGig) => ({
  //       ...prevGig,
  //       [name]: value,
  //     }));
  //   }
  // };
  
  // const handleInputChange = async (e) => {
  //   const { name, value, files } = e.target;
  
  //   // If the name contains a dot (.), it's a nested property
  //   if (name.includes('.')) {
  //     const keys = name.split('.');
  //     const updatedData = await updateDeepGigData(gig, keys, value, files);
  //     setGig(updatedData);
  //   } else {
  //     setGig({
  //       ...gig,
  //       [name]: value,
  //     });
  //   }
  // };
  
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
   // console.log(gig)
    try {
        const res = await axios.post("http://localhost:3000/api/createcard",gig)
        console.log(res.data)   
    } catch (error) {
        console.log(error)
    }

    // Do something with the gig object, for example, submit it to a server or use it in some other way.
    console.log(gig);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for cardname, description, and servicetype */}
      <input
        type="text"
        name="cardname"
        value={gig.cardname}
        onChange={handleInputChange}
        placeholder="Card Name"
      />
      <input
        type="text"
        name="description"
        value={gig.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="servicetype"
        value={gig.servicetype}
        onChange={handleInputChange}
        placeholder="Service Type"
      />

      {/* File input fields for image URLs */}
      <input
        type="file"
        accept="image/*"
        name="images"
        onChange={handleInputChange}
      />
      {/* <input
        type="file"
        accept="image/*"
        name="images.image2"
        onChange={handleInputChange}
      />
      <input
        type="file"
        accept="image/*"
        name="images.image3"
        onChange={handleInputChange}
      /> */}

      {/* Input fields for basic plan details */}
      <input
        type="text"
        name="plans.basic.planname"
        value={gig.plans.basic.planname}
        onChange={handleInputChange}
        placeholder="Basic Plan Name"
      />
      <input
        type="text"
        name="plans.basic.description"
        value={gig.plans.basic.description}
        onChange={handleInputChange}
        placeholder="Basic Plan Description"
      />
      <input
        type="text"
        name="plans.basic.delivery"
        value={gig.plans.basic.delivery}
        onChange={handleInputChange}
        placeholder="Basic Plan Delivery Time"
      />
      <input
        type="text"
        name="plans.basic.revision"
        value={gig.plans.basic.revision}
        onChange={handleInputChange}
        placeholder="Basic Plan Revision"
      />
      <input
        type="text"
        name="plans.basic.price"
        value={gig.plans.basic.price}
        onChange={handleInputChange}
        placeholder="Basic Plan Price"
      />

      {/* Input fields for standard plan details */}
      <input
        type="text"
        name="plans.standard.planname"
        value={gig.plans.standard.planname}
        onChange={handleInputChange}
        placeholder="Standard Plan Name"
      />
      <input
        type="text"
        name="plans.standard.description"
        value={gig.plans.standard.description}
        onChange={handleInputChange}
        placeholder="Basic Plan Description"
      />
      <input
        type="text"
        name="plans.standard.delivery"
        value={gig.plans.standard.delivery}
        onChange={handleInputChange}
        placeholder="Basic Plan Delivery Time"
      />
      <input
        type="text"
        name="plans.standard.revision"
        value={gig.plans.standard.revision}
        onChange={handleInputChange}
        placeholder="Basic Plan Revision"
      />
      <input
        type="text"
        name="plans.standard.price"
        value={gig.plans.standard.price}
        onChange={handleInputChange}
        placeholder="Basic Plan Price"
      />

      {/* ... (similar to basic plan fields) ... */}

      {/* Input fields for premium plan details */}
      <input
        type="text"
        name="plans.premium.planname"
        value={gig.plans.premium.planname}
        onChange={handleInputChange}
        placeholder="Premium Plan Name"
      />
      <input
        type="text"
        name="plans.premium.description"
        value={gig.plans.premium.description}
        onChange={handleInputChange}
        placeholder="Basic Plan Description"
      />
      <input
        type="text"
        name="plans.premium.delivery"
        value={gig.plans.premium.delivery}
        onChange={handleInputChange}
        placeholder="Basic Plan Delivery Time"
      />
      <input
        type="text"
        name="plans.premium.revision"
        value={gig.plans.premium.revision}
        onChange={handleInputChange}
        placeholder="Basic Plan Revision"
      />
      <input
        type="text"
        name="plans.premium.price"
        value={gig.plans.premium.price}
        onChange={handleInputChange}
        placeholder="Basic Plan Price"
      />

      {/* ... (similar to basic plan fields) ... */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent;
