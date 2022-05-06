import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '../button/Button';
import { styled } from '@mui/material/styles';
const CardStyle = styled(Card)(() => ({
  marginTop: 50,
}));
export default function MultiActionAreaCard({
  title,
  imageSrc,
  textDescription,
  id,
  rating,
  price,
}) {
  return (
    <CardStyle sx={{ width: '30vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30%"
          width="30%"
          image={imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {/* {Array(rating)
              .fill()
              .map((_, item) => (
                <p key={id}>⭐</p>
              ))} */}
            {[rating].map((_, item) => (
              <p key={id}>⭐</p>
            ))}
            {/* { for(let i=0;i<=rating;i++){
    (<p>⭐</p>)
  }} */}
            {/* {rating ? <p>{rating*(⭐)}</p> : null} */}
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
        <Button variant="contained">Add to Card</Button>
      </CardActions>
    </CardStyle>
  );
}
