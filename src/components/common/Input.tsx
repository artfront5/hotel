type Props = {
  blockClassName?: string;
  labelClassName?: string;
  label?: string;
  inputClassName?: string;
  name?: string;
  type?: string;
};

export function Input({
  blockClassName,
  labelClassName,
  label,
  inputClassName,
  name,
  type = 'text',
}: Props) {
  return (
    <div className={blockClassName}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input id={name} className={inputClassName} name={name} type={type} />
    </div>
  );
}
