import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { flowersData } from '../../../data/data';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';
import { arrFamily, arrFamilyNoSet } from '../../utils/constants';

export let listFamily = arrFamily.slice(0);
let checkedFamily: string[] = [];

export const FilterCheckbox = ({
  filter,
  setFilter,
  handleChange,
  params,
  famQuery,
  cards,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  handleChange: Function;
  params: Iparams;
  famQuery: string;
  cards: FlowersType[];
}) => {
  const handleChangeCheckbox = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    const name = e.target as HTMLInputElement;
    const value = name.value;
    checkedFamily = listFamily;
    if (name.checked) {
      if (checkedFamily.length >= arrFamily.length && !famQuery) {
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
      handleChange();
    } else {
      params.fam = listFamily.join('&');
      handleChange();
    }
  };
  if (famQuery) {
    listFamily = famQuery.split('&');
  }
  let coutCards: FlowersType[];
  if (cards.length === 0) {
    coutCards = flowersData;
  } else {
    coutCards = cards;
  }
  return (
    <FormGroup>
      {arrFamily.map((item) => {
        if (listFamily.includes(item) && listFamily.length < arrFamily.length) {
          return (
            <FormControlLabel
              defaultValue=""
              key={item}
              control={<Checkbox onChange={handleChangeCheckbox} checked={true || false} />}
              label={`${item} ${coutCards.filter((card) => card.family === item).length}/${
                arrFamilyNoSet.filter((el) => el === item).length
              }`}
              value={item || ''}
            />
          );
        } else {
          return (
            <FormControlLabel
              defaultValue=""
              key={item}
              control={<Checkbox onChange={handleChangeCheckbox} checked={false || false} />}
              label={`${item} ${coutCards.filter((card) => card.family === item).length}/${
                arrFamilyNoSet.filter((el) => el === item).length
              }`}
              value={item || ''}
            />
          );
        }
      })}
    </FormGroup>
  );
};
