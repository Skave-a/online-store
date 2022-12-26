import { SelectCards } from '../Select/SelectCards';
import React, { Dispatch } from 'react';
import { Box, Typography } from '@mui/material';
import { FlowersType } from '../../types/types';

interface ICardsFiter {
  sort: string;
  query: string;
}

const CardsSort = ({
  filter,
  setFilter,
  cards,
  sortQuery,
  setSearchParams,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<ICardsFiter>;
  cards: FlowersType[];
  sortQuery: string;
  setSearchParams: Function;
}) => {
  let sorted = filter.sort;
  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <SelectCards
        value={sorted}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        options={[
          { id: 1, value: 'price', name: 'Sort by price ASC' },
          { id: 2, value: 'price2', name: 'Sort by price DESC' },
          { id: 3, value: 'rating', name: 'Sort by rating ASC' },
          { id: 4, value: 'rating2', name: 'Sort by rating DESC' },
          { id: 5, value: 'name', name: 'Sort by name ASC' },
          { id: 6, value: 'name2', name: 'Sort by name DESC' },
        ]}
        setSearchParams={setSearchParams}
        sortQuery={sortQuery}
      />
      <Typography variant="h2" fontFamily={`'Pacifico', cursive`} fontSize={25}>
        Found: {cards.length}
      </Typography>
    </Box>
  );
};

export default CardsSort;
