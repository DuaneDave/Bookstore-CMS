function Input({
  type, placeholder, onUpdate, value,
}) {
  return (
    <input
      type={type}
      aria-label={placeholder}
      placeholder={placeholder}
      onChange={onUpdate}
      value={value}
    />
  );
}

export default Input;
