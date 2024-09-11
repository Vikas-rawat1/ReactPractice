import React, { useState } from "react";

function Todo() {
  let [inputVal, setInputVal] = useState();
  return (
    <>
      <div>
        <input
          style={{ outline: "none" }}
          type="text"
          placeholder="Add a Task"
        />
      </div>
    </>
  );
}

export default Todo;
