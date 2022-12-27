import { useEffect, useState } from 'react';
import { Box, Button, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import Pagination from '../../utils/Pagination';
import { Link } from 'react-router-dom';
import { FlowersType } from '../../types/types';
import { BUTTONS, SERVICE_MESSAGES } from '../../utils/constants';

function Cart({
  setTotalQuantity,
  totalQuantity,
  cart,
  setCart,
}: {
  setTotalQuantity: (arg0: number) => void;
  setCart: (arg0: FlowersType[]) => void;
  totalQuantity: number;
  cart: FlowersType[];
}) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(() => {
    return Number(localStorage.getItem('page')) ?? 0;
  });

  const [pagesPerPage, setPages] = useState<FlowersType[]>(() => {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') || '').map((item: FlowersType) => {
          if (item.quantity === 0) {
            return { ...item, quantity: 1 };
          }
          return item;
        })
      : [];
  });

  const totalCart = cart?.reduce((acc, el) => acc + (el.priceTotal ? el.priceTotal : el.price), 0);

  let quantityTotal = cart
    .map((item) => {
      if (item.quantity === 0) {
        return { ...item, quantity: 1 };
      }
      return item;
    })
    .reduce((acc, el) => acc + el.quantity, 0);

  useEffect(() => {
    if (!pagesPerPage.length) {
      setPage(0);
    }
    if (!cart.length) {
      setTotalQuantity(0);
    }
    const pagesPaginated =
      rowsPerPage > 0 ? cart.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : cart;

    setPages(pagesPaginated);

    localStorage.setItem(
      'cart',
      JSON.stringify(
        cart.map((item) => {
          if (item.quantity === 0) {
            return { ...item, quantity: 1 };
          }
          return item;
        })
      )
    );
    localStorage.setItem('page', JSON.stringify(page));
    if (quantityTotal) setTotalQuantity(quantityTotal);
  }, [page, cart, pagesPerPage.length]);

  const augmentHandler = (name: string) => {
    setCart(
      cart.map((item) => {
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
    setCart(
      cart
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
      {pagesPerPage.length ? (
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontSize={30}
            sx={{ flexGrow: 1, m: 5 }}
            fontFamily={`font-family: sans-serif`}
            color="#006666"
          >
            {SERVICE_MESSAGES.yourCart}
            {totalQuantity}
          </Typography>
          <Pagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            page={page}
            setPage={setPage}
            cart={cart}
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
                  {SERVICE_MESSAGES.yourCart}
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
                  {`${totalCart}$`}
                </Typography>
              </Box>
              <Button fullWidth sx={{ mb: 2 }} variant="outlined">
                {SERVICE_MESSAGES.buyNow}
              </Button>
              <Button fullWidth variant="outlined">
                {SERVICE_MESSAGES.buyMore}
              </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
              {pagesPerPage?.map((item, index) => {
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
                    <Box>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        align="left"
                      >
                        {SERVICE_MESSAGES.name}
                        {item.name}
                      </Typography>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        align="left"
                      >
                        {SERVICE_MESSAGES.genus}
                        {item.genus}
                      </Typography>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        align="left"
                      >
                        {SERVICE_MESSAGES.stock}
                        {item.stock}
                      </Typography>
                    </Box>

                    <Typography
                      fontFamily={`font-family: sans-serif`}
                      color="#006666"
                      margin={1}
                      sx={{ fontSize: { xs: 12, sm: 14 } }}
                      align="justify"
                    >
                      {SERVICE_MESSAGES.numberOfProduct}
                      {index + 1}
                    </Typography>
                    <Box>
                      <Button
                        onClick={() => {
                          augmentHandler(item.name);
                        }}
                        sx={{ minWidth: { xs: 33, sm: 64 } }}
                        variant="outlined"
                      >
                        {BUTTONS.plus}
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
                        {BUTTONS.minus}
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
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Box sx={{ position: 'absolute', top: '40%', left: '45%' }}>
          <Typography variant="h2" fontSize={35} color="#006666">
            {SERVICE_MESSAGES.cartEmpty}
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
            {SERVICE_MESSAGES.goToBuy}
          </Link>
        </Box>
      )}
    </>
  ); /*  */
}

export default Cart;
