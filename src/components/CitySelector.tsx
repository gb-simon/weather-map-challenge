import React from "react";
import "./../App.css";
import { MenuItem, Select } from "@mui/material";
import { cities } from "./Objects";

interface WeatherInfoProps {
  reload: boolean;
  setReload: (n: boolean) => void;
  location: string;
  setLocation: (n: string) => void;
}

const CitySelector = (props: WeatherInfoProps): JSX.Element => {
  const { reload, setReload, location, setLocation } = props;

  const handleChange = (value: string): void => {
    setReload(!reload);
    setLocation(value);
  };

  return (
    <Select
      label="City"
      id="select"
      disableUnderline
      data-testid="city"
      labelId="city"
      variant="filled"
      displayEmpty
      value={location}
      onChange={({ target: { value } }) => handleChange(value)}
      className="selector"
    >
      {cities.map((option) => (
        <MenuItem
          data-testid="cityitems"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CitySelector;
