import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material/styles";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "db94e97966b8c2e38f469c1f63bd4a77";

  const [city, setCity] = useState("");

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const jsonResponse = await response.json();

    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }

    return {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
  
    <div>
      <h3>Search Weather</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}