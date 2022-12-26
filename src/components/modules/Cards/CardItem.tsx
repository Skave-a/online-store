import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid, Rating } from '@mui/material';
import { FlowersType } from '../../types/types';

interface Icards {
  key: number | undefined;
  cards: FlowersType;
  isGrid: string;
  isGridQuery: string;
}

const btnSX = {
  border: '1px solid #006666',
  color: '#006666',
  padding: '8px 23px',
  borderRadius: '5px',
  transition: 'all 0.5s',
  '&:hover': {
    color: 'white',
    backgroundColor: '#006666',
  },
};

const priceBoxSX = {
  display: 'flex',
  padding: '0 16px',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const CardItem = (props: Icards) => {
  const { name, price, rating, description, photos } = props.cards;
  let gridVar = props.isGrid;
  if (props.isGridQuery) {
    gridVar = props.isGridQuery;
  }
  let md = 4;
  if (gridVar === 'true') {
    md = 6;
  }
  return (
    <Grid item xs={12} md={md} sm={6}>
      <Card>
        <CardActionArea component="span">
          <CardMedia
            component="img"
            height="200"
            image={photos[0]}
            alt={name}
            sx={{ objectPosition: '50% 70%' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '3',
              }}
            >
              {description}
            </Typography>
          </CardContent>
          <Box sx={priceBoxSX}>
            <Typography>{price}$</Typography>
            <Button
              onClick={(event) => {
                event.stopPropagation();
              }}
              sx={btnSX}
            >
              Buy
            </Button>
          </Box>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
            sx={{ padding: '0 0 10px 16px' }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
