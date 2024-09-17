import React, { useState } from "react";

function MarkAsDone() {
  const [inputVal, setInputVal] = useState("");
  console.log(inputVal);
  return (
    <>
      <input type="text" placeholder="Add task" value={inputVal} />
    </>
  );
}

export default MarkAsDone;
