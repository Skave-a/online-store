import { Sort } from '../../UI/select/Select';
import React, { Dispatch } from 'react';

interface ICardsFiter {
  sort: string;
  query?: string;
}

const CardsFilter = ({
  filter,
  setFilter,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<ICardsFiter>;
}) => {
  return (
    <div>
      <Sort
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        options={[
          { id: 1, value: 'price', name: 'Sort by price ASC' },
          { id: 2, value: 'price2', name: 'Sort by price DESC' },
          { id: 3, value: 'rating', name: 'Sort by rating ASC' },
          { id: 4, value: 'rating2', name: 'Sort by rating DESC' },
          { id: 5, value: 'name', name: 'Sort by name ASC' },
          { id: 6, value: 'name2', name: 'Sort by name DESC' },
        ]}
      />
    </div>
  );
};

export default CardsFilter;
