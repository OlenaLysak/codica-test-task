import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Types
import { CityItem } from '../../types/types';

//Constants
import { INITIAL_CITIES } from '../../constants/constants';

interface CityState {
  cities: CityItem[];
  isLoading: boolean;
  error: string;
}

const initialState: CityState = {
  cities: INITIAL_CITIES,
  isLoading: false,
  error: '',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    [fetchCities.fulfilled.type]: (
      state,
      action: PayloadAction<CityItem[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.cities = action.payload;
    },
    [fetchCities.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCities.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default citySlice.reducer;
