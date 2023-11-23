import { AbsoluteCenter, Box, Card, CardBody, CardHeader, Divider, FormControl, FormHelperText, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import GoogleBtn from '../GoogleBtn'
import { AuthType, LoginFormSchema, LoginFormType } from '../../types/types'
import SwitchFormBtn from './SwitchFormBtn'
import SubmitBtn from './SubmitBtn'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { API_URL } from '../../constants'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useStore } from '../../utils/store'


type LoginType = {
    Title: string,
    handleFormChange: React.Dispatch<React.SetStateAction<AuthType>>
}

const Login = ({ Title, handleFormChange }: LoginType) => {
    const setToken = useStore(store => store.setToken)
    const toast = useToast()
    const navigation = useNavigate()
    const { reset, register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema) })
    const { mutateAsync: loginUser, isPending } = useMutation({
        mutationKey: ['loginUser'],
        mutationFn: async (user: LoginFormType) => {
            await axios.post(`${API_URL}auth/login`, user).then(res => {
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
            })
            reset()
        }
    })
    const onsubmit = (user: LoginFormType) => {
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
    return (
        <Card variant='solid' border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit'>
            <CardHeader alignSelf='center'>
                <Text size='xl' fontWeight='bold'> {Title}</Text>
            </CardHeader>
            <CardBody alignSelf='center' w='80%'>
                <Stack justifyContent='center'>
                    <GoogleBtn icon={<FaGoogle />}>Login with Google</GoogleBtn>
                </Stack>
                <Box position='relative' padding='10'>
                    <Divider />
                    <AbsoluteCenter bg='inherit' px='4'>
                        OR
                    </AbsoluteCenter>
                </Box>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <FormControl isRequired mb='4'>
                        <FormLabel>Email address</FormLabel>
                        <Input {...register('email')} type='email' placeholder='example@emample.com' focusBorderColor='teal.500' />
                        {errors.email ?
                            <FormHelperText color='red'>{errors.email.message}</FormHelperText>
                            :
                            <FormHelperText>make sure to enter a valid email address.</FormHelperText>
                        }
                    </FormControl>
                    <FormControl isRequired mb='4'>
                        <FormLabel>Password</FormLabel>
                        <Input {...register('password')} type='password' placeholder='**********' focusBorderColor='teal.500' />
                        {errors.password ?
                            <FormHelperText color='red'>{errors.password.message}</FormHelperText>
                            :
                            <FormHelperText>make sure to enter your registered password correctly.</FormHelperText>
                        }
                    </FormControl>
                    <FormControl>
                        <SubmitBtn loading={isPending} textloading='logging in' >Login</SubmitBtn>
                    </FormControl>
                </form>
                <SwitchFormBtn handleClick={() => { handleFormChange(prev => prev = 'register') }}>register new account?</SwitchFormBtn>
            </CardBody>
        </Card>
    )
}

export default Login