import React, { useState } from "react";
import { useEffect } from "react";

function UseEffect() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);
  let handleClickX = () => {
    setCountX(countX + 1);
  };
  // useEffect(function printSomething() {
  //   console.log("This is effect");
  // }); //jab bhi koi bhi component render hoga to ye bhi render hoga
 
  // //passing the dependiences
  let handleClickY = () => {
    setCountX(countY + 1);
  };
  // // this are nothing but our state variables
  // useEffect(
  //   function printSomething() {
  //     console.log("This is effect");
  //   },
  //   [countX]
  // ); //passing the dependiences now the y will be not trigger

  useEffect(
    function printSomething() {
      console.log("This is effect");
    },
    [countX, countY]
  ); //for both , 1 is donot pass any depenedience or pass the both
  return (
    <>
      <h1>countX={countX}</h1>
      <button onClick={handleClickX}>Count</button>
      <h1>countY={countY}</h1>
      <button onClick={handleClickY}>Count</button>
    </>
  );
}

export default UseEffect;
