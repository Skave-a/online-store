import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useState } from 'react';
import { flowersData } from '../../../data/data';
import CardsSort from '../Cards/CardsSort';
import { useCards } from '../../hooks/useCards';
import { FlowersType } from '../../types/types';
import { FilterSide } from '../Filter/FilterSide';
import { Box } from '@mui/system';
import { useSearchParams } from 'react-router-dom';

const cards = flowersData;

function Main({
  setProduct,
  product,
  setTotalQuantity,
  totalQuantity,
}: {
  setProduct: (arg0: FlowersType[]) => void;
  product: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') as string;
  const sortQuery = searchParams.get('sort') as string;
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedCards = useCards(cards, filter.sort, filter.query, searchQuery, sortQuery);
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
        />
        <CardList
          cards={sortedCards}
          setProduct={setProduct}
          product={product}
          totalQuantity={totalQuantity}
          setTotalQuantity={setTotalQuantity}
        />
      </Box>
    </Container>
  );
}

export default Main;
