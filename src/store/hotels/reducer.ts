import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { hotel } from '../../components/common/Hotel/Hotel';
import { getHotels } from './actions';

const initialState: { hotels: hotel[]; hotelsLoading: boolean; hotelsError: boolean } = {
  hotels: [],
  hotelsLoading: false,
  hotelsError: false,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: {
    // Hotels
    [getHotels.fulfilled.type]: (state, action: PayloadAction<hotel[]>) => {
      state.hotels = action.payload;
      state.hotelsLoading = false;
    },
    [getHotels.rejected.type]: (state, action) => {
      state.hotelsLoading = false;
      state.hotelsError = action.payload;
    },
    [getHotels.pending.type]: (state) => {
      state.hotelsLoading = true;
    },
  },
});

export const hotelReducer = hotelsSlice.reducer;
export const hotelActions = hotelsSlice.actions;
