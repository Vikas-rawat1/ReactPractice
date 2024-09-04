import React from "react";
import Product from "./Product";

function Products() {
  // PASSING VALUES IN ARRAYS USING PROPS will not get any comma separated values from the static array

  let featuresOfMobile = ["Durable ", "Safety Enhancement ", "OIS Camera"];
  // PASSING VALUES IN OBJECT USING PROPS
  let featuresOfMobileObj = {
    Durable: "Durable ",
    SafetyEnhancement: "Safety Enhancement ",
    OISCamera: "OIS Camera",
  };

  return (
    <>
      <Product
        title="Samsung f21"
        // price={2300 / 2}
        price={2300}
        features={featuresOfMobile}
        // featuresObj={featuresOfMobileObj}
        // features2={{ a: "Android" }}
      />
      <Product title="Samsung f22" price={50000} features={featuresOfMobile} />
      <Product title="Samsung f23" price={30000} features={featuresOfMobile} />
    </>
  );
}

export default Products;
