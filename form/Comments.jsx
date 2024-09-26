import React from "react";

function Comments() {
  return (
    <div>
      {/* Not focusing on styles here only focusing on logic */}
      <h1>Give a Comment</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <br />
        <br />
        <textarea>Remarks</textarea>
        <br />
        <br />
        <br />
        <input type="number" placeholder="Rating" style={{width:"10vw"}} min={1} max={5}/>
        <br />
        <br />
        <button>Add Commet</button>
      </form>
    </div>
  );
}

export default Comments;
