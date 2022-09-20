/* eslint-disable */
function Button({ type, title, onAction }) {
  return (
    <button type={type} onClick={onAction}>
      {title}
    </button>
  );
}

export default Button;
