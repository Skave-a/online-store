import { render, screen, act } from '@testing-library/react';
import { Header } from '../components/modules/Header/Header';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SearchCard } from '../components/modules/Search/SearchCard';
import { ChangeEvent } from 'react';

describe('Header', () => {
  it('renders My Flowers text', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const element = screen.getByText(/My Flowers/i);
    expect(element).toBeInTheDocument();
    /*  userEvent.click(screen.getByText(/My Flowers/i));
    screen.findByRole('heading'); */
  });

  it('renders button', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('should render heading', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(2);
  });

  it('should render cart icon', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const icon = screen.getByTestId('cart-icon');
    expect(icon).toBeInTheDocument();
  });

  /* it('should render badge', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const element = screen.getByTestId('badge');
    expect(element).toBeVisible();
  }); */

  it('should render link', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const links: HTMLAnchorElement[] = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links[0].href).toContain('/');
    expect(links[1].href).toContain('/cart');
  });
});

/* it('should render search', () => {
  const { setByTestId } = render(
    <SearchCard
      value={''}
      onChange={function (query: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      }}
      searchQuery={''}
    />,
    { wrapper: MemoryRouter }
  );
  const element = screen.getByTestId('badge');
  expect(element).toBeVisible();
}); */
