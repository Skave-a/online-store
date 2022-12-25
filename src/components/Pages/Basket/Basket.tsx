import { useEffect, useState } from 'react';
import { Box, Button, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import { flowersData } from '../../../data/data';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Pagination from '../../utils/Pagination';
import { Link } from 'react-router-dom';
import { FlowersData } from '../../types/types';

function Basket({
  setTotalQuantity,
  totalQuantity,
}: {
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(() => {
    return Number(localStorage.getItem('page')) ?? 0;
  });

  const [basket, setBasket] = useState<FlowersData[]>(
    totalQuantity ? flowersData.slice(0, totalQuantity) : []
  ); // entry point of basket
  console.log('totalQuantity', totalQuantity);
  console.log('basket', basket);

  const totalBasket = basket.reduce(
    (acc, el) => acc + (el.priceTotal ? el.priceTotal : el.price),
    0
  );

  const basketPages =
    rowsPerPage > 0 ? basket.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : basket;

  if (!basketPages.length) setPage(page - 1);

  let totQuantity = basket.reduce((acc, el) => acc + el.quantity, 0);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('page', JSON.stringify(page));
    setTotalQuantity(totQuantity);
  }, [setTotalQuantity, page, totQuantity]);

  const augmentHandler = (name: string) => {
    setBasket((basket) => {
      return basket.map((item) => {
        if (item.name === name && item.quantity < item.stock) {
          return {
            ...item,
            quantity: ++item.quantity,
            priceTotal: item.quantity * item.price,
          };
        }
        return item;
      });
    });
  };

  const decrementHandler = (name: string) => {
    /* if (basket.length > 1) { */
    setBasket((basket) => {
      return basket
        .map((item) => {
          if (item.name === name) {
            return {
              ...item,
              quantity: --item.quantity,
              priceTotal: item.priceTotal ? item.priceTotal - item.price : undefined,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
    /* } else {
      setError(true);
      setTotalQuantity(0);
    } */
  };

  return (
    <>
      {!error && (
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontSize={30}
            sx={{ flexGrow: 1, m: 5 }}
            fontFamily={`font-family: sans-serif`}
            color="#006666"
          >
            Ваша корзина:{totalQuantity}
          </Typography>
          <Pagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            page={page}
            setPage={setPage}
            basket={basket}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  border: 1,
                  height: '9rem',
                  borderColor: 'grey.500',
                  borderRadius: 1,
                  marginBottom: 2,
                  p: 2,
                  boxShadow: 1,
                }}
              >
                <Typography
                  variant="h2"
                  fontSize={30}
                  fontFamily={`font-family: sans-serif`}
                  color="#006666"
                  margin={1}
                >
                  Итого:
                </Typography>
                <Divider sx={{ m: 4 }} variant="middle" />
                <Typography
                  variant="h2"
                  fontSize={30}
                  fontFamily={`font-family: sans-serif`}
                  color="#006666"
                  margin={1}
                  textAlign={'right'}
                >
                  {`${totalBasket}$`}
                </Typography>
              </Box>
              <Button fullWidth sx={{ mb: 2 }} variant="outlined">
                Оформить заказ
              </Button>
              <Button fullWidth variant="outlined">
                Продолжить покупки
              </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
              {basketPages?.map((item, index) => {
                return (
                  <Box
                    key={item.name}
                    sx={{
                      border: 1,
                      height: '10rem',
                      borderColor: 'grey.500',
                      borderRadius: 1,
                      marginBottom: 2,
                      p: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      boxShadow: 1,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: '98%',
                        width: '20%',
                      }}
                      image={item.photos[0]}
                      alt="Plant image"
                    />
                    <Typography
                      fontFamily={`font-family: sans-serif`}
                      color="#006666"
                      margin={1}
                      sx={{ fontSize: { xs: 12, sm: 14 } }}
                      align="justify"
                    >
                      Name:{item.name}, Family:{item.family}, Genus:{item.genus}, Stock:{item.stock}
                    </Typography>
                    <Typography
                      fontFamily={`font-family: sans-serif`}
                      color="#006666"
                      margin={1}
                      sx={{ fontSize: { xs: 12, sm: 14 } }}
                      align="justify"
                    >
                      Номер товара:{index + 1}
                    </Typography>
                    <Box>
                      <Button
                        onClick={() => {
                          augmentHandler(item.name);
                        }}
                        sx={{ minWidth: { xs: 33, sm: 64 } }}
                        variant="outlined"
                      >
                        +
                      </Button>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        sx={{ fontSize: { xs: 20, sm: 25 }, ml: { xs: 1.7, sm: 2.9 } }}
                        variant="h6"
                      >
                        {item.quantity}
                      </Typography>
                      <Button
                        onClick={() => {
                          decrementHandler(item.name);
                        }}
                        sx={{ minWidth: { xs: 40, sm: 64 } }}
                        variant="outlined"
                      >
                        -
                      </Button>
                    </Box>
                    <Box>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        sx={{ textAlign: 'center', fontSize: { xs: 20, sm: 27 } }}
                      >
                        {item.priceTotal ? item.priceTotal : item.price}$
                      </Typography>
                      <Button>{<DeleteForeverIcon color="error" fontSize="large" />}</Button>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      )}
      {error && (
        <Box sx={{ position: 'absolute', top: '40%', left: '45%' }}>
          <Typography
            variant="h2"
            fontSize={35}
            /* sx={{ flexGrow: 1 }} */
            fontFamily={`'Pacifico', cursive`}
            color="#006666"
          >
            Basket empty
          </Typography>
          <Link
            style={{
              display: 'inline-block',
              position: 'relative',
              marginTop: '20px',
              fontWeight: '500',
              textDecoration: 'none',
              borderRadius: '8px',
              color: ' #fff',
              textTransform: 'uppercase',
              padding: '8px 12px',
              background: '#006666',
              fontSize: '15px',
              transition: '0.2s all',
            }}
            to="/"
          >
            Go to Home page
          </Link>
        </Box>
      )}
    </>
  ); /*  */
}

export default Basket;
