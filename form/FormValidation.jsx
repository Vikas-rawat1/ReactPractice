import React from "react";

const FormValidation = () => {
  const [fullName, setFullName] = useState("");
  //🌟🌟 react ne  input value ko internally control kar liya isliye use hame  CONTROLL COMPONENTS khate hai, sab state variable ke reason se hi change huwa kuki react state ko janata hai  agar hame koi value janni ho to state ki value ko deko 🌟🌟
  let handleFullName = (e) => {
    //  console.log((e.target))
    setFullName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter text"
        id="fullName" //🌟🌟 id dene se jaise hi ham username pe click karenege to username HIGHLIGHT ho jayega
        value={fullName}
        onChange={handleFullName}
      />
      <button>Submit</button>
    </div>
  );
};

export default FormValidation;
