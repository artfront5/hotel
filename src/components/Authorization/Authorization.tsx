import React from 'react';
import { Input } from '../common/Input';
import css from './Authorization.module.scss';

const Authorization: React.FC = () => {
  return (
    <div className={css.backgroundImage}>
      <div className={css.backgroundColor}>
        <div className={css.box}>
          <h2 className={css.title}>Simple Hotel Check</h2>
          <form className={css.form}>
            <Input
              name="email"
              blockClassName={css.data}
              inputClassName={css.inp}
              labelClassName={css.placeh}
              label="Логин"
            />

            <Input
              name="password"
              blockClassName={css.data}
              inputClassName={css.inp}
              labelClassName={css.placeh}
              type="password"
              label="Пароль"
            />
          </form>
          <button className={css.button}>Войти</button>
        </div>
      </div>
    </div>
  );
};
export default Authorization;
