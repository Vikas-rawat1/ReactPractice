import React, { useState } from "react";

function Comments() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });
  let handleInputChange = (e) => {
    // setFormData(e.target.value);
    // console.log(e.target.value);

    setFormData((currData) => {
      return { ...currData, [e.target.name]: [e.target.value] };
    });

  };

  let handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
  };
  return (
    <div>
      {/* Not focusing on styles here only focusing on logic */}
      <h1>Give a Comment</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="Remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="Rating"
          style={{ width: "10vw" }}
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button>Add Commet</button>
      </form>
    </div>
  );
}

export default Comments;
