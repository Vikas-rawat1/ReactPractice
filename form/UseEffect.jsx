import React, { useState } from "react";
import { useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };
  useEffect();
  return (
    <>
      <h1>count={count}</h1>
      <button onClick={handleClick}>Count</button>
    </>
  );
}

export default UseEffect;
