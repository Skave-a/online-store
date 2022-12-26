import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';

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
  setFilter: React.Dispatch<
    React.SetStateAction<{
      sort: string;
      query: string;
    }>
  >;
  setSearchParams: Function;
  searchQuery: string;
}) => {
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Box sx={boxStyle}>
        <SearchCard
          onChange={(e) => {
            setSearchParams({ search: e.target.value });
            setFilter({ ...filter, query: e.target.value });
          }}
          value={filter.query}
          searchQuery={searchQuery}
        />
      </Box>
    </Box>
  );
};
