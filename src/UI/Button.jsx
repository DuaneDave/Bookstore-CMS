function Button({ type, title, onAction }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onAction}>
      {title}
    </button>
  );
}

export default Button;
