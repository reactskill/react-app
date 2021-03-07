import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/count', (req, res, ctx) => {
    return res(
      ctx.json({
        count: 101
      }),
    )
  }),
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

test('count appears 0', () => {
  render(<App />)
  expect(screen.getByText('0')).toBeInTheDocument()
})

test('click button to add count by 1', () => {
  render(<App />)
  const beforeClick = screen.getByTestId('count').textContent

  fireEvent(
    screen.getByText('add 1'), 
    new MouseEvent('click', {
      bubbles: true
    })
  )

  const afterClick = screen.getByTestId('count').textContent
  expect(parseInt(afterClick)).toBe(parseInt(beforeClick) + 1)
})

test('count is 0 at first, then it becomes 101', async () => {
  render(<App />)
  expect(screen.getByTestId('count')).toHaveTextContent('0')
  await waitFor(() => {
    expect(screen.getByTestId('count')).toHaveTextContent('101')
  })
})