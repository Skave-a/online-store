import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const pageQuery = Number(searchParams.get('page'));
  const rowsPerPageQuery = Number(searchParams.get('rowsPerPage'));

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
    if (!cart.length) {
      setTotalQuantity(0);
    }
    const pagesPaginated =
      rowsPerPageQuery > 0
        ? cart.slice(pageQuery * rowsPerPageQuery, pageQuery * rowsPerPageQuery + rowsPerPageQuery)
        : cart;

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

    localStorage.setItem('page', JSON.stringify(pageQuery));

    if (quantityTotal) setTotalQuantity(quantityTotal);
  }, [pageQuery, rowsPerPageQuery, cart, pagesPerPage.length]);

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
        setSearchParams={setSearchParams}
        pagesPerPage={pagesPerPage}
        totalQuantity={totalQuantity}
        cart={cart}
        totalCostCart={totalCostCart}
        augmentHandler={augmentHandler}
        decrementHandler={decrementHandler}
      />
    </>
  );
}

export default Cart;
