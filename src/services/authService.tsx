import { useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useStore } from '../utils/store';
import { FormType, LoginFormSchema, RegisterFormSchema } from '../types/types';
import { API_URL } from '../constants';

type logInFormType = Pick<FormType, "email" | "password">

export const LoginService = () => {
    const setToken = useStore(store => store.setToken)
    const toast = useToast()
    const navigation = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<logInFormType>({ resolver: zodResolver(LoginFormSchema) })
    const { mutateAsync: loginUser, isPending } = useMutation({
        mutationKey: ['loginUser'],
        mutationFn: async (user: logInFormType) => {
            await axios.post(`${API_URL}auth/login`, user).then(res => {
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
            })
            reset()
        }
    })

    const onsubmit = (user: logInFormType) => {
        loginUser(user, {
            onSuccess: () => {
                toast({
                    title: 'successfully logged in',
                    position: 'top',
                    status: 'success',
                    isClosable: true,
                })
                navigation('/home')
            },
            onError: (error) => {
                if (error instanceof z.ZodError) {
                    toast({
                        title: `${error.issues[0].message}`,
                        position: 'top',
                        status: 'error',
                        isClosable: true,
                    })
                } else toast({
                    title: 'something went wrong',
                    position: 'top',
                    status: 'error',
                    isClosable: true,
                })
            }
        })
    }

    return {
        onsubmit,
        register,
        handleSubmit,
        isPending,
        errors
    }
}

export const RegisterService = () => {
    const setAuthType = useStore(store => store.setAuthType)
    const toast = useToast()
    const { reset, register, handleSubmit, formState: { errors } } = useForm<FormType>({ resolver: zodResolver(RegisterFormSchema) })
    const { mutateAsync: registerUser, isPending } = useMutation({
        mutationKey: ['registerUser'],
        mutationFn: async (user: FormType) => {
            await axios.post(`${API_URL}auth/register`, user)
            reset()
        }
    })
    const onsubmit = (user: FormType) => {
        registerUser(user, {
            onSuccess: () => {
                toast({
                    title: 'successfully registered',
                    position: 'top',
                    status: 'success',
                    isClosable: true,
                })
                setAuthType('login')
            },
            onError: (error: unknown) => {
                if (error instanceof z.ZodError) {
                    toast({
                        title: `${error.issues[0].message}`,
                        position: 'top',
                        status: 'error',
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: 'something went wrong',
                        position: 'top',
                        status: 'error',
                        isClosable: true,
                    })
                }
            }
        })
    }

    return {
        onsubmit,
        register,
        handleSubmit,
        isPending,
        errors
    }
}