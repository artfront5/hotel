import React from 'react';
import css from './Hotels.module.scss';
import ellipse from '../../assets/img/ellipse.png';
import { Rating } from '../Rating/Rating';
import { HeartLike } from '../Heart/HeartLike';

const hotels: any = [
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
    id: '4',
    label: 'Отель Novotel Moscow City',
    fullName: 'Отель Novotel Moscow City, Москва, Россия',
    cityName: 'Москва',
    price: '23 924 ₽',
  },
];

const Hotels: React.FC = () => {
  return (
    <div>
      {hotels.map((el: any) => (
        <div key={el.id}>
          <div className={css.cardHotel}>
            <div className={css.dataNameHotel}>
              <img className={css.ellipse} src={ellipse} alt="ellipse" />
              <div className={css.boxDate}>
                <p className={css.labelHotel}>{el.label}</p>
                <p className={css.date}>7 июля 2020 - 1 день</p>
                <Rating
                  activeColor="#ffd700"
                  count={5}
                  size={25}
                  onChange={() => undefined}
                />
              </div>
            </div>
            <div className={css.boxRight}>
              <HeartLike />
              <p>
                <label className={css.price}>Price:</label>
                {el.price}
              </p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Hotels;
