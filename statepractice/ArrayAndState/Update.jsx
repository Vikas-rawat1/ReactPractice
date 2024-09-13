import React, { useState } from "react";

function Update() {
  const [inputVal, setInputVal] = useState("");
  console.log(inputVal)
  return (
    <>
      {/* Update The array */}
      <div>
        <input type="text" placeholder="Add a task" value={inputVal} onChange={(e)=>console.log(e.target.value)} />
        <button>ADD</button>
      </div>
    </>
  );
}

export default Update;
