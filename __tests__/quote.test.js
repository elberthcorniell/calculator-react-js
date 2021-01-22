import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../src/Quote';

describe('test', () => {
  test('Loads and displays quote', async () => {
    render(<Quote />);
    expect(screen.getByRole('heading')).toHaveTextContent('Quote');
  });
});
