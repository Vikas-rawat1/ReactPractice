// import React from "react";
// import { useState } from "react";

// function HandlingMultipleInputs() {
  // const [formData, setFormData] = useState({
    // initilize with the object
    // fullName: "",
    // userName: "",
    // email: "",
    // password: "",
    // confirmPassword: "",
  // });
  // we'll create a common handler() for multiple input elements

  // let handleInputChange = (e) => {
    // let fieldname = e.target.name; //name is attribute
    // let newVal = e.target.value; //vlass is attribute
    // console.log(fieldname);//fullName,,, obj ke andar ke fieldname
    // console.log(newVal); //fullName

    // setFormData((currData) => {
      // 🌟🌟NORMAL WAY

      // currData[fieldname] = newVal; //[] ka meaning hai ki COMPUTED PROPERY NAME  iska matlab hai aap ek propery ko access karne ki kosis karna chate hai but uska excate name apkko nahi pta hai, apke paas ek variable hai jisme us propery ka name hai

      // return { ...currData }; // yaha pe hamne pure obj ko return kar diya , currData ko change kar diya and fir usi currData ko hi return kar diya

      // BETTER WAY 🌟🌟

      // return { ...currData, [fieldname]: newVal };

      //MORE BETTER WAY🌟🌟🌟

      // return { ...currData, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData)
    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }); // use for blank the input fields
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Enter text"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          name="fullName" //name ka state ke andar jo object hai use match hona mandatory hai
        />
      </div>
      <div>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter text"
          id="userName"
          value={formData.userName}
          onChange={handleInputChange}
          name="userName"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default HandlingMultipleInputs;
