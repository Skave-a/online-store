import { Container, Typography } from '@mui/material';
import { SOME_MESSAGE } from '../../utils/constants';

export const Header: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" sx={{ backgroundColor: 'lightgrey', mt: 4, mb: 2, pl: 1.7 }}>
        {SOME_MESSAGE}
      </Typography>
    </Container>
  );
};
