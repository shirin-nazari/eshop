import Button from '@mui/material/Button';
function Buttons({
  children,
  variant,
  handleClick,
  components,
  extraStyle,
  color,
  size,
  ...rest
}) {
  return (
    <Button
      component={components && components}
      onClick={handleClick && handleClick}
      variant={variant && variant}
      sx={extraStyle && extraStyle}
      color={color && color}
      size={size && size}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default Buttons;
