import { Box } from '@mui/system';
import { SearchCard } from '../../UI/search/SearchCard';

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
};

export const FilterSide = () => {
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Box sx={boxStyle}>
        <SearchCard />
      </Box>
    </Box>
  );
};
