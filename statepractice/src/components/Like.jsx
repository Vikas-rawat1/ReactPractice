import React from "react";

function Like() {
  return (
    <div>
      {" "}
      <RiHeartFil
        size={36} // set custom `width` and `height`
        color="red" // set `fill` color
        className="my-icon" // add custom class name
      />
    </div>
  );
}

export default Like;
