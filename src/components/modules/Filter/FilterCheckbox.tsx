import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { ICardsFiter } from '../../types/types';
import { arrFamily } from '../../utils/constants';

export let listFamily = arrFamily.slice(0);
let checkedFamily: string[] = [];

export const FilterCheckbox = ({
  filter,
  setFilter,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
}) => {
  const handleChange = (e: SyntheticEvent<Element, Event>) => {
    const name = e.target as HTMLInputElement;
    const value = name.value;
    if (name.checked) {
      if (checkedFamily.length >= arrFamily.length) {
        checkedFamily = [];
      }
      checkedFamily.push(value);
      setFilter({ ...filter, familyFilter: checkedFamily });
      console.log('checkedFamily+', checkedFamily);
    } else {
      checkedFamily.splice(checkedFamily.indexOf(value), 1);
      if (checkedFamily.length === 0) {
        checkedFamily = arrFamily.slice(0);
      }
      setFilter({ ...filter, familyFilter: checkedFamily });
    }
    listFamily = checkedFamily;
  };

  return (
    <FormGroup>
      {arrFamily.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox onChange={handleChange} />}
          label={item}
          value={item}
        />
      ))}
    </FormGroup>
  );
};
