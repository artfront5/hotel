import React from 'react';
import { Rating } from './Rating/Rating';
import ellipse from '../../../assets/img/ellipse.png';
import css from './Hotel.module.scss';
import { HeartLike } from './HeartLike/HeartLike';

export type hotel = {
  id: string;
  label: string;
  fullName: string;
  cityName: string;
  price: string;
  showEllipse?: boolean;
};

export const Hotel: React.FC<hotel> = ({
  label,
  fullName,
  cityName,
  price,
  showEllipse = true,
}) => {
  return (
    <div>
      <div className={css.cardHotel}>
        <div className={css.dataNameHotel}>
          {showEllipse && <img className={css.ellipse} src={ellipse} alt="ellipse" />}
          <div className={css.boxDate}>
            <p className={css.labelHotel}>{label}</p>
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
          <HeartLike containerClass={css.heart__container} />
          <p>
            <label className={css.price}>Price:</label>
            {price}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};
