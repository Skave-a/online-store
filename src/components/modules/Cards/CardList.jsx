import { Grid } from '@mui/material';
import { flowersData } from '../../../data/data';
import { CardItem } from './CardItem';
import { useState } from 'react';

export const CardList = () => {
  //   const { cards } = props;
  // eslint-disable-next-line no-undef
  const [cards] = useState(flowersData);

  return (
    <Grid container spacing={2}>
      {cards.map((item) => (
        <CardItem key={item.id} cards={item} />
      ))}
    </Grid>
  );
};
