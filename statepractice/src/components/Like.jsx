import { RiHeartFill } from "@remixicon/react";
import { useState } from "react";

function Like() {
  const [isLiked, setIsLiked] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handleLikedChange = () => {
    setIsLiked(!isLiked);
    // setClicks(clicks + 1);
  };
  return (
    <>
      <p>Clicks= {clicks}</p>
      <p onClick={handleLikedChange}>
        {isLiked ? (
          <RiHeartFill size={36} color="red" className="my-icon" />
        ) : (
          <RiHeartFill size={36} color="white" className="my-icon" />
        )}
      </p>
    </>
  );
}

export default Like;
