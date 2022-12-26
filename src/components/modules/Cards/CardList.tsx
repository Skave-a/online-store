import { Grid } from '@mui/material';
import { FlowersType } from '../../types/types';
import { CardItem } from './CardItem';

interface ICardList {
  cards: FlowersType[];
  setProduct: (arg0: FlowersType[]) => void;
  product: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

export const CardList = (props: ICardList) => {
  return (
    <Grid container spacing={2}>
      {props.cards.map((item) => (
        <CardItem
          key={item.id}
          cards={item}
          setProduct={props.setProduct}
          product={props.product}
          totalQuantity={props.totalQuantity}
          setTotalQuantity={props.setTotalQuantity}
        />
      ))}
    </Grid>
  );
};
