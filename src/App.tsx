import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { cities, myWeather } from "./Objects";

function App() {
  const [weatherInfo, setWeatherInfo] = useState<myWeather>();
  const [location, setLocation] = useState<string>(cities[1].label);
  const [reload, setReload] = useState<boolean>(false);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4f614993e61b575abedbf67c0b5a4514`;

  //Since the API doesn't return Celcius I have to convert from Kelvin
  //(( kelvinValue - 273.15) * 9/5) + 32

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    backgroundColor: "#b20000", //    backgroundColor: cities.location.color,
    color: theme.palette.text.secondary,
    width: 100,
    height: 100,
    fontSize: "16px",
    lineHeight: "100px",
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReload(!reload);
    setLocation(event.target.value);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data))
      .catch((err) => console.error(err));
  }, [reload]);

  console.log(weatherInfo);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction={{ xs: "row", sm: "column" }}
      p={2}
      className="App"
    >
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "#FF4C4C",
          maxWidth: "600px",
        }}
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
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container item justifyContent="center" alignItems="center">
            <Typography variant="h1">{weatherInfo?.main.temp}</Typography>
            <Typography className="secondaryTitle" variant="h3">
              {weatherInfo?.weather[0].description}
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Box
              sx={{
                p: 2,
                display: "flex",
                gap: 2,
              }}
            >
              <Item elevation={3}>
                {`Feels ${weatherInfo?.main.feels_like}`}
              </Item>
              <Item elevation={3}>
                {`Humidity ${weatherInfo?.main.humidity}`}
              </Item>
              <Item elevation={3}>{`Max ${weatherInfo?.main.temp_max}`}</Item>
              <Item elevation={3}>{`Min ${weatherInfo?.main.temp_min}`}</Item>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default App;
