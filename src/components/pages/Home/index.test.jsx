import { render, screen } from '@testing-library/react';
import { Home } from '.';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/CRIAMOS LOJAS QUE VENDEM MAIS./i);
  expect(linkElement).toBeInTheDocument();
});
