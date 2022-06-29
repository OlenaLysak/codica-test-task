import React, { useState, useEffect } from 'react';

//Components
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

//Utils
import { setUrlByCity } from '../../utils/dataUtils';

const CityInput = ({ handleOptionSelected }) => {
  const [options, setOptions] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (!userInput.length) setOptions([]);
  }, [userInput]);

  const formatOptions = (data) => {
    const formattedOptions = data.map((item) => {
      const locationState = item.state ? `, ${item.state}` : '';
      const label = `${item.name}${locationState}, ${item.country}`;
      const option = {
        label: label,
        id: Date.now().toString(),
        lat: item.lat,
        lon: item.lon,
        name: item.name,
      };
      return option;
    });

    return formattedOptions;
  };

  const handleInputChange = (value) => {
    setUserInput(value);
  };

  useEffect(() => {
    const input = userInput.replaceAll(' ', '+');
    const newUrl = setUrlByCity(input);
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        const newOptions = formatOptions(data);
        setOptions(newOptions);
      })
      .catch(() => console.log('No cities found'));
  }, [userInput]);

  return (
    <Autocomplete
      sx={{ width: 350 }}
      options={options}
      onChange={(e, value) => handleOptionSelected(e, value)}
      onInputChange={(e, value) => handleInputChange(value)}
      renderInput={(params) => (
        <TextField {...params} label="Add another city" />
      )}
    />
  );
};

export default CityInput;
