import React from "react";

function Cart() {
  const cartData = [
    {  
      id: 1,
      title: "Logitech MX Master 3 Wireless Mouse",
      description:
        "Ergonomically designed wireless mouse with customizable buttons, fast scrolling, and advanced tracking.",
      oldPrice: "₹" + 7999,
      newPrice: "₹" + 6999,
    },
    {
      id: 2,
      title: "Mechanical Gaming Keyboard",
      description:
        "RGB backlit mechanical keyboard with durable switches, anti-ghosting, and customizable macros.",
      oldPrice: "₹" + 4999,
      newPrice: "₹" + 4499,
    },
    {
      id: 3,
      title: "Intel Core i7 Processor",
      description:
        "10th Gen Intel Core i7 processor with 8 cores, 16 threads, and turbo boost technology for high performance.",
      oldPrice: "₹" + 25999,
      newPrice: "₹" + 23999,
    },
    {
      id: 4,
      title: "Dell XPS 13 Laptop",
      description:
        "13-inch ultrabook with a stunning display, 11th Gen Intel Core i5 processor, and long battery life.",
      oldPrice: "₹" + 109999,
      newPrice: "₹" + 99999,
    },
    {
      id: 5,
      title: "Apple AirPods Pro",
      description:
        "Noise-cancelling wireless earbuds with adaptive EQ, transparency mode, and spatial audio for immersive sound.",
      oldPrice: "₹" + 24999,
      newPrice: "₹" + 21999,
    },
    {
      id: 6,
      title: "Samsung Galaxy Tab S7",
      description:
        "11-inch Android tablet with 120Hz display, Snapdragon 865+, and S Pen for enhanced productivity and creativity.",
      oldPrice: "₹" + 65999,
      newPrice: "₹" + 60999,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center p-4 gap-y-9">
        {cartData.map((data, index) => {
          return (
            <div
              className="rounded-lg p-4 w-80 h-60 bg-gray-200 relative"
              key={index}
            >
              <p className="h-6">
                <span className="font-bold"> Product:</span> {data.title}
              </p>
              <p className="mt-10">
                <span className="font-bold"> Description: </span>
                {data.description}
              </p>
              <p className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg text-center left-0 bottom-0 absolute w-full h-10 p-2">
                <span className="line-through">{data.oldPrice}</span>{" "}
                {data.newPrice}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
