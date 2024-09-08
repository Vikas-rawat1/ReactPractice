import { useState } from "react";

function init() {
  return Math.floor(Math.random() * 10) + 1;
}

function Counter() {
  const [count, setCount] = useState(init());
  console.log("component was rendered");
  // const handleClickOnCount = () => {
  //   setCount(count + 1);
  // };

  // 🌟🌟CALLBACK USE
  //RE-RENDER Tabhi hota hai jab state me changes hote hai incase of 25 25 constant h to re-render nahi hogar
  let counter = () => {
    setCount(
      (inCount) => inCount + 2 // Return the new value of count after incrementing it
    );
    // setCount(
    //   (inCount) => inCount + 2 // Return the new value of count after incrementing it
    // );
    // setCount(25); //this will always constant because we declare it 25 on click
  };

  // console.log(count);
  return (
    <div className="main">
      <p>
        This will start from the random number and increase +2 from the random
        number{" "}
      </p>
      <button onClick={counter}>Click me {count}</button>
      {/* <button onClick={() => setCount(count + 1)}>Click me {count}</button> */}
    </div>
  );
}

export default Counter;
