import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../button/Button';
import { deleteBasket } from '../../redux/addToBasket/AddToBasketSlice';
import { useDispatch, useSelector } from 'react-redux';
const styledImage = {
  width: '20%',
  height: '30%',
};
function CheckOutProduct({ category, id, description, image, price, rating }) {
  const dispatch = useDispatch();
  const addToBasket = useSelector((state) => state.basket);
 
  return (
    { addToBasket.map(index=>(
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        padding: 2,
      }}
    >
      <img
        style={styledImage}
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="title"
      />
      <Box className="product__info" sx={{ margin: 2, paddingTop: 5 }}>
        <Typography variant="h4" component="h5">
          "men's clothing"
        </Typography>
        <Typography variant="body2" component="body">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </Typography>
        <Typography variant="h6" component="h6">
          $109.95
        </Typography>
        <Button variant="contained" onClick={() => dispatch(deleteBasket(id))}>
          Remove from basket
        </Button>
      </Box>
    </Box>
    ))}
  );
}

export default CheckOutProduct;
