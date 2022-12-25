import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useState } from 'react';
import { flowersData } from '../../../data/data';
import CardsFilter from '../Cards/CardsFilter';
import { useSortedCards } from '../../hooks/useCards';
import { FlowersType } from '../../types/types';

const cards = flowersData;

function Main({
  setProduct,
  product,
}: {
  setProduct: (arg0: FlowersType[]) => void;
  product: FlowersType[];
}) {
  const [filter, setFilter] = useState({ sort: '' });
  const sortedCards = useSortedCards(cards, filter.sort);

  return (
    <Container sx={{ mt: '20px' }}>
      <CardsFilter filter={filter} setFilter={setFilter} />
      <CardList cards={sortedCards} setProduct={setProduct} product={product} />
    </Container>
  );
}

export default Main;
