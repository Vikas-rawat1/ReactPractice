function InfoBox({ weather }) {
  const infoStyle = {
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  }; 

  const textStyle = {
    margin: 0,
    color: "#555",
    fontSize: "1rem",
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Roboto', sans-serif",
        margin: "20px auto",
        color: "#333",
      }}
    >
      {weather && (
        <>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            Weather Information
          </h3>
          <div style={infoStyle}>
            <p style={textStyle}>
              <strong>City:</strong> {weather.city}
            </p>
          </div>
          <div style={infoStyle}>
            <p style={textStyle}>
              <strong>Humidity:</strong> {weather.humidity}%
            </p>
          </div>
          <div style={infoStyle}>
            <p style={textStyle}>
              <strong>Temperature:</strong> {Math.round(weather.temp - 273.15)}
              °C
            </p>
          </div>
          {/*✋✋ The subtraction of 273.15 is necessary because the temperature data
          you receive from the OpenWeatherMap API is in Kelvin, not Celsius. To
          convert Kelvin to Celsius, you need to subtract 273.15.✋✋
         🌟😃🌟 FORMULA : Celsius = Kelvin - 273.15 🌟😃🌟*/}

          <div style={infoStyle}>
            <p style={textStyle}>
              <strong>Max Temp:</strong> {Math.round(weather.tempMax - 273.15)}
              °C
            </p>
          </div>
          <div style={infoStyle}>
            <p style={textStyle}>
              <strong>Min Temp:</strong> {Math.round(weather.tempMin - 273.15)}
              °C
            </p>
          </div>
          <div style={infoStyle}>
            <p style={textStyle}>
              <strong>Weather:</strong> {weather.weather}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default InfoBox;
