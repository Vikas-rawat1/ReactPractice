import React, { useState } from "react";

function Todo() {
  let [inputVal, setInputVal] = useState("");
  let [todo, setTodo] = useState([]);

  console.log(inputVal);
  // setInputVal(inputVal);

  let addNewTask = () => {
    console.log("New task added");
    setTodo([...todo, inputVal]);
    setInputVal(""); //clear the input field after adding a new task
  };

  return (
    <>
      <div>
        <input
          style={{ outline: "none", height: "4vw" }}
          type="text"
          placeholder="Add a Task"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          onClick={addNewTask}
          style={{ backgroundColor: "blue", outline: "none" }}
        >
          Add
        </button>
        <div>
          <ul>
            {todo.map((val, inx) => {
              return <li key={inx}>{val}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
