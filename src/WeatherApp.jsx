import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 33.07,
    humidity: 80,
    temp: 28.38,
    tempMax: 28.38,
    tempMin: 28.38,
    weather: "Overcast Clouds",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />
    </div>
  );
}