import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../components/ButtonPanel';

describe('rendered ButtonPanel', () => {
  test('has AC button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('AC');
    expect(element).toBeInTheDocument();
  });
  test('has 9 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('9');
    expect(element).toBeInTheDocument();
  });
  test('has 8 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('8');
    expect(element).toBeInTheDocument();
  });
  test('has 7 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('7');
    expect(element).toBeInTheDocument();
  });
  test('has 6 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('6');
    expect(element).toBeInTheDocument();
  });
  test('has 5 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('5');
    expect(element).toBeInTheDocument();
  });
  test('has 4 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('4');
    expect(element).toBeInTheDocument();
  });
  test('has 3 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('3');
    expect(element).toBeInTheDocument();
  });
  test('has 2 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('2');
    expect(element).toBeInTheDocument();
  });
  test('has 1 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('1');
    expect(element).toBeInTheDocument();
  });
  test('has 0 button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
  test('has +/- button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('+/-');
    expect(element).toBeInTheDocument();
  });
  test('has % button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('%');
    expect(element).toBeInTheDocument();
  });
  test('has + button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('+');
    expect(element).toBeInTheDocument();
  });
  test('has - button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('-');
    expect(element).toBeInTheDocument();
  });
  test('has x button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('x');
    expect(element).toBeInTheDocument();
  });
  test('has / button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('/');
    expect(element).toBeInTheDocument();
  });
  test('has . button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('.');
    expect(element).toBeInTheDocument();
  });
  test('has = button', () => {
    render(<ButtonPanel />);
    const element = screen.getByText('=');
    expect(element).toBeInTheDocument();
  });
});
