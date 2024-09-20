import React from "react";

function HandlingMultipleInputs() {
  // we'll create a common handler() for multiple input elements
  return (
    <div>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter text"
        id="fullName"
        // value={fullName}
        // onChange={}
      />
      <button>Submit</button>
    </div>
  );
}

export default HandlingMultipleInputs;
