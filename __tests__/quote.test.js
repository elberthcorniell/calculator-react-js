import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../src/Quote';

describe('test', () => {
  test('Render as spected', () => {
    render(<Quote />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('Loads and displays quote', () => {
    render(<Quote />);
    expect(screen.getByRole('heading')).toHaveTextContent('Quote');
  });
});
