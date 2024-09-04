function Product({
  title = "Not Found",
  price = "NAN",
  features = "No Data Found",
  // featuresObj = "No Data Found",
  // features2,
}) {
  // let list = features.map((feature, index) => <li>{feature}</li>);

  // CONDITIONAL RENDERING  🌟🌟
  let isDicount = price >= 3000;

  let style = {
    padding: "2vw",
    width: "50vw",
    // backgroundColor: price >= 3000 ? "yellow" : "",
    backgroundColor: isDicount ? "yellow" : "",
  };
  return (
    <>
      <div className="mb-10" style={style}>
        <p className="text-xl">
          <span className="font-semibold">Title:</span>
          {title}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Price:</span>
          {price}
        </p>
        {/* <p>Features:{features}</p> */}
        {/* <p>FeaturesObj:{featuresObj.Durable}</p> */}
        <p className="flex">
          <p className="text-xl">
            <span className="font-semibold">Features:</span>
          </p>
          {features.map((feature, index) => (
            <p className="ml-2">{feature}</p>
          ))}
          {/* <div className="flex gap-2 list-none p-2">
           {list}
          </div> */}
        </p>
        {/* <p>Features2:{features2.a}</p> */}
        {/* <p className=" mb-10 font-bold text-red-500">{isDicount}</p> */}
        {/* <p className=" mb-10 font-bold text-red-500">{price > 3000 ? "Discount of 5%" : ""}</p> */}
        {/* 🌟🌟🌟🌟 */}
        {/* NOW IT WILL NOT CREATE A EXTRA NODE/TAG FOR BLANK CONDITONS  */}
        {/* {price > 3000 ? (
          <p className="font-bold text-red-500"> "Discount of 5%"</p>
        ) : (
          null
        )} */}

        {/* BOTH SHOULD BE TRUE IN BOTH CONDITON IN && OPERATOR */}
        {/* {price > 3000 && ( */}
        {isDicount && <p className="font-bold text-red-500"> Discount of 5%</p>}
      </div>
    </>
  );
}
export default Product;
