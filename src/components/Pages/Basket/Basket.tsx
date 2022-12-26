import { useEffect, useState } from 'react';
import { Box, Button, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Pagination from '../../utils/Pagination';
import { Link } from 'react-router-dom';
import { FlowersType } from '../../types/types';

function Basket({
  setTotalQuantity,
  totalQuantity,
  product,
  setProduct,
}: {
  setTotalQuantity: (arg0: number) => void;
  setProduct: (arg0: FlowersType[]) => void;
  totalQuantity: number;
  product: FlowersType[];
}) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(() => {
    return Number(localStorage.getItem('page')) ?? 0;
  });
  const [pages, setPages] = useState<FlowersType[]>([]);

  const totalBasket = product?.reduce(
    (acc, el) => acc + (el.priceTotal ? el.priceTotal : el.price),
    0
  );

  let totQuantity = product.reduce((acc, el) => acc + el.quantity, 0);

  useEffect(() => {
    const basketPages =
      rowsPerPage > 0
        ? product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : product;
    setPages(basketPages);
    localStorage.clear();
    localStorage.setItem('page', JSON.stringify(page));
    if (totQuantity) setTotalQuantity(totQuantity);
  }, [setTotalQuantity, page, totQuantity, product]);

  const augmentHandler = (name: string) => {
    setProduct(
      product.map((item) => {
        if (item.stock && item.name === name && item.quantity < item.stock) {
          return {
            ...item,
            quantity: ++item.quantity,
            priceTotal: item.quantity * item.price,
          };
        }
        return item;
      })
    );
  };

  const decrementHandler = (name: string) => {
    setProduct(
      product
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
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      {pages.length ? (
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
            basket={product}
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
              {pages?.map((item, index) => {
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
      ) : (
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
