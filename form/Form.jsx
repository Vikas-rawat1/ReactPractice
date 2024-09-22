import { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState("");
  //🌟🌟 react ne  input value ko internally control kar liya isliye use hame  CONTROLL COMPONENTS khate hai, sab state variable ke reason se hi change huwa kuki react state ko janata hai  agar hame koi value janni ho to state ki value ko deko 🌟🌟
  let handleFullName = (e) => {
    //  console.log((e.target))
    setFullName(e.target.value);
  };

  //🌟🌟🌟🌟🌟🌟 MOST IMPORTANT🌟🌟🌟🌟🌟🌟🌟🌟

  // ✋✋✋✋✋jsx ka syntax hamesa files tak hai raheta hai aur jaise hi wo server per run hota hai to wo normal HTML run hoti hai , and internally hi jsx alag ho jata hai

  return (
    <>
      {/* 🌟🌟giving  LABEL in react for form 🌟🌟 htmlfor is used for giving a label*/}

      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter text"
        // id="fullName" //🌟🌟 id dene se jaise hi ham username pe click karenege to username HIGHLIGHT ho jayega
        // value={fullName}
        onChange={handleFullName}
      />
      <button>Submit</button>
    </>
  );
}

export default Form;
