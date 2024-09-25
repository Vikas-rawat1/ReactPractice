import React from "react";

function Comments() {
  return (
    <div>
      <h1>Give a Comment</h1>
      <form action="">
        <input type="text" placeholder="username"/>
        <button>Add</button>
        <input type="number" placeholder="number"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Comments;
