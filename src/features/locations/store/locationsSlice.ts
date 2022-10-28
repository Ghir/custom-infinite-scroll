import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Store
import { RootState } from '../../../app/store';

// Models
import { Location } from '../models/location.model';

// Services
import { getLocations } from '../services/locationsAPI';

export interface LocationsState {
  data: Location[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: LocationsState = {
  data: [],
  status: 'idle',
};

export const loadLocationsAsync = createAsyncThunk(
  'locations/getLocations',
  async (start: number) => {
    const response = await getLocations(start);

    return response;
  },
);

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadLocationsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadLocationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = [...state.data, ...action.payload];
      })
      .addCase(loadLocationsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectLocations = (state: RootState) => state.locations.data;

export default locationsSlice.reducer;
