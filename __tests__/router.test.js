import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';

describe('test', () => {
  test('Render as spected', () => {
    render(<App />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('Loads and displays home button', () => {
    render(<App />);
    expect(screen.getAllByText('Home')).toBeDefined();
  });

  test('Loads and displays Home h1', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Home')[0]);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Home');
  });

  test('Loads and displays Quote button', () => {
    render(<App />);
    expect(screen.getAllByText('Quote')).toBeDefined();
  });

  test('Loads and displays Quote h1', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Quote')[0]);
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Quote');
  });

  test('Does not load previews h1', () => {
    render(<App />);
    expect(screen.getAllByRole('heading')[1]).not.toHaveTextContent('Home');
  });

  test('Loads and displays Calculator button', () => {
    render(<App />);
    expect(screen.getAllByText('Calculator')).toBeDefined();
  });

  test('Loads and displays calculator', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Calculator')[0]);
    expect(screen.getAllByText('=')).toBeDefined();
  });

  test('Does not load previews h1', () => {
    render(<App />);
    expect(screen.getAllByRole('heading')[1]).not.toBeDefined();
  });
});
