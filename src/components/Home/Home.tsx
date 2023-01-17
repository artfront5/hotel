import React from 'react';
import css from './Home.module.scss';
import exit from '../../assets/img/exit.png';
import vector from '../../assets/img/vector.png';
import Scroll from './Scroll/Scroll';
import Hotels from './Hotels/Hotels';
import Favorite from './Favorite/Favorite';
import { Navigate, useNavigate } from 'react-router-dom';
import { Filters } from './Filters/Filters';
import { useStateSelector } from '../../store';
import { getCorrectCheckInDate } from '../../utils/utils';

export const Home: React.FC = () => {
  const { checkIn, location } = useStateSelector((state) => state.filters);
  const navigate = useNavigate();

  if (!localStorage.getItem('loginData')) {
    return <Navigate to="/auth" replace />;
  }

  function logout() {
    localStorage.removeItem('loginData');
    navigate('/auth');
  }

  return (
    <div className={css.content}>
      <div className={css.header}>
        <div className={css.left_title}>Simple Hotel Check</div>
        <div onClick={logout} className={css.right_title}>
          Выйти
          <img className={css.img_exit} src={exit} alt="exit" />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.box}>
          <div className={css.left_box_all}>
            <Filters />
            <div className={css.left_box_other}>
              <div className={css.left_box_other_data}>
                <div className={css.text_title_left}>Избранное</div>
                <div className={css.selected}>
                  <select name="select" defaultValue="">
                    <option value="value1">Рейтинг</option>
                    <option value="value2">выше</option>
                    <option value="value3">ниже</option>
                  </select>
                  <select name="select" defaultValue="">
                    <option value="value1">Цена</option>
                    <option value="value2">выше</option>
                    <option value="value3">ниже</option>
                  </select>
                </div>
                <Favorite />
              </div>
            </div>
          </div>
          <div className={css.right_box}>
            <div className={css.hotels}>
              <div className={css.left_data}>
                <div className={css.text}>Отели</div>{' '}
                <img className={css.img_vector} src={vector} alt="vector" />{' '}
                <div className={css.text}>{location}</div>
              </div>
              <div className={css.right_data}>{getCorrectCheckInDate(checkIn)}</div>
            </div>
            <Scroll />
            <p>Добавлено в Избранное: 3 отеля</p>
            <Hotels />
          </div>
        </div>
      </div>
    </div>
  );
};
