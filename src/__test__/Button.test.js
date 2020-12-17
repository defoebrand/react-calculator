import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

test('renders Button', () => {
  render(<Button key="test" name="testButton" group="test" color={undefined} wide={undefined} />);
  const element = screen.getByText(/testButton/i);
  expect(element).toBeInTheDocument();
});
