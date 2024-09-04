import React from "react";

function HelloColors({ color, userName }) {
  return (
    <>
      <p style={{ color }}>
        Hello,<span>{userName}</span>
      </p>
    </>
  );
}

export default HelloColors;
