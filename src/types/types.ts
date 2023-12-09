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

export const GenerateFormSchema = z.object({
    Role: z.string().min(3, { message: 'Role must be at least 3 characters long' }).max(35, { message: 'Role must be at most 35 characters long' }),
    Number_of_Posts_to_Generate: z.string(),
    Social_Media_Platform: z.string(),
    Tone: z.string().min(3, { message: 'Tone must be at least 3 characters long' }).max(35, { message: 'Tone must be at most 35 characters long' }),
    // Avoid: z.string(),
    Audience: z.string().min(3, { message: 'Audience must be at least 3 characters long' }).max(35, { message: 'Audience must be at most 35 characters long' }),
    Topic: z.string().min(3, { message: 'Topic must be at least 3 characters long' }).max(35, { message: 'Topic must be at most 35 characters long' }),
    // Emoji: z.boolean(),
    Hashtags: z.boolean(),
    Number_of_Words: z.number().min(50, { message: 'Number of words to generate must be greater than or equal to 50' }).max(1000, { message: 'Number of words must be less than or equal to 1000' })
})

export type FormType = z.infer<typeof RegisterFormSchema>;
export type GenerateType = z.infer<typeof GenerateFormSchema>;