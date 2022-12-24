import { Box } from '@mui/system';
import { SearchCard } from '../../UI/search/SearchCard';

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
}: {
  filter: ICardsFiter;
  setFilter: React.Dispatch<
    React.SetStateAction<{
      sort: string;
      query: string;
    }>
  >;
}) => {
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Box sx={boxStyle}>
        <SearchCard
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          value={filter.query}
        />
      </Box>
    </Box>
  );
};
