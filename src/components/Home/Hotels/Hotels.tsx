import React from 'react';
import { hotel, Hotel } from '../../common/Hotel/Hotel';

const hotels: hotel[] = [
  {
    id: '1',
    label: 'Moscow Marriott Grand Hotel',
    fullName: 'Отель Novotel Moscow City, Москва, Россия',
    cityName: 'Москва',
    price: '23 924 ₽',
  },
  {
    id: '2',
    label: 'Отель Novotel Moscow City',
    fullName: 'Отель Novotel Moscow City, Москва, Россия',
    cityName: 'Москва',
    price: '23 924 ₽',
  },
  {
    id: '3',
    label: 'Отель Novotel Moscow City',
    fullName: 'Отель Novotel Moscow City, Москва, Россия',
    cityName: 'Москва',
    price: '23 924 ₽',
  },
  {
    id: '4',
    label: 'Отель Novotel Moscow City',
    fullName: 'Отель Novotel Moscow City, Москва, Россия',
    cityName: 'Москва',
    price: '23 924 ₽',
  },
  {
    id: '5',
    label: 'Отель Novotel Moscow City',
    fullName: 'Отель Novotel Moscow City, Москва, Россия',
    cityName: 'Москва',
    price: '23 924 ₽',
  },
];

const Hotels: React.FC = () => {
  return (
    <div>
      {hotels.map((el: hotel) => (
        <Hotel key={el.id} {...el} />
      ))}
    </div>
  );
};
export default Hotels;
