import { Button } from '@mui/material';
import style from './Main.module.css';

function Main({
  setTotalQuantity,
  totalQuantity,
}: {
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}) {
  return (
    <>
      <div className={style.main}>Main page</div>
      <Button
        onClick={() => {
          setTotalQuantity(totalQuantity + 1);
        }}
        variant="outlined"
        sx={{ position: 'absolute', marginLeft: '50px' }}
      >
        click +
      </Button>
    </>
  );
}

export default Main;
