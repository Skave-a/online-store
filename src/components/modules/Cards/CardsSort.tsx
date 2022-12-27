import { SelectCards } from '../Select/SelectCards';
import React, { Dispatch } from 'react';
import { Box, Typography } from '@mui/material';
import { FlowersType } from '../../types/types';
import { SwitchView } from '../SwitchView/SwitchView';
import { Iparams } from '../Main/Main';

interface ICardsFiter {
  sort: string;
  query: string;
}

const boxSX = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const CardsSort = ({
  filter,
  setFilter,
  cards,
  sortQuery,
  handleChange,
  setIsGrid,
  params,
  isGridQuery,
  isGrid,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<ICardsFiter>;
  cards: FlowersType[];
  sortQuery: string;
  handleChange: Function;
  params: Iparams;
  setIsGrid: Function;
  isGridQuery: string;
  isGrid: string;
}) => {
  let sorted = filter.sort;
  return (
    <Box sx={boxSX}>
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
        handleChange={handleChange}
        params={params}
        sortQuery={sortQuery}
      />
      <Typography variant="h2" fontFamily={`'Pacifico', cursive`} fontSize={25}>
        Found: {cards.length}
      </Typography>
      <SwitchView
        setIsGrid={setIsGrid}
        handleChange={handleChange}
        params={params}
        isGridQuery={isGridQuery}
        isGrid={isGrid}
      />
    </Box>
  );
};

export default CardsSort;
