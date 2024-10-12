import React, { useState } from "react";

const FormValidation = () => {
  const [fullName, setFullName] = useState("");
  //🌟🌟 react ne  input value ko internally control kar liya isliye use hame  CONTROLL COMPONENTS khate hai, sab state variable ke reason se hi change huwa kuki react state ko janata hai  agar hame koi value janni ho to state ki value ko deko 🌟🌟
  let handleFullName = (e) => {
    //  console.log((e.target))
    setFullName(e.target.value);
  };

  return (
    <div style={{ marginTop: "2vw" ,marginLeft:"2vw"}}>
      <label htmlFor="fullName">Full Name</label>
      <br />
      <input
      style={{border: "1px solid black"}}
        type="text"
        placeholder="Enter text"
        id="fullName" //🌟🌟 id dene se jaise hi ham username pe click karenege to username HIGHLIGHT ho jayega
        value={fullName}
        onChange={handleFullName}
        required
      />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default FormValidation;
