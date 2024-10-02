import { useState } from "react";

function SearchBox() {
  const [inputBox, setInputBox] = useState("");
  console.log(inputBox)
  return (
    <>
      <div className="bg-zinc-400 w-full h-screen">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </>
  );
}
export default SearchBox;
