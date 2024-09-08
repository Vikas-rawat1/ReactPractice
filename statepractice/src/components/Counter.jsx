import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
console.log("component was re-rendered")
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
    // setCount(25) //this will always constant because we declare it 25 on click
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
