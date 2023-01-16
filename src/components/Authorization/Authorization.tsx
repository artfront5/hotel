import { useFormik } from 'formik';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Input } from '../common/Input';
import css from './Authorization.module.scss';
import { autorizationSchema } from './schema';

const Authorization: React.FC = () => {
  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: autorizationSchema,
    validateOnChange: false,
    onSubmit,
  });

  if (localStorage.getItem('loginData')) {
    return <Navigate to="/" replace />;
  }

  function onSubmit(values: { email: string; password: string }) {
    localStorage.setItem('loginData', JSON.stringify(values));

    navigate('/');
  }

  return (
    <div className={css.backgroundImage}>
      <div className={css.backgroundColor}>
        <div className={css.box}>
          <h2 className={css.title}>Simple Hotel Check</h2>
          <form onSubmit={handleSubmit} id="form" className={css.form}>
            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              blockClassName={css.data}
              inputClassName={css.inp}
              labelClassName={css.placeh}
              label="Логин"
              errorMessage={errors.email}
            />
            <Input
              name="password"
              onChange={handleChange}
              value={values.password}
              blockClassName={css.data}
              inputClassName={css.inp}
              labelClassName={css.placeh}
              type="password"
              label="Пароль"
              errorMessage={errors.password}
            />
          </form>
          <button form="form" type="submit" className={css.button}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};
export default Authorization;
