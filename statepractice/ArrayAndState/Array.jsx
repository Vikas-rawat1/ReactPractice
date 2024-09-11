import { useState } from "react";

function Array() {
  const [move, setMove] = useState({ blue: 0 });
  let [arr, setArr] = useState(["moves pass"]); //passing / initializing with array
  return (
    <>
      <div>
        <p>Array and State Practice</p>
        <p>Moves= {move}</p>
        <button style={{ backgroundColor: "blue" }}>Move</button>
      </div>
    </>
  );
}
export default Array;
