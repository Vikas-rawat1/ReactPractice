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
              return (
                <div key={inx}>
                  {/* <li>
                <button onClick={() => {
                  setTodo(todo.filter((item, index) => index!== inx));
                }}>
                  Delete
                </button>
                {val}
              </li> */}
                  <div
                    style={{
                      display: "flex",
                      height: "10vw",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2vw",
                    }}
                  >
                    <li style={{ listStyle: "none" }}>{val}</li>
                    <button>Delete</button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
