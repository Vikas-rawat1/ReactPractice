import { useState } from "react";

function SearchBox() {
  const [inputBox, setInputBox] = useState("");
  console.log(inputBox);
  return (
    <>
      <div className="bg-zinc-900 w-full h-screen">
        <input
          type="text"
          placeholder="Search"
          value={inputBox}
          onChange={(e) => setInputBox(e.target.value)}
        />
        <button className="bg-red-600 w-64 h-40">Search</button>
      </div>
    </>
  );
}
export default SearchBox;
