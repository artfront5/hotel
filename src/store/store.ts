import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/reducer';
import { hotelReducer } from './hotels/reducer';

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    filters: filtersReducer,
  },
});
