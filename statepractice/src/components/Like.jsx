import { RiHeartFill } from "@remixicon/react";


function Like() {
  return (
    <>
      <RiHeartFill
        size={36} 
        color="red" // set `fill` color
        className="my-icon" // add custom class name
      />
    </>
  );
}

export default Like;
