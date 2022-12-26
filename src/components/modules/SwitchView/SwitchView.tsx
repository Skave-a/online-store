import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { Box, IconButton } from '@mui/material';

const iconBoxSX = {
  display: 'flex',
  alignItems: 'center',
  color: '#006666',
};
export const SwitchView = ({
  setIsGrid,
  setSearchParams,
}: {
  setIsGrid: Function;
  setSearchParams: Function;
}) => {
  function isGridHandleFalse() {
    setIsGrid('false');
    setSearchParams({ grid: 'false' });
  }
  function isGridHandleTrue() {
    setIsGrid('true');
    setSearchParams({ grid: 'true' });
  }
  return (
    <Box sx={iconBoxSX}>
      <IconButton color="inherit" onClick={isGridHandleFalse}>
        <ViewModuleRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton color="inherit" onClick={isGridHandleTrue}>
        <WindowRoundedIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};
