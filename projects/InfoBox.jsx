function InfoBox({ weather }) {
  return (
    <div>
      {weather && (
        <>
          <p>Humidity {weather.humidity}</p>
          <p>Temperature {weather.temp}</p>
          <p>Max Temperature {weather.tempMax}</p>
          <p>Min Temperature {weather.tempMin}</p>
          <p>Weather: {weather.weather}</p>
        </>
      )}
    </div>
  );
}

export default InfoBox;
