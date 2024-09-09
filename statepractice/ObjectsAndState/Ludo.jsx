import { useState } from "react";

function Ludo() {
  //instead of creating a sperate STATE we will create a object
  const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

  let updateBlue = () => {
    moves.blue += 1;
    moves.green += 1;
    console.log(moves)
    setMoves({...moves})// if we want to change the object state ,then we need to copy the state through spread operator and it will render it onclick 
  };

  return (
    <>
      <div>
        <p>Blue Move ={moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>+1</button>
        <p>Yellow Move ={moves.yellow}</p>
        <button style={{ backgroundColor: "yellow", color: "black" }}>
          +1
        </button>
        <p>Green Move ={moves.green}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red Move ={moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </>
  );
}
export default Ludo;
