import { FilterButton } from './FilterButton';

export const FilterReset = ({ setSearchParams }: { setSearchParams: () => void }) => {
  function handleClick() {
    setSearchParams();
  }
  return (
    <FilterButton variant="outlined" onClick={handleClick}>
      Reset Filters
    </FilterButton>
  );
};
