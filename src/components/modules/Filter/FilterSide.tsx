import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Iparams } from '../../types/types';

interface ICardsFiter {
  sort: string;
  query: string;
}

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
};

export const FilterSide = ({
  filter,
  setFilter,
  searchQuery,
  params,
  handleChange,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<
    SetStateAction<{
      sort: string;
      query: string;
    }>
  >;
  searchQuery: string;
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
    </Box>
  );
};
