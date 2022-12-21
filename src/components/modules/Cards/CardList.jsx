import { Grid } from '@mui/material';
import { flowersData } from '../../../data/data';
import { CardItem } from './CardItem';

const cards = flowersData;

export const CardList = () => {
  return (
    <Grid container spacing={2}>
      {cards.map((item) => (
        <CardItem key={item.id} cards={item} />
      ))}
    </Grid>
  );
};
