import { useEffect, useState } from 'react';
import { FlowersType } from '../../types/types';
import { CartItem } from './CartItem';

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

  const totalCostCart = cart?.reduce(
    (acc, el) => acc + (el.priceTotal ? el.priceTotal : el.price),
    0
  );

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
      <CartItem
        pagesPerPage={pagesPerPage}
        totalQuantity={totalQuantity}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        page={page}
        setPage={setPage}
        cart={cart}
        totalCostCart={totalCostCart}
        augmentHandler={augmentHandler}
        decrementHandler={decrementHandler}
      />
    </>
  );
}

export default Cart;
