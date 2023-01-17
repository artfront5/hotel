import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceAxios } from '../../api/axiosInstanse';

type Params = {
  location: string;
  checkIn: string;
  checkOut: string;
};

export const getHotels = createAsyncThunk(
  'hotel/fetchHotels',
  async (params: Params, thunkAPI) => {
    try {
      const { data } = await instanceAxios.get('', { params });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
