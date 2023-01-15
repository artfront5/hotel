import { configureStore } from '@reduxjs/toolkit';
import { hotelReducer } from './hotels/reducer';

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});
