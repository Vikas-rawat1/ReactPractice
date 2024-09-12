import React, { useState } from "react";

function Delete() {
  const [deleteItem, setDeleteItem] = useState(["hello","vikas"]);
  return (
    <>
      <div>
        <h1>Delete data from array</h1>
        <p>This is a delete component.</p>

        <div>
          {deleteItem.map((val, indx) => (
            <div key={indx}>
              <li>{val}</li>
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
