import React from "react";

function Comments() {
  return (
    <div>
      <h1>Give a Comment</h1>
      <form action="">
          <input type="text" placeholder="username" />
          <textarea>Remarks</textarea>
        <input type="number" placeholder="number" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Comments;
