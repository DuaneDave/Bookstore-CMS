function Button({
  type, title, onAction, classes,
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onAction} className={classes}>
      {title}
    </button>
  );
}

export default Button;
