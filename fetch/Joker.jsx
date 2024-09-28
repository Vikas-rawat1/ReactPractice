import React from "react";
import { useState } from "react";

function Joker() {
  const [joke, setJoke] = useState();
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const newJoke = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    // console.log(URL);
    setJoke(jsonResponse.punchline);
  };

  return (
    <div>
      <h1>Jokes</h1>
      <h1>{joke.setup}</h1>
      <h1>{joke.punchline}</h1>

      <button onClick={newJoke}>New Joke</button>
    </div>
  );
}

export default Joker;
