import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const labelSX = {
  color: '#006666',
  '&:focus': {
    color: '#006666',
  },
};

export const Sort = () => {
  const [SORT, setSORT] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSORT(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 215 }} size="small">
      <InputLabel id="demo-select-small" sx={labelSX}>
        SORT
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={SORT}
        label="SORT"
        onChange={handleChange}
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006666',
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Sort by price ASC</MenuItem>
        <MenuItem value={2}>Sort by price DESC</MenuItem>
        <MenuItem value={3}>Sort by rating ASC</MenuItem>
        <MenuItem value={4}>Sort by rating DESC</MenuItem>
        <MenuItem value={5}>Sort by discount ASC</MenuItem>
        <MenuItem value={6}>Sort by discount DESC</MenuItem>
      </Select>
    </FormControl>
  );
};
