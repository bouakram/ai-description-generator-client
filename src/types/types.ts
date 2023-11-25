import { z } from "zod"

export type AuthType = 'register' | 'login'

export const RegisterFormSchema = z.object({
    username: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
    confirmPassword: z.string().optional()
}).refine(data => data.password === data.confirmPassword, {
    message: 'confirmed password must match the password',
    path: ['confirmPassword']
})

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
})

export type FormType = z.infer<typeof RegisterFormSchema>;