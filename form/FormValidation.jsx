import React from "react";

const FormValidation = () => {
  return (
    <div>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter text"
        id="fullName" //🌟🌟 id dene se jaise hi ham username pe click karenege to username HIGHLIGHT ho jayega
        value={fullName}
        onChange={handleFullName}
      />
      <button>Submit</button>
    </div>
  );
};

export default FormValidation;
