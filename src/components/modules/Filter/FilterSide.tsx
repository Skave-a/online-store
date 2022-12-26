import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

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
  setSearchParams,
  searchQuery,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<
    SetStateAction<{
      sort: string;
      query: string;
    }>
  >;
  setSearchParams: Function;
  searchQuery: string;
}) => {
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setSearchParams({ search: e.target.value });
    setFilter({ ...filter, query: e.target.value });
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
