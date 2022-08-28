import React from "react";
import "./../App.css";
import { MenuItem, TextField } from "@mui/material";
import { cities } from "./Objects";

interface WeatherInfoProps {
  reload: boolean;
  setReload: (n: boolean) => void;
  location: string;
  setLocation: (n: string) => void;
}

const CitySelector = (props: WeatherInfoProps): JSX.Element => {
  const { reload, setReload, location, setLocation } = props;
  // Since the API doesn't return Celcius I have to convert from Kelvin like this kelvinValue - 273.15

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setReload(!reload);
    setLocation(event.target.value);
  };
  return (
    <TextField
      select
      label="City"
      variant="filled"
      value={location}
      onChange={handleChange}
      helperText="Please select a city"
      className="selector"
    >
      {cities.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CitySelector;
