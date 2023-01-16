import { ChangeEvent } from 'react';

type Props = {
  blockClassName?: string;
  labelClassName?: string;
  label?: string;
  inputClassName?: string;
  name?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  errorMessage?: string;
};

export function Input({
  blockClassName,
  labelClassName,
  label,
  inputClassName,
  name,
  type = 'text',
  onChange,
  value,
  errorMessage,
}: Props) {
  return (
    <div className={blockClassName}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        id={name}
        className={inputClassName}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />

      {errorMessage && <p style={{ color: 'tomato' }}>{errorMessage}</p>}
    </div>
  );
}
