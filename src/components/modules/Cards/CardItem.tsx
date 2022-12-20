import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import style from './CardItem.module.css';
import { FlowersType } from '../../types/types';

interface Icards {
  key: number;
  cards: FlowersType;
}
export const CardItem = (props: Icards) => {
  let cardDescription: string = props.cards.description;
  if (cardDescription.length > 180) {
    cardDescription = cardDescription.split('').slice(0, 180).join('') + '...';
  }
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.cards.photos[0]}
            alt={props.cards.name}
            sx={{ objectPosition: '50% 70%' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.cards.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ height: '80.5px' }}>
              {cardDescription}
            </Typography>
          </CardContent>
          <Box className={style.priceBox}>
            <Typography>{props.cards.price}$</Typography>
            <CardActions>
              <div className={style.bntBuy}> Buy </div>
            </CardActions>
          </Box>
          <Rating
            name="half-rating-read"
            defaultValue={props.cards.rating}
            precision={0.5}
            readOnly
            sx={{ padding: '0 0 10px 16px' }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
