import { rest } from 'msw'

export const handlers = [
  rest.post('/count', (req, res, ctx) => {
    return res(
      ctx.json({
        count: 101
      })
    )
  }),
]