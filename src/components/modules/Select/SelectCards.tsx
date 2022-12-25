import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface IOptionSort {
  value: string;
  name: string;
  id: number;
}

export const SelectCards = ({
  options,
  value,
  onChange,
}: {
  options: IOptionSort[];
  value: string;
  onChange: (sort: string) => void;
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 215 }} size="small">
      <InputLabel id="demo-select-small">SORT</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="SORT"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006666',
          },
        }}
        inputProps={{ color: 'success' }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option: IOptionSort) => (
          <MenuItem key={option.id} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
