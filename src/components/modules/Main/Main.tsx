import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useState } from 'react';
import { flowersData } from '../../../data/data';
import CardsSort from '../Cards/CardsSort';
import { useCards } from '../../hooks/useCards';
import { FilterSide } from '../Filter/FilterSide';
import { Box } from '@mui/system';

const cards = flowersData;

function Main() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedCards = useCards(cards, filter.sort, filter.query);

  return (
    <Container sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
      <FilterSide filter={filter} setFilter={setFilter} />
      <Box>
        <CardsSort filter={filter} setFilter={setFilter} />
        <CardList cards={sortedCards} />
      </Box>
    </Container>
  );
}

export default Main;
