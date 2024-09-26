import React, { useState } from "react";

function Comments() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });
  let handleInputChange = (e) => {
    setFormData(e.target.value);
    // console.log(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* Not focusing on styles here only focusing on logic */}
      <h1>Give a Comment</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <textarea
          placeholder="Remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <input
          type="number"
          placeholder="Rating"
          style={{ width: "10vw" }}
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button>Add Commet</button>
      </form>
    </div>
  );
}

export default Comments;
