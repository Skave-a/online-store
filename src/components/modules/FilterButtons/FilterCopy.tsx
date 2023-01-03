import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { FilterButton } from './FilterButton';

export const FilterCopy = () => {
  const clipboard = useClipboard();

  const handleClick = useCallback(() => {
    const url = window.location.href;
    clipboard.copy(url);
  }, [clipboard.copy]);
  return (
    <FilterButton variant="outlined" onClick={handleClick}>
      Copy Link
    </FilterButton>
  );
};
