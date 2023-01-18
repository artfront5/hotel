import React from 'react';
import { hotelActions, useAppDispatch, useStateSelector } from '../../../store';
import css from '../Home.module.scss';

export function FavoriteFilters() {
  const dispath = useAppDispatch();
  const { price, rating } = useStateSelector((state) => state.hotel.favoriteFilters);

  return (
    <div className={css.selected}>
      <select
        name="rating"
        value={rating}
        onChange={(e) => dispath(hotelActions.changeRatingSortValue(e.target.value))}
      >
        <option value="">Рейтинг</option>
        <option value="asc">выше</option>
        <option value="desc">ниже</option>
      </select>
      <select
        name="price"
        value={price}
        onChange={(e) => dispath(hotelActions.changePriceSortValue(e.target.value))}
      >
        <option value="">Цена</option>
        <option value="asc">выше</option>
        <option value="desc">ниже</option>
      </select>
    </div>
  );
}
