import React, { useEffect } from "react";
import { useState } from "react";
//use case of useEffect
function Joker() {
  const [joke, setJoke] = useState(null);
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const newJoke = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    // console.log(jsonResponse.setup && jsonResponse.punchline);
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };   
 
  useEffect(() => {
    async function getNewJoke() {
      const response = await fetch(URL);
      const jsonRespone = await response.json();
      console.log(jsonRespone);
      setJoke({ setup: jsonRespone.setup, punchline: jsonRespone.punchline });
    }
    getNewJoke(); //useEffect me ()=>{} arrow function se hi ham define karte hai async function ko agar nahi karenge to error dega and arrow function ke baad hame use hi call karna padta hai
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Jokes</h1>
      <div style={{ textAlign: "center" }}>
        {joke && (
          <>
            <h1>{joke.setup}</h1>
            <h1>{joke.punchline}</h1>
          </>
        )}

        <button onClick={newJoke}>New Joke</button>
      </div>
    </>
  );
}

export default Joker;
