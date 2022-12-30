import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ICardsFiter, Iparams } from '../../types/types';
import { FilterCheckbox } from './FilterCheckbox';
import { Typography } from '@mui/material';

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
  mb: '20px',
};

const boxFilterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
  mb: '20px',
  flexDirection: 'column',
};

export const FilterSide = ({
  filter,
  setFilter,
  searchQuery,
  famQuery,
  params,
  handleChange,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  searchQuery: string;
  famQuery: string;
  params: Iparams;
  handleChange: Function;
}) => {
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setFilter({ ...filter, query: e.target.value });
    if (e.target.value) params.search = e.target.value;
    handleChange();
  }
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Box sx={boxStyle}>
        <SearchCard
          onChange={(e) => {
            inputHandler(e);
          }}
          value={filter.query}
          searchQuery={searchQuery}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>Family</Typography>
        <FilterCheckbox
          filter={filter}
          setFilter={setFilter}
          handleChange={handleChange}
          params={params}
          famQuery={famQuery}
        />
      </Box>
    </Box>
  );
};
