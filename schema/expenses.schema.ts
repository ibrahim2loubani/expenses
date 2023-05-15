import { number, object, string, TypeOf } from 'yup'

export const updateSchema = {
  params: object({
    expenseId: number().required(),
  }),
  body: object({
    name: string().required(),
    amount: number().required(),
    description: string().required(),
  }),
}

export const createSchema = {
  body: object({
    name: string().required(),
    amount: number().required(),
    description: string().required(),
  }),
}

export type CreateInputBody = TypeOf<typeof createSchema.body>
export type UpdateInputBody = TypeOf<typeof updateSchema.body>
