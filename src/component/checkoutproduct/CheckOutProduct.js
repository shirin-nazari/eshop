import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../button/Button';
import { deleteBasket } from '../../redux/addToBasket/AddToBasketSlice';
import { useDispatch, useSelector } from 'react-redux';
const styledImage = {
  width: '20%',
  height: '30%',
};
function CheckOutProduct() {
  const dispatch = useDispatch();
  const Basket = useSelector((state) => state.basket);
  console.log(Basket);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {Basket &&
        Basket.map(
          ({ title, imageSrc, textDescription, rating, price }, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                padding: 2,
              }}
            >
              <img style={styledImage} src={imageSrc} alt={title} />
              <Box
                className="product__info"
                sx={{ margin: 2, paddingTop: 5, width: '65%' }}
              >
                <Typography variant="h4" component="h5">
                  {title}
                </Typography>
                <Typography variant="body2" component="body">
                  {textDescription}
                </Typography>
                <Typography variant="h6" component="h6">
                  ${price}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => dispatch(deleteBasket(index))}
                >
                  Remove from basket
                </Button>
              </Box>
            </Box>
          )
        )}
    </Box>
  );
}

export default CheckOutProduct;
