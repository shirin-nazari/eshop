import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '../button/Button';
import { styled } from '@mui/material/styles';
import { addBasket } from '../../redux/addToBasket/AddToBasketSlice';
import { useDispatch } from 'react-redux';
const CardStyle = styled(Card)(() => ({
  marginTop: 50,
}));
function MultiActionAreaCard({
  title,
  imageSrc,
  textDescription,
  id,
  rating,
  price,
}) {
  const dispatch = useDispatch();
  return (
    <CardStyle sx={{ width: '30vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200vh"
          width="50px"
          image={imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ display: 'flex' }}
          >
            {('' + rating)
              .split('')
              .fill()
              .map(() => (
                <p key={id}>⭐</p>
              ))}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {textDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* // add Button */}
        <Button
          variant="contained"
          onClick={() => {
            // for add in basket
            dispatch(
              addBasket({ title, imageSrc, textDescription, id, rating, price })
            );
          }}
        >
          Add to Card
        </Button>
      </CardActions>
    </CardStyle>
  );
}

export default MultiActionAreaCard;
