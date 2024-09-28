import React, { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>count={count}</h1>
      <button onClick={handleClick}>Count</button>
    </>
  );
}

export default UseEffect;
