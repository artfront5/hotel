import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hotel } from "../../components/common/Hotel/Hotel";
import { getHotels } from "./actions";

const initialState: {
  hotels: hotel[];
  hotelsLoading: boolean;
  hotelsError: boolean;
  favoriteHotels: hotel[];
  favoriteFilters: {
    rating: string;
    price: string;
  };
} = {
  hotels: [],
  hotelsLoading: false,
  hotelsError: false,
  favoriteHotels: [],
  favoriteFilters: {
    rating: "",
    price: "",
  },
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addFavoriteHotel: (state, { payload }: PayloadAction<hotel>) => {
      const hotel = state.hotels.find(
        ({ hotelId }) => hotelId === payload.hotelId
      );

      if (hotel) {
        hotel.favorite = true;
        state.favoriteHotels.push({ ...payload, favorite: true });
      }
    },
    removeFavoriteHotel: (state, { payload }: PayloadAction<hotel>) => {
      console.log(payload);

      state.favoriteHotels = state.favoriteHotels.filter((hotel) => {
        if (hotel.hotelId !== payload.hotelId) return true;

        hotel.favorite = false;
      });

      const hotel = state.hotels.find(
        ({ hotelId }) => hotelId === payload.hotelId
      );

      if (hotel) {
        hotel.favorite = false;
      }
    },
    changeRatingSortValue: (state, { payload }: PayloadAction<string>) => {
      state.favoriteFilters.rating = payload;

      if (!payload) return;

      state.favoriteFilters.price = "";

      if (payload === "asc") {
        state.favoriteHotels.sort((a, b) => b.stars - a.stars);
      }

      if (payload === "desc") {
        state.favoriteHotels.sort((a, b) => a.stars - b.stars);
      }
    },
    changePriceSortValue: (state, { payload }: PayloadAction<string>) => {
      state.favoriteFilters.price = payload;

      if (!payload) return;

      state.favoriteFilters.rating = "";

      if (payload === "asc") {
        state.favoriteHotels.sort((a, b) => b.priceAvg - a.priceAvg);
      }

      if (payload === "desc") {
        state.favoriteHotels.sort((a, b) => a.priceAvg - b.priceAvg);
      }
    },
  },
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
