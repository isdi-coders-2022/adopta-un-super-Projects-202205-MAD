import React from 'react';
import { render, screen } from '@testing-library/react';
import AppUI from './AppUI';

test('renders learn react link', () => {
  render(<AppUI />);
  const linkElement = screen.getByText(/Marvel/i);
  expect(linkElement).toBeInTheDocument();
});
