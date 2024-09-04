import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // const handleClickOnCount = () => {
  //   setCount(count + 1);
  // };
  // console.log(coun
  return (
    <div>
      {/* <button onClick={handleClickOnCount}>Click me {count}</button> */}
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

export default Counter;
