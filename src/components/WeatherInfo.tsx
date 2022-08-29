import React from "react";
import "./../App.css";
import { Grid, Typography, styled, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import OpacityIcon from "@mui/icons-material/Opacity";
import WindPowerIcon from "@mui/icons-material/WindPower";
import { myWeather } from "./Objects";

interface WeatherInfoProps {
  dataObject: myWeather | undefined;
}

const WeatherInfo = (props: WeatherInfoProps): JSX.Element => {
  // Since the API doesn't return Celcius values I have to convert from Kelvin subtracting 273.15

  const { dataObject } = props;
  const dateformat = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  } as const;

  const formattedDate = new Date().toLocaleDateString("en-US", dateformat);

  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    color: "#fff",
    width: 92,
    height: 92,
    fontSize: "18px",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      direction={{ xs: "column", sm: "row" }}
      mt={2}
    >
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        xs={4}
        spacing={6}
      >
        <Grid item>
          <strong className="locationTitle">
            {dataObject?.name}, {dataObject?.sys.country}
          </strong>
        </Grid>
        <Grid item>
          <strong className="dateTitle">{formattedDate}</strong>
        </Grid>
        <Grid item p={1}>
          <strong className="temp">
            {`${Number(
              dataObject?.main?.temp ? dataObject?.main?.temp - 273.15 : null
            ).toFixed(0)}°C`}
          </strong>
        </Grid>
        <Grid item xs={1}>
          <strong className="descriptions">
            {dataObject?.weather[0].description}
          </strong>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" item xs={1}>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "row", sm: "column" }}
          p={2}
          gap={2}
          m={5}
          className="info"
        >
          <Item>
            <OpacityIcon fontSize="large" />
            <Typography variant="body1">
              {`Humidity %${dataObject?.main.humidity}`}
            </Typography>
          </Item>
          <Item>
            <AddCircleOutlineIcon fontSize="large" />
            <Typography variant="body1">{`Max ${Number(
              dataObject?.main?.temp ? dataObject?.main.temp_max - 273.15 : null
            ).toFixed(0)}°C`}</Typography>
          </Item>
          <Item>
            <RemoveCircleOutlineIcon fontSize="large" />
            <Typography variant="body1">
              {`Min ${Number(
                dataObject?.main?.temp
                  ? dataObject?.main.temp_min - 273.15
                  : null
              ).toFixed(0)}°C`}
            </Typography>
          </Item>
          <Item>
            <WindPowerIcon fontSize="large" />
            <Typography variant="body1">
              {`Wind ${dataObject?.wind.speed}m/s`}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeatherInfo;
