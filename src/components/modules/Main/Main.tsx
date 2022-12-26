import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useState } from 'react';
import { flowersData } from '../../../data/data';
import CardsSort from '../Cards/CardsSort';
import { useCards } from '../../hooks/useCards';
import { FilterSide } from '../Filter/FilterSide';
import { Box } from '@mui/system';
import { useSearchParams } from 'react-router-dom';

const cards = flowersData;

function Main() {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') as string;
  const sortQuery = searchParams.get('sort') as string;
  const isGridQuery = searchParams.get('grid') as string;
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedCards = useCards(cards, filter.sort, filter.query, searchQuery, sortQuery);
  const [isGrid, setIsGrid] = useState('false');
  return (
    <Container sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
      <FilterSide
        filter={filter}
        setFilter={setFilter}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
      />
      <Box>
        <CardsSort
          filter={filter}
          setFilter={setFilter}
          cards={sortedCards}
          setSearchParams={setSearchParams}
          sortQuery={sortQuery}
          setIsGrid={setIsGrid}
        />
        <CardList cards={sortedCards} isGrid={isGrid} isGridQuery={isGridQuery} />
      </Box>
    </Container>
  );
}

export default Main;
