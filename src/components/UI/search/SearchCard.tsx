import { TextField } from '@mui/material';
import style from './SearchCard.module.css';

export const SearchCard = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Search by name"
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
