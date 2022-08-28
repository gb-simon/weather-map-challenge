import React, { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import { cities, myWeather } from "./components/Objects";
import WeatherInfo from "./components/WeatherInfo";
import CitySelector from "./components/CitySelector";

function App() {
  const [weatherData, setWeatherData] = useState<myWeather>();
  const [location, setLocation] = useState<string>(cities[3].label);
  const [reload, setReload] = useState<boolean>(false);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4f614993e61b575abedbf67c0b5a4514`;

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
      alignItems="flex-start"
      justifyContent="center"
      className={parseFloat(checkTemp) > 19 ? "app warm" : "app"}
    >
      <Grid container item alignItems="flex-start" justifyContent="center">
        <CitySelector
          reload={reload}
          setReload={setReload}
          location={location}
          setLocation={setLocation}
        />
      </Grid>
      <Grid container item>
        <WeatherInfo dataObject={weatherData} />
      </Grid>
    </Grid>
  );
}

export default App;
