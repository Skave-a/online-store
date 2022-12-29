import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useState } from 'react';
import CardsSort from '../Cards/CardsSort';
import { useCards } from '../../hooks/useCards';
import { FlowersType } from '../../types/types';
import { FilterSide } from '../Filter/FilterSide';
import { Box } from '@mui/system';
import { useSearchParams } from 'react-router-dom';
import { cards, params } from '../../utils/constants';
import { listFamily } from '../Filter/FilterCheckbox';

function Main({
  setCart,
  cart,
  setTotalQuantity,
  totalQuantity,
}: {
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const sortQuery = searchParams.get('sort') || '';
  const isGridQuery = searchParams.get('grid') || '';
  function handleChange() {
    setSearchParams(params);
  }
  const [filter, setFilter] = useState({ sort: '', query: '', familyFilter: listFamily });
  const sortedCards = useCards(
    cards,
    filter.sort,
    filter.query,
    filter.familyFilter,
    searchQuery,
    sortQuery
  );
  const [isGrid, setIsGrid] = useState('false');
  return (
    <Container sx={{ mt: '20px', display: 'flex', gap: '20px' }}>
      <FilterSide
        filter={filter}
        setFilter={setFilter}
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
          isGrid={isGrid}
        />
        <CardList
          cards={sortedCards}
          setCart={setCart}
          cart={cart}
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
          isGrid={isGrid}
          isGridQuery={isGridQuery}
        />
      </Box>
    </Container>
  );
}

export default Main;
