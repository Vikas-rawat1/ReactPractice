import { useState } from "react";

function SearchBox() {
  const [inputBox, setInputBox] = useState();
  return (
    <>
      <div>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </>
  );
}
export default SearchBox;
