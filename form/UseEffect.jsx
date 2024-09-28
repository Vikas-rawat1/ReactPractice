import React, { useState } from "react";
import { useEffect } from "react";

function UseEffect() {
  const [countX, setCountX] = useState(0);
  let handleClick = () => {
    setCountX(countX + 1);
  };
  useEffect(function printSomething() {
    console.log("This is effect");
  }); //jab bhi koi bhi component render hoga to ye bhi render hoga

  //passing the dependiences

  // this are nothing but our state variables
  return (
    <>
      <h1>count={countX}</h1>
      <button onClick={handleClick}>Count</button>
    </>
  );
}

export default UseEffect;
