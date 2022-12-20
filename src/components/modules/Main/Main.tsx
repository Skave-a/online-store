// import { CardItem } from '../Cards/CardItem';
import Container from '@mui/material/Container/Container';
import { CardList } from '../Cards/CardList';
// import style from './Main.module.css';

function Main() {
  // const [cards] = useState(flowersData);
  return (
    <Container sx={{ mt: '20px' }}>
      <CardList />
    </Container>
  );
  // <div className={style.main}>Main page</div>;
}

export default Main;
