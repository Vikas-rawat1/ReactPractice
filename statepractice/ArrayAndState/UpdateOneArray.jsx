import { RiDeleteBinFill } from "@remixicon/react";
import React, { useState } from "react";

function UpdateOneArray() {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);

  let handleClick = (val) => {
    setTask([...task, (val = inputVal)]);
    setInputVal("");
  };

  // let updateTaskUpper = () => {
    {
      // we are using older values so we are using here callback
      setTask((prevTask) => {
        return prevTask.map((task) => task.toUpperCase());
      });
    }
  };
  //SIngle upper case with index
  let upperCaseOne = (index) => {
    // console.log("Upper case one"); 
    setTask((prevTask) => {
      return prevTask.map((task, inx) =>
        inx === index ? task.toUpperCase() : task
      );
    });
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleClick}>ADD</button>
        {task.map((val, inx) => (
          <div key={inx}>
            {val}
            <button
              onClick={() => {
                return setTask(task.filter((val, index) => index !== inx));
              }}
            >
              <RiDeleteBinFill />
            </button>
            <button onClick={() => upperCaseOne(inx)}>UpperCase</button>
          </div>
        ))}

        {/* Update one todos  */}
      </div>
    </>
  );
}

export default UpdateOneArray;
