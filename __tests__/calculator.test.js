import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../src/Calculator';

describe('test', () => {
  test('Render as spected', () => {
    render(<Calculator />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('Loads and displays button 0', () => {
    render(<Calculator />);
    expect(screen.getAllByText('0')).toBeDefined();
  });

  test('Loads and displays button 1', () => {
    render(<Calculator />);
    expect(screen.getAllByText('1')).toBeDefined();
  });

  test('Loads and displays button 2', () => {
    render(<Calculator />);
    expect(screen.getAllByText('2')).toBeDefined();
  });

  test('Loads and displays button 3', () => {
    render(<Calculator />);
    expect(screen.getAllByText('3')).toBeDefined();
  });

  test('Loads and displays button 4', () => {
    render(<Calculator />);
    expect(screen.getAllByText('4')).toBeDefined();
  });

  test('Loads and displays button 5', () => {
    render(<Calculator />);
    expect(screen.getAllByText('5')).toBeDefined();
  });

  test('Loads and displays button 6', () => {
    render(<Calculator />);
    expect(screen.getAllByText('6')).toBeDefined();
  });

  test('Loads and displays button 7', () => {
    render(<Calculator />);
    expect(screen.getAllByText('7')).toBeDefined();
  });

  test('Loads and displays button 8', () => {
    render(<Calculator />);
    expect(screen.getAllByText('8')).toBeDefined();
  });

  test('Loads and displays button 9', () => {
    render(<Calculator />);
    expect(screen.getAllByText('9')).toBeDefined();
  });

  test('Loads and displays button -', () => {
    render(<Calculator />);
    expect(screen.getAllByText('-')).toBeDefined();
  });

  test('Loads and displays button +', () => {
    render(<Calculator />);
    expect(screen.getAllByText('+')).toBeDefined();
  });

  test('Loads and displays button x', () => {
    render(<Calculator />);
    expect(screen.getAllByText('x')).toBeDefined();
  });

  test('Loads and displays button ÷', () => {
    render(<Calculator />);
    expect(screen.getAllByText('÷')).toBeDefined();
  });

  test('Loads and displays button AC', () => {
    render(<Calculator />);
    expect(screen.getAllByText('AC')).toBeDefined();
  });

  test('Loads and displays button =', () => {
    render(<Calculator />);
    expect(screen.getAllByText('=')).toBeDefined();
  });
});
