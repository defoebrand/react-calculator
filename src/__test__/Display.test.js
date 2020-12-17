import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

test('renders Display', () => {
  render(<Display result="Hello!" />);
  const element = screen.getByText('Hello!');
  expect(element).toBeInTheDocument();
});
