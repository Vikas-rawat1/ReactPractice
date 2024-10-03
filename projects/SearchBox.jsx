import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function SearchBox() {
  const API_URL =
    // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    "https://api.openweathermap.org/data/2.5/weather";
  console.log(API_URL);

  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";

  const [city, setCity] = useState("");
  // console.log(city);

  let handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <>
      <div style={{ marginLeft: "3vw", marginTop: "2vw" }}>
        <form action="" onSubmit={handleOnSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            style={{ marginTop: "0.7vw", marginLeft: "2vw" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
export default SearchBox;
