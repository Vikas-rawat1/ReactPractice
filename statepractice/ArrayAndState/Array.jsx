import { useState } from "react";

function Array() {
  const [move, setMove] = useState({ blue: 0 });
  let updateBlue = () => {
    // move.blue += 1;
    setMove({ ...move, blue: (move.blue += 1) });
    // console.log(move);
  };

  let [arr, setArr] = useState(["moves pass"]); //passing / initializing with array
  return (
    <>
      <div>
        <p>Array and State Practice</p>
        <p>Moves= {move.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          Move
        </button>
      </div>
    </>
  );
}
export default Array;
