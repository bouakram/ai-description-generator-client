import { z } from "zod"

export type AuthType = 'register' | 'login'

export const RegisterFormSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: 'confirmed password must match the password',
    path: ['confirmPassword']
})
export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Must be 8 or more characters long"),
})

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;
export type LoginFormType = z.infer<typeof LoginFormSchema>



