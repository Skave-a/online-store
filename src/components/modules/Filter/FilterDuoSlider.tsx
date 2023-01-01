import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Dispatch, SetStateAction, useState } from 'react';
import Typography from '@mui/material/Typography';
import { ICardsFiter, Iparams } from '../../types/types';
import HeightIcon from '@mui/icons-material/Height';

const minDistance = 0;
// let maxPrice = Math.max(...Array.from(new Set(flowersData.map((el) => el.price))));
// let minPrice = Math.min(...Array.from(new Set(flowersData.map((el) => el.price))));
interface IProps {
  maxValue: number;
  minValue: number;
  listOfFilter: number[];
  checkedArr: number[];
  setFil: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  paramQuery: string;
  handleChange: Function;
  params: Iparams;
  paramsFil: string;
}
export default function FilterDuoSlider(props: IProps) {
  let {
    minValue,
    maxValue,
    listOfFilter,
    setFil,
    setFilter,
    checkedArr,
    paramQuery,
    params,
    handleChange,
    paramsFil,
  } = props;
  let startNum = minValue;
  let endNum = maxValue;
  if (paramQuery) {
    listOfFilter = paramQuery.split('&').map((el) => Number(el));
    startNum = listOfFilter[0];
    endNum = listOfFilter[1];
  }
  const [value, setValue] = useState<number[]>([startNum, endNum]);

  const handleChangeFil = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    checkedArr = [value[0], value[1]];
    setFilter(setFil);
    listOfFilter = checkedArr;
    if (listOfFilter.length === 0) {
      params[paramsFil] = '';
      handleChange();
    } else {
      params[paramsFil] = listOfFilter.join('&');
      handleChange();
    }
  };

  return (
    <Box sx={{ width: 250, margin: '0 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Typography>{value[0]}</Typography>
        <HeightIcon sx={{ transform: 'rotate(90deg)' }} />
        <Typography>{value[1]}</Typography>
      </Box>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChangeFil}
        valueLabelDisplay="auto"
        disableSwap
        min={minValue}
        max={maxValue}
        step={5}
      />
    </Box>
  );
}
