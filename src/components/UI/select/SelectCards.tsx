import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const labelSX = {
  color: '#006666',
  '&:focus': {
    color: '#006666 !important',
  },
};

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
      <InputLabel id="demo-select-small" sx={labelSX}>
        SORT
      </InputLabel>
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
