import React from 'react';
import { hotelActions, useAppDispatch, useStateSelector } from '../../../store';
import { hotel, Hotel } from '../../common/Hotel/Hotel';

const Hotels: React.FC = () => {
  const dispath = useAppDispatch();

  const { hotels, hotelsLoading, hotelsError } = useStateSelector((state) => state.hotel);

  if (hotelsLoading) {
    return <h1>...loading</h1>;
  }

  function onToggleFavorite(hotel: hotel, isFavorite: boolean) {
    console.log(hotel, isFavorite);

    if (isFavorite) {
      dispath(hotelActions.addFavoriteHotel(hotel));
    } else {
      dispath(hotelActions.removeFavoriteHotel(hotel));
    }
  }

  return (
    <div>
      {hotels.map((hotel: hotel) => (
        <Hotel
          key={hotel.hotelId}
          {...hotel}
          onToggleFavorite={(isFavorite: boolean) => onToggleFavorite(hotel, isFavorite)}
        />
      ))}
    </div>
  );
};
export default Hotels;
