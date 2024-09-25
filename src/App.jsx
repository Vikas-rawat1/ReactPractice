import React from "react";
import Products from "./components/props/Products";
import HelloColors from "./components/props/Activity/HelloColors";
import Cart from "./components/amazonCart/Cart";
import Button from "./components/ClickEvents/Buttons";
import Form from "./components/ClickEvents/Form";
import Comments from "../form/Comments";

function App() {
  return (
    <>
      {/* <Products />
      <HelloColors color="red" userName="vikas"/>
      <HelloColors color="green" userName="Rahul"/> */}

      {/* <Cart /> */}
      {/* <Button/> */}
      <Form/>
      <Comments
    </>
  );
}

export default App;
