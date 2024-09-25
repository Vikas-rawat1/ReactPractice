import React from "react";

function Comments() {
  return (
    <div>
      <h1>Give a Comment</h1>
      <form action="">
        <div>
          <input type="text" placeholder="username" />
          <textarea>Remarks</textarea>
        </div>
        <input type="number" placeholder="number" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Comments;
