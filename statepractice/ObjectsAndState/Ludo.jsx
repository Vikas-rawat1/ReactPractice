import { useState } from "react";

function Ludo() {
  //instead of creating a sperate STATE we will create a object
  const [moves,setMoves] = useState({});

  return (
    <>
      <div>
        <p>Blue Move</p>
        <button>+1</button>
        <p>Yellow Move</p>
        <button>+1</button>
        <p>Green Move</p>
        <button>+1</button>
        <p>Red Move</p>
        <button>+1</button>
      </div>
    </>
  );
}
export default Ludo;
