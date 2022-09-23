function Input({
  type, placeholder, onUpdate, value, classes,
}) {
  return (
    <input
      type={type}
      aria-label={placeholder}
      placeholder={placeholder}
      onChange={onUpdate}
      value={value}
      className={classes}
    />
  );
}

export default Input;
