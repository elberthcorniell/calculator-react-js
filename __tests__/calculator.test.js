import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../src/Calculator';

describe('test', () => {
  test('Loads and displays button 0', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('0')).toBeDefined();
  });

  test('Loads and displays button 1', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('1')).toBeDefined();
  });

  test('Loads and displays button 2', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('2')).toBeDefined();
  });

  test('Loads and displays button 3', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('3')).toBeDefined();
  });

  test('Loads and displays button 4', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('4')).toBeDefined();
  });

  test('Loads and displays button 5', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('5')).toBeDefined();
  });

  test('Loads and displays button 6', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('6')).toBeDefined();
  });

  test('Loads and displays button 7', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('7')).toBeDefined();
  });

  test('Loads and displays button 8', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('8')).toBeDefined();
  });

  test('Loads and displays button 9', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('9')).toBeDefined();
  });

  test('Loads and displays button -', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('-')).toBeDefined();
  });

  test('Loads and displays button +', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('+')).toBeDefined();
  });

  test('Loads and displays button x', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('x')).toBeDefined();
  });

  test('Loads and displays button ÷', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('÷')).toBeDefined();
  });

  test('Loads and displays button AC', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('AC')).toBeDefined();
  });

  test('Loads and displays button =', async () => {
    render(<Calculator />);
    expect(screen.getAllByText('=')).toBeDefined();
  });
});
