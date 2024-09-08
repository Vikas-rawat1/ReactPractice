import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // const handleClickOnCount = () => {
  //   setCount(count + 1);
  // };
  
  // 🌟🌟CALLBACK USE
  let counter = () => {
    setCount(
      (inCount) =>
        inCount + 2 // Return the new value of count after incrementing it
    );
    setCount(
      (inCount) =>
        inCount + 2 // Return the new value of count after incrementing it
    );
  };

  // console.log(count);
  return (
    <div>
      <button onClick={counter}>Click me {count}</button>
      {/* <button onClick={() => setCount(count + 1)}>Click me {count}</button> */}
    </div>
  );
}

export default Counter;
