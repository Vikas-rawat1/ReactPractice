import React, { useState } from "react";

function MarkAsDone() {
  const [inputVal, setInputVal] = useState([]);
  // console.log(inputVal);
  const [task, setTask] = useState([]);

  let handleAddClick = () => {
    setTask([...task, { val: inputVal, isDone: false }]);
    setInputVal("");
    // console.log(task)
  };   
  
  let UpdateAllUpperCase = () => {
    setTask(task.map((task) => ({ ...task, val: task.val.toUpperCase() })));
  };
 
  let handleIndividualUpperCase = (index) => {
    setTask((prev) => {
      return prev.map((task, inx) =>
        inx === index ? { ...task, val: task.val.toUpperCase() } : task
      );
    }); 
  };

  //Handle mark done
  let handleMarkDone = (index) => {
    setTask((prev) => {
      return prev.map((task, inx) =>
        inx === index ? { ...task, isDone: !task.isDone } : task
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
            <span
            // style={{
            //     textDecoration: task.isDone ? "line-through" : "none",
            //     // color: task.isDone ? "white" : "white",
            //   }}
            >
              {task.val}
            </span>
            <button onClick={() => handleIndividualUpperCase(index)}>
              UpperCase
            </button>
            <button onClick={() => handleMarkDone(index)}>
              {task.isDone ? (
                <span
                  style={{
                    textDecoration: task.isDone ? "line-through" : "none",
                    // color: task.isDone ? "white" : "white",
                  }}
                >
                  Mark Done
                </span>
              ) : (
                "Mark Done"
              )}
            </button>
          </div>
        ))}
        <button onClick={UpdateAllUpperCase}>UpperCase All</button>
      </div>
    </>
  );
}

export default MarkAsDone;
