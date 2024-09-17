import React, { useState } from "react";

function MarkAsDone() {
  const [inputVal, setInputVal] = useState("");
  // console.log(inputVal);
  const [task, setTask] = useState([]);


  let handleAddClick=()=>{
    setTask()
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={}>Add</button>

      <div>
        {task.map((task, index) => (
          <p>{task}</p>
        ))}
      </div>
    </>
  );
}

export default MarkAsDone;
