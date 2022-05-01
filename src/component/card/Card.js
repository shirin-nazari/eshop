import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '../button/Button';
export default function MultiActionAreaCard({
  title,
  imageSrc,
  textDescription,
  id,
  rating,
}) {
  return (
    <Card sx={{ width: '30vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {textDescription}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {Array(rating)
              .fill()
              .map((_, item) => (
                <p key={id}>⭐</p>
              ))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* // add Button */}
        <Button variant="contained">Add to Card</Button>
      </CardActions>
    </Card>
  );
}
