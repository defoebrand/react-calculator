import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('rendered Navbar', () => {
  test('has Home link', () => {
    render(<Navbar />);
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument();
  });
  test('has Calculator link', () => {
    render(<Navbar />);
    const element = screen.getByText(/Calculator/i);
    expect(element).toBeInTheDocument();
  });
  test('has Quote link', () => {
    render(<Navbar />);
    const element = screen.getByText(/Quote Of The Day/i);
    expect(element).toBeInTheDocument();
  });
});
