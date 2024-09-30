import React, { useState } from "react";

function Delete() {
  // const [deleteItem, setDeleteItem] = useState(["hello", "vikas"]);
  const [addItem, setAddItem] = useState("");
  const [deleteItem, setDeleteItem] = useState([]);

  const handleDeletion = () => {
    if (addItem.trim() === "") {
      alert("Please enter a task name");
      return;
    }

    setDeleteItem([...deleteItem, addItem]);
    setAddItem("");
  };

  return (
    <>
      <div>
        <h1>Delete data from array</h1>
        <p>This is a delete component.</p>

        <input
          type="text"
          placeholder="Add something for DELETE"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
        />
        <button onClick={handleDeletion}>ADD</button>

        <div>
          {deleteItem.map((val, indx) => (
            <div key={indx}>
              <p>{val}</p>
              <button
                onClick={() => {
                  return setDeleteItem(
                    deleteItem.filter((val, index) => index !== indx)
                  );
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Delete;
