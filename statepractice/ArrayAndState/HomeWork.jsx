function HomeWork() {
  const [random, setRandom] = useState();
  const [isSum, setIsSum] = useState();
  let genrateRandomNumber = () => {
    // const randomTicket = Math.floor(Math.random() * 100)
    const randomTicket = Math.floor(100 + Math.random() * 100).toString();
    // .padStart(3, "0");
    setRandom(randomTicket.toString());
    // console.log(random);

    const sumOfDigit = randomTicket
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0); //The reduce function starts by setting sum = 0 (because of the initial value).
    console.log(sumOfDigit);

    // if (randomTicket[0] === "0") {
    if (sumOfDigit === 12) {
      // if (sumOfDigit === 12) {
      setIsSum(true);
    } else {
      setIsSum(false);
    }
  };

  return (
    <div>
      <p>Lottery Game 🎟️</p>
      <p>Lottery Ticket = {random !== null ? random : "No Ticket Found"} </p>
      <button
        onClick={genrateRandomNumber}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Ticket
      </button>
      {random && (
        <>
          {/* <p>
          {isSum === true
            ? "🎉 The sum of the digits is 15! You win!"
            : "❌ The sum of the digits is not 15. Try again!"}
        </p> */}
          <p>
            {isSum === true
              ? "🎉You win! Congratulations"
              : "❌ Try again , Better Luck Next Time!"}
          </p>
        </>
      )}
    </div>
  );
}

export default HomeWork;
