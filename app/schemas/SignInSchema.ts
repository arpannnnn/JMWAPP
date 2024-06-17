import { z } from 'zod'

export const signInSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),

});
