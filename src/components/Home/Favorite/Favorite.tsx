import React from 'react';
import { useStateSelector } from '../../../store';
import { hotel, Hotel } from '../../common/Hotel/Hotel';

export default function Favorite() {
  const favoriteHotels = useStateSelector((state) => state.hotel.favoriteHotels);

  return (
    <div>
      {favoriteHotels.map((el: hotel) => (
        <Hotel key={el.hotelId} {...el} showEllipse={false} />
      ))}
    </div>
  );
}
