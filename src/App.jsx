import React from "react";
import Products from "./components/props/Products";
import HelloColors from "./components/props/Activity/HelloColors";
import Cart from "./components/amazonCart/Cart";
import Button from "./components/ClickEvents/Buttons";
import Form from "./components/ClickEvents/Form";

function App() {
  return (
    <>
      {/* <Products />
      <HelloColors color="red" userName="vikas"/>
      <HelloColors color="green" userName="Rahul"/> */}

      {/* <Cart /> */}
      <Button/>
      <Form/>
    </>
  );
}

export default App;
