import React, { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  return <>
    <h1>count={count}</h1>
  </>;
}

export default UseEffect;
