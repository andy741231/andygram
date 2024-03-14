import { z } from "zod"



export const SignupValidation = z.object({
    name: z.string().min(2, { message: "type at least 2 words"}),
    username: z.string().min(2, {message: "text at least 2 words"}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'at least 8 characters'})
  })

  export const SigninValidation = z.object({
    name: z.string().min(2, { message: "type at least 2 words"}),
    username: z.string().min(2, {message: "text at least 2 words"}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'at least 8 characters'})
  })