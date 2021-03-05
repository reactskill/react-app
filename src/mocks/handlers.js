import { rest } from 'msw'

export const handlers = [
  rest.get('/count', (req, res, ctx) => {
    return res(
      ctx.json({
        count: 101
      })
    )
  }),
]