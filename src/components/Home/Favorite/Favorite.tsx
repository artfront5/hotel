import React from 'react';
import { hotelActions, useAppDispatch, useStateSelector } from '../../../store';
import { hotel, Hotel } from '../../common/Hotel/Hotel';

export default function Favorite() {
  const dispath = useAppDispatch();

  const favoriteHotels = useStateSelector((state) => state.hotel.favoriteHotels);

  // const favoriteHotels = hotels.filter(({ favorite }) => favorite);
  console.log(favoriteHotels);

  function onToggleFavorite(hotel: hotel) {
    dispath(hotelActions.removeFavoriteHotel(hotel));
  }

  return (
    <div>
      {favoriteHotels.map((el: hotel) => (
        <Hotel
          key={el.hotelId}
          {...el}
          showEllipse={false}
          onToggleFavorite={() => onToggleFavorite(el)}
        />
      ))}
    </div>
  );
}
