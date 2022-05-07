import { Typography } from '@mui/material';
import React from 'react';
import CheckOutProduct from '../component/checkoutproduct/CheckOutProduct';
const styles = {
  margin: '8rem',
};
function CheckOut() {
  return (
    <div style={styles}>
      <Typography variant="h2" component="h2">
        Your shopping Basket
      </Typography>
      <CheckOutProduct />
    </div>
  );
}

export default CheckOut;
