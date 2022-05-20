import { Typography, Box } from '@mui/material';
import React from 'react';
import CheckOutProduct from '../component/checkoutproduct/CheckOutProduct';
import Subtotal from '../component/subtotal/Subtotal';
const styles = {
  margin: '2rem',
};
function CheckOut() {
  return (
    <Box sx={{ display: 'flex', marginTop: '8rem' }}>
      <div style={styles}>
        <Typography variant="h2" component="h2">
          Your shopping Basket
        </Typography>
        <CheckOutProduct />
      </div>
      <Box>
        <Subtotal />
      </Box>
    </Box>
  );
}

export default CheckOut;
