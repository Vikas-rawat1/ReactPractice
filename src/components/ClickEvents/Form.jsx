function Form() {
  let handleFormData = (event) => {
    event.preventDefault(); // Prevent form from submitting automatically and prevent it refreshing too fast when click on submit
    console.log("Form was submitted");
  };

  return (
    <>
      {/* <form onSubmit={handleFormData}> */}
      <form>
        <input type="text" placeholder="Enter a text" />
        <button ={handleFormData}>Submit</button>
      </form>
    </>
  );
}
export default Form;

// import React from 'react'

// function Form() {
//   return (
//     <div>Form</div>
//   )
// }

// export default Form
