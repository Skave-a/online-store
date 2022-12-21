import { Sort } from '../../UI/select/Sort';
import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';

function Main() {
  return (
    <Container sx={{ mt: '20px' }}>
      <Sort />
      <CardList />
    </Container>
  );
}

export default Main;
