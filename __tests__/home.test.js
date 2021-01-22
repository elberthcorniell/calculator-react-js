import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/Home';

describe('test', () => {
  test('Loads and displays home', async () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent('Home');
  });
});
