import { Sort } from '../../UI/select/Select';
import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
import { useMemo, useState } from 'react';
import { flowersData } from '../../../data/data';
import { FlowersType } from '../../types/types';

function Main() {
  const [cards, setCards] = useState(flowersData);
  const [selectedSort, setSelectedSort] = useState('');

  const sortedCards = useMemo(() => {
    if (selectedSort) {
      return [...cards].sort((a, b) => {
        if (selectedSort.includes('2')) {
          const sliced = selectedSort.slice(0, -1);
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
          if (typeof a[selectedSort as keyof FlowersType] == 'number') {
            let first = b[selectedSort] as number;
            let second = a[selectedSort] as number;
            return second - first;
          } else {
            let first = b[selectedSort] as string;
            let second = a[selectedSort] as string;
            return second.localeCompare(first);
          }
        }
      });
    } else {
      return cards;
    }
  }, [selectedSort, cards]);
  const sortCards = (sort: string) => {
    setSelectedSort(sort);
  };
  return (
    <Container sx={{ mt: '20px' }}>
      <Sort
        value={selectedSort}
        onChange={sortCards}
        options={[
          { id: 1, value: 'price', name: 'Sort by price ASC' },
          { id: 2, value: 'price2', name: 'Sort by price DESC' },
          { id: 3, value: 'rating', name: 'Sort by rating ASC' },
          { id: 4, value: 'rating2', name: 'Sort by rating DESC' },
          { id: 5, value: 'name', name: 'Sort by name ASC' },
          { id: 6, value: 'name2', name: 'Sort by name DESC' },
        ]}
      />
      <CardList cards={sortedCards} />
    </Container>
  );
}

export default Main;
