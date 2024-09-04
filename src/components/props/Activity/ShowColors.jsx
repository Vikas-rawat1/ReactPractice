import React from "react";

function ShowColors({ textColor, userName }) {
  return (
    <>
      <p>
      <span>{textColor}</span>  Hello,<span>{userName}</span>
      </p>
    </>
  );
}

export default ShowColors;
