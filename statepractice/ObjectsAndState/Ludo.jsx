import { useState } from "react";

function Ludo() {
  //instead of creating a sperate STATE we will create a object
  const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

  return (
    <>
      <div>
        <p>Blue Move ={moves.blue}</p>
        <button>+1</button>
        <p>Yellow Move ={moves.yellow}</p>
        <button>+1</button>
        <p>Green Move ={moves.blue}</p>
        <button>+1</button>
        <p>Red Move ={moves.blue}</p>
        <button>+1</button>
      </div>
    </>
  );
}
export default Ludo;
