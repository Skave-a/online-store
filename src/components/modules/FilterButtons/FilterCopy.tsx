import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';

export const FilterCopy = () => {
  const clipboard = useClipboard();

  const handleClick = useCallback(() => {
    const url = window.location.href;
    clipboard.copy(url);
  }, [clipboard.copy]);
  return (
    <Button variant="outlined" onClick={handleClick}>
      Copy Link
    </Button>
  );
};
