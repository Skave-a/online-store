import { flowersData } from '../../data/data';
import { Iparams } from '../types/types';

export const SOME_MESSAGE = 'Hello Main Page';

export const LINK_TO_THE_COURSE = 'https://rs.school/js/';

export const PAGE_NOT_FOUND = {
  title: 'Oops!',
  subTitle: '404 - The Page can not be found',
  linkTitle: 'Go to homepage',
};

export const BUTTONS = {
  delete: 'Delete',
  add: 'Add',
  minus: '-',
  plus: '+',
};

export const SERVICE_MESSAGES = {
  goToBuy: 'Go to buy',
  cartEmpty: 'Cart empty',
  numberOfProduct: ' №:',
  name: 'Name:',
  family: 'Family:',
  genus: 'Genus:',
  stock: 'Stock:',
  buyNow: 'Buy now',
  buyMore: 'Buy more',
  yourCart: 'Your cart:',
  products: 'Products:',
  total: 'Total:',
  add: 'Add',
  drop: 'Drop',
};

export const PROMO = {
  rss10: 'RSS - 10%',
  epam10: 'EPAM - 10%',
  test: 'Promo for test: "rs" or "epm"',
};

export const params: Iparams = {};

export const cards = flowersData;

export const optionsForSort = [
  { id: 1, value: 'price', name: 'Sort by price ASC' },
  { id: 2, value: 'price2', name: 'Sort by price DESC' },
  { id: 3, value: 'rating', name: 'Sort by rating ASC' },
  { id: 4, value: 'rating2', name: 'Sort by rating DESC' },
  { id: 5, value: 'name', name: 'Sort by name ASC' },
  { id: 6, value: 'name2', name: 'Sort by name DESC' },
];

export const arrFamily = Array.from(new Set(flowersData.map((el) => el.family))).sort() as string[];
