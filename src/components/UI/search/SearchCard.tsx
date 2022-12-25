import { TextField } from '@mui/material';
import style from './SearchCard.module.css';

export const SearchCard = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (query: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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
