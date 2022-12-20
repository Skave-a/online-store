import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Rating } from '@mui/material';
import { flowersData } from '../../../data/data';
import style from './CardItem.module.css';

export const CardItem = () => {
  let cardDescription: string = flowersData[0].description;
  if (cardDescription.length > 180) {
    cardDescription = cardDescription.split('').slice(0, 180).join('') + '...';
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={flowersData[0].photos[0]}
          alt={flowersData[0].name}
          sx={{ objectPosition: '0 -230px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {flowersData[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDescription}
          </Typography>
        </CardContent>
        <Box className={style.priceBox}>
          <Typography>{flowersData[0].price}$</Typography>
          <CardActions>
            <Button
              className={style.bntBuy}
              size="small"
              color="primary"
              variant="contained"
              sx={{ backgroundColor: '#006666' }}
            >
              Buy
            </Button>
          </CardActions>
        </Box>
        <Rating
          name="half-rating-read"
          defaultValue={flowersData[0].rating}
          precision={0.5}
          readOnly
          sx={{ padding: '0 0 10px 16px' }}
        />
      </CardActionArea>
    </Card>
  );
};
