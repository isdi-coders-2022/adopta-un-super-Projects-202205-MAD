import React from 'react';
import { render, screen } from '@testing-library/react';
import AppUI from './AppUI';

test('renders learn react link', () => {
  render(<AppUI />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
