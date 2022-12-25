import { Grid } from '@mui/material';
import { FlowersType } from '../../types/types';
import { CardItem } from './CardItem';

interface ICardList {
  cards: FlowersType[];
}

export const CardList = (props: ICardList) => {
  return (
    <Grid container spacing={2}>
      {props.cards.map((item) => (
        <CardItem key={item.id} cards={item} />
      ))}
    </Grid>
  );
};
