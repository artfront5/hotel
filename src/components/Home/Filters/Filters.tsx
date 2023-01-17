import React, { useEffect, useState } from 'react';
import { filtersActions, useAppDispatch, useStateSelector } from '../../../store';
import { getHotels } from '../../../store/hotels/actions';
import { getCheckoutDate } from '../../../utils/utils';
import { Input } from '../../common/Input';
import css from '../Home.module.scss';

export function Filters() {
  const dispath = useAppDispatch();
  const { location, checkIn, daysCount } = useStateSelector((state) => state.filters);

  useEffect(() => {
    findHotels();
  }, []);

  function findHotels() {
    dispath(
      getHotels({ location, checkIn, checkOut: getCheckoutDate(checkIn, daysCount) })
    );
  }

  return (
    <div className={css.left_box_first}>
      <Input
        blockClassName={css.input_wrapper}
        inputClassName={css.input}
        label="Локация"
        labelClassName={css.label}
        value={location}
        onChange={(e) => dispath(filtersActions.setLocation(e.target.value))}
      />
      <Input
        blockClassName={css.input_wrapper}
        inputClassName={css.input}
        label="Дата заселения"
        labelClassName={css.label}
        type="date"
        value={checkIn}
        onChange={(e) => dispath(filtersActions.setCheckIn(e.target.value))}
      />
      <Input
        blockClassName={css.input_wrapper}
        inputClassName={css.input}
        label="Количество дней"
        labelClassName={css.label}
        type="number"
        value={daysCount}
        onChange={(e) => dispath(filtersActions.setDaysCount(+e.target.value))}
      />
      <button onClick={findHotels} className={css.button}>
        Найти
      </button>
    </div>
  );
}
