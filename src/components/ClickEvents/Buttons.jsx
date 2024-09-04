function Button() {
  let handleClick = () => {
    console.log("Click");
  };
  let handleMouseOver=()=>[
    console.log("Bye")
  ]
  let handleKeyDown=()=>[
    console.log("Key Down")
  ]
  return (
    <>
      <div className="text-center">
        <button onClick={handleClick} className="bg-orange-500 rounded-lg p-2 m-2 text-white font-semibold">
          Click me!
        </button>
        <button onMouseOver={handleMouseOver} className="bg-orange-500 rounded-lg p-2 m-2 text-white font-semibold">
          Click Bye!
        </button>
        <button onKeyDown={handleKeyDown} className="bg-orange-500 rounded-lg p-2 m-2 text-white font-semibold">
         Key Down
        </button>
      </div>
    </>
  );
}
export default Button;
