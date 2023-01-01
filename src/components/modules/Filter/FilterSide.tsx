import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';
import { FilterCheckbox } from './FilterCheckbox';
import { Typography } from '@mui/material';
import { arrFamily, arrFamilyNoSet, arrPrice, arrShop, arrShopNoSet } from '../../utils/constants';
import FilterDuoSlider from './FilterDuoSlider';
import { flowersData } from '../../../data/data';

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
export let listShop = arrShop.slice(0);
export let listPrice = arrPrice.slice(0);
let checkedFamily: string[] = [];
let checkedShop: string[] = [];
let checkedPrice: number[] = [];
let maxPrice = Math.max(...Array.from(new Set(flowersData.map((el) => el.price))));
let minPrice = Math.min(...Array.from(new Set(flowersData.map((el) => el.price))));
// console.log(listPrice);
export const FilterSide = ({
  filter,
  setFilter,
  searchQuery,
  famQuery,
  params,
  handleChange,
  cards,
  shopQuery,
  priceQuery,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  searchQuery: string;
  famQuery: string;
  shopQuery: string;
  priceQuery: string;
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
          paramsFil={'fam'}
          cards={cards}
          listOfFilter={listFamily}
          checkedArr={checkedFamily}
          sortBy={'family'}
          arrSort={arrFamily}
          arrNoSet={arrFamilyNoSet as string[]}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>Shop</Typography>
        <FilterCheckbox
          setFil={{ ...filter, familyFilter: checkedShop }}
          setFilter={setFilter}
          handleChange={handleChange}
          params={params}
          paramQuery={shopQuery}
          paramsFil={'shop'}
          cards={cards}
          listOfFilter={listShop}
          checkedArr={checkedShop}
          sortBy={'shop'}
          arrSort={arrShop}
          arrNoSet={arrShopNoSet as string[]}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <FilterDuoSlider
          maxValue={maxPrice}
          minValue={minPrice}
          listOfFilter={listPrice}
          setFil={{ ...filter, priceFilter: checkedPrice }}
          checkedArr={checkedPrice}
          setFilter={setFilter}
          paramQuery={priceQuery}
          handleChange={handleChange}
          params={params}
          paramsFil={'price'}
        />
      </Box>
    </Box>
  );
};
