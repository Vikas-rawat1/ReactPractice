import React, { useState } from "react";

function HomeWork() {
  const [random, setRandom] = useState();
  let genrateRandomNumber = () => {
    setRandom(Math.random() * 100);
    console.log(random)
  };

  return (
    <div>
      <p>Lottery</p>
      <p>Lottery Ticket = </p>
      <button onClick={genrateRandomNumber}>Generate Ticket</button>
    </div>
  );
}

export default HomeWork;
