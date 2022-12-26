import { TextField } from '@mui/material';
import style from './SearchCard.module.css';

export const SearchCard = ({
  value,
  onChange,
  searchQuery,
}: {
  value: string;
  onChange: (query: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}) => {
  if (searchQuery) {
    value = searchQuery as string;
  }
  return (
    <TextField
      value={value}
      onChange={onChange}
      id="outlined-basic"
      label="Search..."
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': { borderColor: '#006666' },
        },
      }}
      InputLabelProps={{ className: style.labelSX }}
    />
  );
};
