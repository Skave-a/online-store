import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FlowersType } from '../../types/types';
import { CardItem } from './CardItem';

interface ICardList {
  cards: FlowersType[];
  isGrid: string;
  isGridQuery: string;
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

export const CardList = (props: ICardList) => {
  let cardsLength = props.cards.length;
  if (!cardsLength) {
    return (
      <Typography
        variant="h2"
        fontSize={25}
        style={{ textAlign: 'center', color: '#006666' }}
        fontFamily={`'Pacifico', cursive`}
      >
        Plants not found! Please change your search parameters
      </Typography>
    );
  }
  return (
    <Grid container spacing={2} sx={{ maxWidth: '1000px' }}>
      {props.cards.map((item) => (
        <CardItem
          key={item.id}
          cards={item}
          isGrid={props.isGrid}
          isGridQuery={props.isGridQuery}
          setCart={props.setCart}
          cart={props.cart}
          totalQuantity={props.totalQuantity}
          setTotalQuantity={props.setTotalQuantity}
        />
      ))}
    </Grid>
  );
};
