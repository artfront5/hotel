import React, { useState } from 'react';
import { Input } from '../../common/Input';
import css from '../Home.module.scss';

function getNowDate() {
  const correctTime = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date());

  return correctTime.split('.').reverse().join('-');
}

export function Filters() {
  const [city, setCity] = useState('Москва');
  const [date, setDate] = useState(() => getNowDate());
  const [count, setCount] = useState(1);

  return (
    <div className={css.left_box_first}>
      <Input
        blockClassName={css.input_wrapper}
        inputClassName={css.input}
        label="Локация"
        labelClassName={css.label}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        blockClassName={css.input_wrapper}
        inputClassName={css.input}
        label="Дата заселения"
        labelClassName={css.label}
        type="date"
        value={date}
        onChange={(e) => {
          // console.log(e.target.value, '.target.value');

          setDate(e.target.value);
        }}
      />
      <Input
        blockClassName={css.input_wrapper}
        inputClassName={css.input}
        label="Количество дней"
        labelClassName={css.label}
        type="number"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button className={css.button}>Найти</button>
    </div>
  );
}
