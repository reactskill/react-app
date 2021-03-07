import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const click = () => (
  new MouseEvent('click', {
    bubbles: true
  })
)

test('count appears 0', () => {
  render(<App />)
  expect(screen.getByText('0')).toBeInTheDocument()
})

test('click button to add count by 1', () => {
  render(<App />)
  const beforeClick = screen.getByTestId('count').textContent

  fireEvent(screen.getByText('add 1'),click())

  const afterClick = screen.getByTestId('count').textContent
  expect(parseInt(afterClick)).toBe(parseInt(beforeClick) + 1)
})
