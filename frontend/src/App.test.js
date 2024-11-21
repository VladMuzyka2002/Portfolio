import { render, screen } from '@testing-library/react';
import TitleSegment from './components/homepage/TitleSegment';

test('renders title segment correctly', () => {
  render(<TitleSegment />);
  const linkElement = screen.getByText(/Vlad Muzyka's Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
