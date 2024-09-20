import { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState("");

  let handleFullName = (e) => {
  //  console.log((e.target))
  setFullName(e.target.value)
  };
  return (
    <>
      <input type="text" placeholder="Enter text" value={fullName} onChange={handleFullName}/>
      <button>Submit</button>
    </>
  );
}

export default Form;
