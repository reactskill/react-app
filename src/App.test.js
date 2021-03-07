import { render, screen } from '@testing-library/react';
import App from './App';

test('count appears 0', () => {
  render(<App />)
  expect(screen.getByText('0')).toBeInTheDocument()
})