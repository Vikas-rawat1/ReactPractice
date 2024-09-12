// import { RiDeleteBin2Fill } from "@remixicon/react";
// import React, { useState } from "react";

// function Todo() {
//   let [inputVal, setInputVal] = useState("");
//   let [todo, setTodo] = useState([]);

//   console.log(inputVal);
//   // setInputVal(inputVal);

//   let addNewTask = () => {
//     // console.log("New task added");
//   if(inputVal.trim()===""){
//     alert("Please enter a task name")
//     return;
//   }

//     setTodo([...todo, inputVal]);
//     setInputVal(""); //clear the input field after adding a new task\

//   };

//   return (
//     <>
//       <div>
//         <input
//           style={{
//             outline: "none",
//             height: "3vw",
//           }}
//           type="text"
//           placeholder="Add a Task"
//           value={inputVal}
//           onChange={(e) => {
//             setInputVal(e.target.value);
//           }}
//         />
//         <button
//           onClick={addNewTask}
//           style={{
//             backgroundColor: "blue",
//             outline: "none",
//             marginLeft: "2vw",
//           }}
//         >
//           Add
//         </button>
//         <div>
//           <ul>
//             {todo.map((val, inx) => {
//               return (
//                 <div key={inx}>
//                   <div
//                     style={{
//                       display: "flex",
//                       height: "4vw",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       gap: "2vw",
//                     }}
//                   >
//                     <li style={{ listStyle: "none" }}>{val}</li>
//                     <button
//                       // todo.splice(index, 1) // this will also remove the item from the array but not from the UI
//                       // instead of this, we use filter method which returns a new array without the item at the specified index
//                       // and does not mutate the original array.
//                       onClick={() => {
//                         setTodo(todo.filter((val, index) => index !== inx));
//                       }}
//                       style={{ backgroundColor: "transparent" }}
//                     >
//                       <RiDeleteBin2Fill />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Todo;

import { RiDeleteBin2Fill } from "@remixicon/react";
import React, { useState } from "react";

function Todo() {
  const [inputval, setInputVal] = useState("");
  const [addTask, setaddTask] = useState([]);
  // console.log(inputval);

  let newTask = () => {
    setaddTask([...addTask, inputval]);
    // setaddTask(addTask);
    // setInputVal("")
  };

  return (
    <>
      <input
        style={{ outline: "none", height: "3vw" }}
        type="text"
        placeholder="Add a task"
        value={inputval}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        onClick={newTask}
        style={{ backgroundColor: "blue", oultine: "none" }}
      >
        Add
      </button>
      <div>
        <ul>
          {addTask.map((task, inx) => {
            return (
              <div key={inx}>
                <li>{task}</li>
                {/* //                         setTodo(todo.filter((val, index) => index !== inx)); */}

                <button
                  onClick={()=>setaddTask(
                    addTask.filter((val, index) => index !== inx)
                  )}
                >
                  <RiDeleteBin2Fill />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
