import { string, object } from 'yup';

const excludeCyrillicSymbols = new RegExp(/^([^а-яёА-ЯЁ]*)$/);

export const autorizationSchema = object()
  .shape({
    email: string().required().min(5),
    password: string()
      .min(8)
      .matches(excludeCyrillicSymbols, 'Пароль не должен содержать кирилицу')
      .required('Пожалэйста введите пароль'),
  })
  .required();
