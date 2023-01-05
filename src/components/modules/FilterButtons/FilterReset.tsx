import { BUTTONS, SERVICE_MESSAGES } from '../../utils/constants';
import { FilterButton } from './FilterButton';

export const FilterReset = ({ setSearchParams }: { setSearchParams: () => void }) => {
  function handleClick() {
    setSearchParams();
    BUTTONS.isPressed = true;
  }
  return (
    <FilterButton variant="outlined" onClick={handleClick}>
      {SERVICE_MESSAGES.resetFilters}
    </FilterButton>
  );
};
