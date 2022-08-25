import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

function App() {
  const [data, setData] = useState<Object>(Object)
  const [location, setLocation] = useState<string>('cordoba')
  const [city, setCity] = useState<string>('cordoba');
  const URL: string = `https://api.openweathermap.org/data/3.0/onecall?lat={34.603722}&lon={58.381592}&appid=4f614993e61b575abedbf67c0b5a4514`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <Grid className="App">
      <TextField
        select
        label="City"
        value={city}
        onChange={handleChange}
        helperText="Please select a city"
      >{cities.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <Typography variant='h1'>0C</Typography>
      <Typography variant='h2'>Weather</Typography>
    </Grid >
  );
}

export default App;


const cities = [
  {
    value: 'santefe',
    label: 'Santa Fe',
  },
  {
    value: 'mendoza',
    label: 'Mendoza',
  },
  {
    value: 'buenosaires',
    label: 'Buenos Aires',
    lat: '34.603722',
    lon: '58.381592',
  },
  {
    value: 'cordoba',
    label: 'Córdoba',
  },
];
