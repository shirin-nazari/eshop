import { Box } from '@mui/material';
import React from 'react';
const styledImage = {
  width: '30%',
  height: '50%',
};
function CheckOutProduct() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <img
        style={styledImage}
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="title"
      />
      <div className="product__info">
        <h5>"men's clothing"</h5>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <h6>$109.95</h6>
        <button>Remove from basket</button>
      </div>
    </Box>
  );
}

export default CheckOutProduct;
