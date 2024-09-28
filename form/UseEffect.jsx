import React, { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState();
  return <>
    <h1>count={count}</h1>
  </>;
}

export default UseEffect;
