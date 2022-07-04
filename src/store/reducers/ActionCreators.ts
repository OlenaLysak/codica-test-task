import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//Types
import { CityItem } from '../../types/types';

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<CityItem[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${CITY_INPUT_OPTIONS_LIMIT}&appid=${API_KEY}${UNITS}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Upload not successful');
    }
  }
);
