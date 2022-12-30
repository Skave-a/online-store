import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';
import { FilterCheckbox } from './FilterCheckbox';
import { Typography } from '@mui/material';
import { arrFamily, arrFamilyNoSet } from '../../utils/constants';

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
  mb: '20px',
};

const boxFilterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
  mb: '20px',
  flexDirection: 'column',
};

export let listFamily = arrFamily.slice(0);
let checkedFamily: string[] = [];
let paramsFam = 'fam';

export const FilterSide = ({
  filter,
  setFilter,
  searchQuery,
  famQuery,
  params,
  handleChange,
  cards,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  searchQuery: string;
  famQuery: string;
  params: Iparams;
  handleChange: Function;
  cards: FlowersType[];
}) => {
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setFilter({ ...filter, query: e.target.value });
    if (e.target.value) params.search = e.target.value;
    handleChange();
  }
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Box sx={boxStyle}>
        <SearchCard
          onChange={(e) => {
            inputHandler(e);
          }}
          value={filter.query}
          searchQuery={searchQuery}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>Family</Typography>
        <FilterCheckbox
          setFil={{ ...filter, familyFilter: checkedFamily }}
          setFilter={setFilter}
          handleChange={handleChange}
          params={params}
          paramQuery={famQuery}
          paramsFil={paramsFam}
          cards={cards}
          listOfFilter={listFamily}
          checkedArr={checkedFamily}
          sortBy={'family'}
          arrSort={arrFamily}
          arrNoSet={arrFamilyNoSet as string[]}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>Genus</Typography>
        <FilterCheckbox
          setFil={{ ...filter, familyFilter: checkedFamily }}
          setFilter={setFilter}
          handleChange={handleChange}
          params={params}
          paramQuery={famQuery}
          paramsFil={paramsFam}
          cards={cards}
          listOfFilter={listFamily}
          checkedArr={checkedFamily}
          sortBy={'family'}
          arrSort={arrFamily}
          arrNoSet={arrFamilyNoSet as string[]}
        />
      </Box>
    </Box>
  );
};
