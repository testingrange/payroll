export default function UserInputField({
  label,
  name,
  value,
  type,
  onChange,
  required,
  maxlength,
  children
}) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        maxlength={maxlength}
      />
    </div>
  );
}
