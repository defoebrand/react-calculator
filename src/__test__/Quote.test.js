import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('rendered Quote', () => {
  test('has Title', () => {
    render(<Quote />);
    const element = screen.getByText('Math Magicians');
    expect(element).toBeInTheDocument();
  });

  test('has Welcome', () => {
    render(<Quote />);
    const element = screen.getByText('Welcome to our page!');
    expect(element).toBeInTheDocument();
  });
  test('has Quote box', () => {
    render(<Quote />);
    const element = screen.getByText('William Paul Thurston', { exact: false });
    expect(element).toBeInTheDocument();
  });
});
