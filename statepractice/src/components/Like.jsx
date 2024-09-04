import { RiHeartFill } from "@remixicon/react";
import React from "react";

function Like() {
  return (
    <div>
      
      <RiHeartFill
        size={36} // set custom `width` and `height`
        color="red" // set `fill` color
        className="my-icon" // add custom class name
      />
    </div>
  );
}

export default Like;
