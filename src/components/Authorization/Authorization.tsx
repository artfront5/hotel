import React from 'react';
import css from './Authorization.module.scss';

const Authorization: React.FC = () => {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <div className={css.title}>Simple Hotel Check</div>
        <div className={css.form}>
          <div className={css.data}>
            <div className={css.placeh}>Логин</div>
            <input className={css.inp} name="email" type="text" />
          </div>
          <div className={css.data}>
            <div className={css.placeh}>Пароль</div>
            <input className={css.inp} name="password" type="password" />
          </div>
        </div>
        <button className={css.button}>Войти</button>
      </div>
    </div>
  );
};
export default Authorization;
