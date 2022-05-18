import React from 'react';
import { TextField } from '@mui/material';

export default function TextFields({
  nameInput,
  handleChange,
  valueInput,
  variantInput,
  typeInput,
  styleInput,
  placeholderInput,
  labelInput,
  idInput,
}) {
  return (
    <TextField
      name={nameInput && nameInput}
      onChange={handleChange && handleChange}
      value={valueInput && valueInput}
      variant={variantInput && variantInput}
      type={typeInput && typeInput}
      sx={styleInput && styleInput}
      placeholder={placeholderInput && placeholderInput}
      label={labelInput && labelInput}
      id={idInput && idInput}
    />
  );
}
