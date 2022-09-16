// eslint-disable-next-line react/prop-types
function Input({ type, placeholder }) {
  return (
    <input type={type} aria-label={placeholder} placeholder={placeholder} />
  );
}

export default Input;
