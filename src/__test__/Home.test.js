import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('rendered Home', () => {
  test('has Title', () => {
    render(<Home />);
    const element = screen.getByText('Math Magicians');
    expect(element).toBeInTheDocument();
  });

  test('has Welcome', () => {
    render(<Home />);
    const element = screen.getByText('Welcome to our page!');
    expect(element).toBeInTheDocument();
  });
});
