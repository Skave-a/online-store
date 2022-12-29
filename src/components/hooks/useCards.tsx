import { useMemo } from 'react';
import { FlowersType } from '../types/types';

export const useSortedCards = (cards: FlowersType[], sort: string, sortQuery: string) => {
  if (sortQuery) {
    sort = sortQuery;
  }
  const sortedCards = useMemo(() => {
    if (sort) {
      return [...cards].sort((a, b) => {
        if (sort.includes('2')) {
          const sliced = sort.slice(0, -1);
          if (typeof a[sliced as keyof FlowersType] == 'number') {
            let first = b[sliced] as number;
            let second = a[sliced] as number;
            return first - second;
          } else {
            let first = b[sliced] as string;
            let second = a[sliced] as string;
            return first.localeCompare(second);
          }
        } else {
          if (typeof a[sort as keyof FlowersType] == 'number') {
            let first = b[sort] as number;
            let second = a[sort] as number;
            return second - first;
          } else {
            let first = b[sort] as string;
            let second = a[sort] as string;
            return second.localeCompare(first);
          }
        }
      });
    } else {
      return cards;
    }
  }, [sort, cards]);
  return sortedCards;
};

export const useCards = (
  cards: FlowersType[],
  sort: string,
  query: string,
  listFamily: string[],
  searchQuery: string,
  sortQuery: string
) => {
  const sortedCards = useSortedCards(cards, sort, sortQuery);
  if (searchQuery) {
    query = searchQuery as string;
  }
  console.log('listFamily', listFamily);
  const sortedAndSearchedcards = sortedCards
    .filter((card) => {
      return (
        card.name.toLowerCase().includes(query.toLowerCase()) ||
        card.description.toLowerCase().includes(query.toLowerCase()) ||
        (card.family as string).toLowerCase().includes(query.toLowerCase()) ||
        (card.genus as string).toLowerCase().includes(query.toLowerCase()) ||
        card.price.toString().includes(query.toLowerCase()) ||
        (card.discount as number).toString().includes(query.toLowerCase()) ||
        (card.stock as number).toString().includes(query.toLowerCase()) ||
        (card.rating as number).toString().includes(query.toLowerCase())
      );
    })
    .filter((card) => listFamily.includes(card.family as string));
  console.log('sortedAndSearchedcards', sortedAndSearchedcards);
  return sortedAndSearchedcards;
};
