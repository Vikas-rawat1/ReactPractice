import { useState } from "react";

function Ludo() {
  //instead of creating a sperate STATE we will create a object
  const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

  return (
    <>
      <div>
        <p>Blue Move ={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }}>+1</button>
        <p>Yellow Move ={moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }}>+1</button>
        <p>Green Move ={moves.green}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red Move ={moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </>
  );
}
export default Ludo;
