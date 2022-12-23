// import { Sort } from '../../UI/select/Select';
import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useMemo, useState } from 'react';
import { flowersData } from '../../../data/data';
import { FlowersType } from '../../types/types';
import CardsFilter from '../Cards/CardsFilter';

function Main() {
  const [cards, setCards] = useState(flowersData);
  const [filter, setFilter] = useState({ sort: '' });

  const sortedCards = useMemo(() => {
    if (filter.sort) {
      return [...cards].sort((a, b) => {
        if (filter.sort.includes('2')) {
          const sliced = filter.sort.slice(0, -1);
          if (typeof a[sliced as keyof FlowersType] == 'number') {
            let first = b[sliced] as number;
            let second = a[sliced] as number;
            return first - second;
          } else {
            let first = b[sliced] as string;
            let second = a[sliced] as string;
            return first.localeCompare(second);
          }
        } else {
          if (typeof a[filter.sort as keyof FlowersType] == 'number') {
            let first = b[filter.sort] as number;
            let second = a[filter.sort] as number;
            return second - first;
          } else {
            let first = b[filter.sort] as string;
            let second = a[filter.sort] as string;
            return second.localeCompare(first);
          }
        }
      });
    } else {
      return cards;
    }
  }, [filter.sort, cards]);
  return (
    <Container sx={{ mt: '20px' }}>
      <CardsFilter filter={filter} setFilter={setFilter} />
      <CardList cards={sortedCards} />
    </Container>
  );
}

export default Main;
