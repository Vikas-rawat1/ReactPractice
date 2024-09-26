import React, { useState } from "react";

function Comments() {
  let [formData,setFormData]=useState({
    username:'',
    remarks:'',
    rating:''
  })
  return (
    <div>
      {/* Not focusing on styles here only focusing on logic */}
      <h1>Give a Comment</h1>
      <form action="">
        <input type="text" placeholder="username"  value={formData.username}/>
        <br />
        <br />
        <textarea placeholder="Remarks" value={formData.remarks}></textarea>
        <br />
        <br />
        <br />
        <input type="number" placeholder="Rating" style={{width:"10vw"}} min={1} max={5} value={formData.rating}/>
        <br />
        <br />
        <button>Add Commet</button>
      </form>
    </div>
  );
}

export default Comments;
