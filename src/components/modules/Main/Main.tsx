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

export interface Iparams {
  [key: string]: string;
}
const params: Iparams = {};

function Main() {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const sortQuery = searchParams.get('sort') || '';
  const isGridQuery = searchParams.get('grid') || '';
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedCards = useCards(cards, filter.sort, filter.query, searchQuery, sortQuery);
  const [isGrid, setIsGrid] = useState('false');
  function handleChange() {
    setSearchParams(params);
    console.log(params);
  }
  return (
    <Container sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
      <FilterSide
        filter={filter}
        setFilter={setFilter}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
        params={params}
        handleChange={handleChange}
      />
      <Box>
        <CardsSort
          filter={filter}
          setFilter={setFilter}
          cards={sortedCards}
          handleChange={handleChange}
          sortQuery={sortQuery}
          setIsGrid={setIsGrid}
          params={params}
          isGridQuery={isGridQuery}
          isGrid={isGrid}
        />
        <CardList cards={sortedCards} isGrid={isGrid} isGridQuery={isGridQuery} />
      </Box>
    </Container>
  );
}

export default Main;
