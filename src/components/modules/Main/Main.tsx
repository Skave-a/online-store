import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useState } from 'react';
import { flowersData } from '../../../data/data';
import CardsFilter from '../Cards/CardsFilter';
import { useSortedCards } from '../../hooks/useCards';
import { FilterSide } from '../Filter/FilterSide';
import { Box } from '@mui/system';

const cards = flowersData;

function Main() {
  const [filter, setFilter] = useState({ sort: '' });
  const sortedCards = useSortedCards(cards, filter.sort);

  return (
    <Container sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
      <FilterSide />
      <Box>
        <CardsFilter filter={filter} setFilter={setFilter} />
        <CardList cards={sortedCards} />
      </Box>
    </Container>
  );
}

export default Main;
