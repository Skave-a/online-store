import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { Box, IconButton } from '@mui/material';
import { Iparams } from '../Main/Main';

const iconBoxSX = {
  display: 'flex',
  alignItems: 'center',
  color: '#006666',
};
export const SwitchView = ({
  setIsGrid,
  handleChange,
  params,
  isGridQuery,
  isGrid,
}: {
  setIsGrid: Function;
  handleChange: Function;
  params: Iparams;
  isGridQuery: string;
  isGrid: string;
}) => {
  function isGridHandleFalse() {
    setIsGrid('false');
    if (isGrid) params.grid = 'false';
    handleChange();
  }
  function isGridHandleTrue() {
    setIsGrid('true');
    if (isGrid) params.grid = 'true';
    handleChange();
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
