import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceAxios } from '../../api/axiosInstanse';

export const getHotels = createAsyncThunk('hotel/fetchHotels', async (_, thunkAPI) => {
  try {
    const { data } = await instanceAxios.get('', {
      params: { lookup: 'hotel', query: 'moscow' },
    });

    return data.results.hotels;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
