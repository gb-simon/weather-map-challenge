import React, { useEffect, useState } from "react";
import "./App.css";
import { Grid, MenuItem, Paper, TextField } from "@mui/material";
import { cities, myWeather } from "./Objects";
import WeatherInfo from "./WeatherInfo";

function App() {
  const [weatherData, setWeatherData] = useState<myWeather>();
  const [location, setLocation] = useState<string>(cities[1].label);
  const [reload, setReload] = useState<boolean>(false);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4f614993e61b575abedbf67c0b5a4514`;

  // Since the API doesn't return Celcius I have to convert from Kelvin like this kelvinValue - 273.15

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReload(!reload);
    setLocation(event.target.value);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error(err));
  }, [reload]);

  const checkTemp = Number(
    weatherData?.main?.temp ? weatherData?.main.temp_max - 273.15 : null
  ).toFixed(0);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction={{ xs: "row", sm: "column" }}
      p={2}
    >
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "#FF4C4C",
          width: "500px",
          height: "800px",
        }}
        className={parseFloat(checkTemp) > 16 ? "app warm" : "app"}
      >
        <Grid
          container
          direction={{ xs: "row", sm: "column" }}
          p={2}
          className="App"
        >
          <Grid container item justifyContent="center">
            <TextField
              select
              label="City"
              value={location}
              onChange={handleChange}
              helperText="Please select a city"
              className="color"
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <WeatherInfo dataObject={weatherData} />
        </Grid>
      </Paper>
    </Grid>
  );
}

export default App;
