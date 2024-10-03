import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function SearchBox() {
  const [city, setCity] = useState("");

  const API_URL =
    // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";

  let getWeatherInfo = async () => {
    await fetch(`${API_URL}`); //which url to get the data
  };

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
