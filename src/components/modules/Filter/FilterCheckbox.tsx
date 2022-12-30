import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { ICardsFiter, Iparams } from '../../types/types';
import { arrFamily } from '../../utils/constants';

export let listFamily = arrFamily.slice(0);
let checkedFamily: string[] = [];

export const FilterCheckbox = ({
  filter,
  setFilter,
  handleChange,
  params,
  famQuery,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  handleChange: Function;
  params: Iparams;
  famQuery: string;
}) => {
  const handleChangeCheckbox = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    const name = e.target as HTMLInputElement;
    // console.log(name.checked);
    const value = name.value;
    if (name.checked) {
      if (checkedFamily.length >= arrFamily.length && !famQuery) {
        console.log(famQuery);
        checkedFamily = [];
      }
      checkedFamily.push(value);
      setFilter({ ...filter, familyFilter: checkedFamily });
    } else {
      checkedFamily.splice(checkedFamily.indexOf(value), 1);
      if (checkedFamily.length === 0) {
        checkedFamily = arrFamily.slice(0);
      }
      setFilter({ ...filter, familyFilter: checkedFamily });
    }
    listFamily = checkedFamily;
    if (listFamily.length >= arrFamily.length) {
      params.fam = '';
    } else {
      params.fam = listFamily.join('&');
    }
    handleChange();
  };
  return (
    <FormGroup>
      {arrFamily.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox onChange={handleChangeCheckbox} />}
          label={item}
          value={item}
        />
      ))}
    </FormGroup>
  );
};
