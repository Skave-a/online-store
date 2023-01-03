import { flowersData } from '../../../data/data';
import { Link, useParams } from 'react-router-dom';
import { Box, Container, Rating, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../utils/constants';
import { FlowersType } from '../../types/types';
import { ButtonCard } from '../../modules/ButtonCard/ButtonCard';

interface ISinglePage {
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

export default function SinglePage(props: ISinglePage) {
  const { id } = useParams();
  const idet = Number(id) - 1;
  return (
    <Container sx={{ mt: '20px' }}>
      <Box
        sx={{
          border: 1,
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
          noWrap
          textAlign={'center'}
        >
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            {SERVICE_MESSAGES.store}
          </Link>
          - {flowersData[idet].shop} - {flowersData[idet].family} - {flowersData[idet].name}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.name} {flowersData[idet].name}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.family} {flowersData[idet].family}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.genus} {flowersData[idet].genus}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.price} {flowersData[idet].price}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.description} {flowersData[idet].description}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.stock} {flowersData[idet].stock}
        </Typography>
        <Typography>
          {SERVICE_MESSAGES.shop} {flowersData[idet].shop}
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={flowersData[idet].rating}
          precision={0.5}
          readOnly
          sx={{ padding: '0 0 10px 16px' }}
        />
        <ButtonCard
          cards={flowersData[idet]}
          setCart={props.setCart}
          cart={props.cart}
          totalQuantity={props.totalQuantity}
          setTotalQuantity={props.setTotalQuantity}
        />
      </Box>
    </Container>
  );
}
