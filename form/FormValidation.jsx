import React, { useState } from "react";

const FormValidation = () => {
  const [fullName, setFullName] = useState("");
  //🌟🌟 react ne  input value ko internally control kar liya isliye use hame  CONTROLL COMPONENTS khate hai, sab state variable ke reason se hi change huwa kuki react state ko janata hai  agar hame koi value janni ho to state ki value ko deko 🌟🌟
  let handleFullName = (e) => {
    //  console.log((e.target))
    setFullName(e.target.value);
  };

  return (
    //THIS IS CLIENT SIDE VALIDATION

    <div style={{ marginTop: "2vw", marginLeft: "2vw" }}>
      <label htmlFor="fullName">Full Name</label>
      <br />
      <form action="">
        <input
          style={{ marginTop: ".5vw", border: "1px solid black" }}
          type="text"
          placeholder="Enter text"
          id="fullName" //🌟🌟 id dene se jaise hi ham username pe click karenege to username HIGHLIGHT ho jayega
          value={fullName}
          onChange={handleFullName}
          required
        />
        <br />
        <button
          style={{
            marginTop: "1vw",
            background: "blue",
            padding: ".5vw",
            borderRadius: ".7vw",
          }}
        > 
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
