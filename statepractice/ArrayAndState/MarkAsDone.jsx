import React, { useState } from "react";

function MarkAsDone() {
  const [inputVal, setInputVal] = useState("");
  // console.log(inputVal);
  const [task, setTask] = useState([]);

  let handleAddClick = () => {
    setTask([...task, inputVal]);
    setInputVal("");
    // console.log(task)
  };

  let UpdateAllUpperCase=()=>{
    setTask(task.map((task)=>task.toUpperCase()))
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>

      <div>
        {task.map((task, index) => (
          <p>{task}</p>
        ))}
      </div>
    </>
  );
}

export default MarkAsDone;
