import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCorrectDate } from '../../utils/utils';

const initialState: { location: string; checkIn: string; daysCount: number } = {
  location: 'Moscow',
  checkIn: getCorrectDate(new Date()),
  daysCount: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, { payload }: PayloadAction<string>) => {
      state.location = payload;
    },
    setCheckIn: (state, { payload }: PayloadAction<string>) => {
      state.checkIn = payload;
    },
    setDaysCount: (state, { payload }: PayloadAction<number>) => {
      state.daysCount = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
