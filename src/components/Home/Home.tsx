import React from 'react';
import css from './Home.module.scss';
import exit from './exit.png';
import vector from './vector.png';

const Authorization: React.FC = () => {
  return (
    <>
      <div className={css.content}>
        <div className={css.left_title}>Simple Hotel Check</div>
        <div className={css.right_title}>
          Выйти
          <img className={css.img_exit} src={exit} alt="exit" />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.box}>
          <div className={css.left_box_all}>
            <div className={css.left_box_first}>
              <div className={css.inputs_data}>
                <label>Локация</label>
                <input name="city" type="text" />
                <label>Дата заселения</label>
                <input name="date" type="date" />
                <label>Количество дней</label>
                <input name="city" type="number" />
                <button>Найти</button>
              </div>
            </div>
            <div className={css.left_box_other}>
              <div className={css.left_box_other_data}>
                <h2>Избранное</h2>
                <select name="select">
                  <option value="value1" selected>
                    Рейтинг
                  </option>
                  <option value="value2">выше</option>
                  <option value="value3">ниже</option>
                </select>
                <select name="select">
                  <option value="value1" selected>
                    Цена
                  </option>
                  <option value="value2">выше</option>
                  <option value="value3">ниже</option>
                </select>
              </div>
            </div>
          </div>
          <div className={css.right_box}>
            <div className={css.right_box_data}>
              <div className={css.content}>
                <div className={css.left_data}>
                  <div className={css.text}>Отели</div>{' '}
                  <img className={css.img_vector} src={vector} alt="vector" />{' '}
                  <div className={css.text}>Москва</div>
                </div>
                <div className={css.right_data}>07 июля 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Authorization;
