import React from 'react';
import { Rating } from './Rating/Rating';
import ellipse from '../../../assets/img/ellipse.png';
import css from './Hotel.module.scss';
import { HeartLike } from './HeartLike/HeartLike';
import { hotelActions, useAppDispatch, useStateSelector } from '../../../store';
import { getCorrectCheckInDate } from '../../../utils/utils';

export type hotel = {
  hotelId: string;
  hotelName: string;
  priceAvg: number;
  showEllipse?: boolean;
  stars: number;
  favorite?: boolean | undefined;
  onToggleFavorite: () => void;
};

export const Hotel: React.FC<hotel> = ({
  hotelName,
  priceAvg,
  showEllipse = true,
  stars,
  favorite,
  onToggleFavorite,
}) => {
  const { checkIn, daysCount } = useStateSelector((state) => state.filters);

  return (
    <div>
      <div className={css.cardHotel}>
        <div className={css.dataNameHotel}>
          {showEllipse && <img className={css.ellipse} src={ellipse} alt="ellipse" />}
          <div className={css.boxDate}>
            <p className={css.labelHotel}>{hotelName}</p>
            <p className={css.date}>
              {getCorrectCheckInDate(checkIn)} - {daysCount} день
            </p>
            <Rating activeColor="#ffd700" count={5} size={25} value={stars} />
          </div>
        </div>
        <div className={css.boxRight}>
          <HeartLike
            containerClass={css.heart__container}
            onClick={onToggleFavorite}
            isActive={favorite}
          />

          <p>
            <label className={css.price}>Price:</label>
            {priceAvg}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};
