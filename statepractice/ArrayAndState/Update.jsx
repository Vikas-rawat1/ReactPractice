import React, { useState } from "react";

function Update() {
  const [inputVal, setInputVal] = useState("dsf");
  const [task, setTask] = useState([]);

  let handleClick = () => {
    setTask([...task, inputVal]);
  };

  // console.log(inputVal)
  return (
    <>
      {/* Update The array */}
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleClick}>ADD</button>
        <div>
          {task.map((val, inx) => (
            <p>{val}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Update;
