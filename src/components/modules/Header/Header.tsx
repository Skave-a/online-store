import { AppBar, Badge, IconButton, Toolbar, Typography, Link, Box } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { HEADER_MESSAGES } from '../../utils/constants';

export const Header: React.FC<{ totalQuantity: number; totalCostCart: number }> = ({
  totalQuantity,
  totalCostCart,
}) => {
  return (
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon style={{ color: '#006666' }} />
          </IconButton>
        </Box>
        <Typography
          variant="h1"
          fontSize={35}
          sx={{ flexGrow: 1 }}
          fontFamily={`'Pacifico', cursive`}
          color="#006666"
        >
          <Link component={RouterLink} to="/" underline="none" color="#006666">
            {HEADER_MESSAGES.myFlowers}
          </Link>
        </Typography>
        <Typography
          variant="h2"
          fontSize={25}
          sx={{ flexGrow: 1 }}
          fontFamily={`'Pacifico', cursive`}
          color="#006666"
        >
          {HEADER_MESSAGES.cartTotal} {totalCostCart}$
        </Typography>
        <RouterLink to="/cart">
          <IconButton color="inherit">
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              overlap="circular"
              color="error"
              badgeContent={totalQuantity}
            >
              {
                <AddShoppingCartOutlinedIcon
                  style={{ color: '#006666' }}
                  sx={{ fontSize: 48, marginTop: 1 }}
                />
              }
            </Badge>
          </IconButton>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};
