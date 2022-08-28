import React from "react";
import "./App.css";
import { Grid, Typography, styled, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import OpacityIcon from "@mui/icons-material/Opacity";
import { myWeather } from "./Objects";
import "./App.css";
interface WeatherInfoProps {
  dataObject: myWeather | undefined;
}

const WeatherInfo = (props: WeatherInfoProps): JSX.Element => {
  const { dataObject } = props;

  const dateformat = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  } as const;

  const formattedDate = new Date().toLocaleDateString("en-US", dateformat);

  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    width: 92,
    height: 92,
    fontSize: "18px",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <div className="color">
      <Grid container item justifyContent="center" alignItems="center" p={2}>
        <Typography variant="h4">
          {dataObject?.name}, {dataObject?.sys.country}
        </Typography>
      </Grid>
      <Grid container item justifyContent="center" alignItems="center" p={2}>
        <Typography variant="h6">{formattedDate}</Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        className="temp"
      >
        <Typography variant="h2">
          {`${Number(
            dataObject?.main?.temp ? dataObject?.main?.temp - 273.15 : null
          ).toFixed(0)}°`}
        </Typography>
      </Grid>
      <Grid container item justifyContent="center" alignItems="center">
        <Typography variant="h3">
          {dataObject?.weather[0].description}
        </Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        p={2}
        pt={2}
        gap={2}
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
          ).toFixed(0)} °`}</Typography>
        </Item>
        <Item>
          <RemoveCircleOutlineIcon fontSize="large" />
          <Typography variant="body1">
            {`Min ${Number(
              dataObject?.main?.temp ? dataObject?.main.temp_min - 273.15 : null
            ).toFixed(0)}°`}
          </Typography>
        </Item>
        <Item>
          <RemoveCircleOutlineIcon fontSize="large" />
          <Typography variant="body1">
            {`Min ${Number(
              dataObject?.main?.temp ? dataObject?.main.temp_min - 273.15 : null
            ).toFixed(0)}°`}
          </Typography>
        </Item>
      </Grid>
    </div>
  );
};

export default WeatherInfo;
