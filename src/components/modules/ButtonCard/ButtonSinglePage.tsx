import { Button } from '@mui/material';
import { FlowersType } from '../../types/types';
import { MouseEvent } from 'react';
import { btnSX, SERVICE_MESSAGES } from '../../utils/constants';

interface Icards {
  cards: FlowersType;
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

export const ButtonSinglePage = (props: Icards) => {
  const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const isEqual = props.cart.some((item) => item.id === props.cards.id);
    if (!isEqual) {
      props.setCart([...props.cart, props.cards]);
      props.setTotalQuantity(props.totalQuantity + 1);
    }
  };

  return (
    <Button
      onClick={(e) => {
        buttonHandler(e);
      }}
      sx={btnSX}
    >
      {SERVICE_MESSAGES.buyNow}
    </Button>
  );
};
