import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { flowersData } from '../../../data/data';
import { ICardsFiter } from '../../types/types';
import { listFamily } from '../../utils/constants';

export const FilterCheckbox = ({
  filter,
  setFilter,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
}) => {
  const arrFamily = Array.from(new Set(flowersData.map((el) => el.family)));
  const handleChange = (e: SyntheticEvent<Element, Event>) => {
    const name = e.target as HTMLInputElement;
    if (name.checked) {
      setFilter({ ...filter, familyFilter: name.value });
      listFamily.push(name.value);
    } else {
      listFamily.splice(listFamily.indexOf(name.value), 1);
    }
    console.log(listFamily);
  };

  return (
    <FormGroup>
      {arrFamily.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox />}
          label={item}
          value={item}
          onChange={handleChange}
        />
      ))}
    </FormGroup>
  );
};
