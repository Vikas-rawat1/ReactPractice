import React from 'react'

function UpdateOneArra() {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);

  let handleClick = (val) => {
    setTask([...task, (val = inputVal)]);
    setInputVal("");
  };

  return (
    <></>
  )
}

export default UpdateOneArra