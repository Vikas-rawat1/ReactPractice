import { useState } from "react";

function SearchBox() {
  const [inputBox, setInputBox] = useState();
  console.log(inputBox)
  return (
    <>
      <div>
        <input type="text" placeholder="Search" value={inputBox}/>
        <button>Search</button>
      </div>
    </>
  );
}
export default SearchBox;
