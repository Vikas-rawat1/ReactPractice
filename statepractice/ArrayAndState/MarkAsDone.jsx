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

  let UpdateAllUpperCase = () => {
    setTask(task.map((task) => task.toUpperCase()));
  };

  let handleIndividualUpperCase = (index) => {
    setTask((prev) => {
      return prev.map((task, inx) =>
        inx === index ? task.toUpperCase() : task
      );
    });
  };
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
          <div key={index}>
              {task}{" "}
              <button onClick={()=>handleIndividualUpperCase(index)}>UpperCase</button>
          </div>
        ))}
      </div>
      <button onClick={UpdateAllUpperCase}>UpperCase All</button>
    </>
  );
}

export default MarkAsDone;
