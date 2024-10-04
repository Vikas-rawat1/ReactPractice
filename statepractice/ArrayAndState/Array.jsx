import { useState } from "react";
function Array() {
  const [move, setMove] = useState({ blue: 0 });
  let [arr, setArr] = useState(["no moves"]); //passing / initializing with array
  let updateBlue = () => {
    // move.blue += 1; 
    // setMove({ ...move, blue: (move.blue += 1) });  
    // console.log(move);
    //CALLBACK 🌟🌟
    setMove((prev) => ({ ...prev, blue: (move.blue += 1) }));
 
    //yaha pe push ke wjhe se possible nahi he ye setmove ke wjhe se possible ho pa raha hai kuki yha pe ye original array me changes hora hai isliye wo re-render nahi kar paa raha hai

    // arr.push("blue move");
    console.log(arr);
    // setArr([...arr,"blue moves"]);
    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
  };
 
  // setArr()
  return (
    <>
      <div>
        <p>Array and State Practice</p>
        <p>{arr}</p>
        <p>Moves= {move.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          Move
        </button>
      </div>
    </>
  );
}
export default Array;
