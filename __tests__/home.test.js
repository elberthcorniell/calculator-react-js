import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/Home';

describe('test', () => {
  test('Render as spected', () => {
    render(<Home />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('Loads and displays home', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent('Home');
  });
});
