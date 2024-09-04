import { RiHeartFill } from "@remixicon/react";
import { useState } from "react";

function Like() {
  const [isLiked, setIsLiked] = useState(true);

  const handleLikedChange = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <p>{isLiked}</p>
      <RiHeartFill size={36} color="white" className="my-icon" />
      <RiHeartFill size={36} color="red" className="my-icon" />
    </>
  );
}

export default Like;
