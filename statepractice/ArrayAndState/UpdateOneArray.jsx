import React, { useState } from 'react'

function UpdateOneArray() {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);

  let handleClick = (val) => {
    setTask([...task, (val = inputVal)]);
    setInputVal("");
  };

  return (
    <> <div>
    <input
      type="text"
      placeholder="Add a task"
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
    />
    <button onClick={handleClick}>ADD</button>
    <div>
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
        </div>
      ))}
    </div>

    {/* Update one todos  */}
  </div></>
  )
}

export default UpdateOneArray