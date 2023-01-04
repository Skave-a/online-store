import { flowersData } from '../../../data/data';
import { Link, useParams } from 'react-router-dom';
import { Box, CardMedia, Container, Rating, Typography } from '@mui/material';
import { SERVICE_MESSAGES, typographySX } from '../../utils/constants';
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
  // const { name, family, genus, price, description, stock, shop } = flowersData[idet];
  // const arrParam = [name, family, genus, price, description, stock, shop];
  return (
    <Container
      sx={{
        border: 1,
        borderColor: 'grey.500',
        borderRadius: 1,
        marginBottom: 2,
        p: 2,
        boxShadow: 1,
        mt: '20px',
      }}
    >
      {/* <Box> */}
      <Typography
        variant="h2"
        fontSize={30}
        fontFamily={`font-family: sans-serif`}
        color="#006666"
        margin={1}
        noWrap
        textAlign={'center'}
        mb={5}
      >
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          {SERVICE_MESSAGES.store}
        </Link>
        - {flowersData[idet].shop} - {flowersData[idet].family} - {flowersData[idet].name}
      </Typography>
      <Box sx={{ display: 'flex', gap: '10%' }}>
        <CardMedia
          component="img"
          sx={{
            height: '98%',
            width: '25%',
          }}
          image={flowersData[idet].photos[0]}
          alt="Plant image"
        />
        <Box>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.name} {flowersData[idet].name}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.family} {flowersData[idet].family}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.genus} {flowersData[idet].genus}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.price} {flowersData[idet].price}$
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.description} {flowersData[idet].description}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.stock} {flowersData[idet].stock}
          </Typography>
          <Typography sx={typographySX}>
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
      </Box>
      {/* </Box> */}
    </Container>
  );
}
