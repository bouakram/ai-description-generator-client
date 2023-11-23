import { AbsoluteCenter, Box, Card, CardBody, CardHeader, Divider, FormControl, FormHelperText, FormLabel, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import GoogleBtn from '../GoogleBtn'
import { AuthType, RegisterFormSchema, RegisterFormType } from '../../types/types'
import SwitchFormBtn from './SwitchFormBtn'
import SubmitBtn from './SubmitBtn'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { z } from 'zod'
import { API_URL } from '../../constants'

type RegisterType = {
    Title: string,
    handleFormChange: React.Dispatch<React.SetStateAction<AuthType>>
}

// TODO: try to optimize the component.

const Register = ({ Title, handleFormChange }: RegisterType) => {
    const toast = useToast()
    const { reset, register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({ resolver: zodResolver(RegisterFormSchema) })
    const { mutateAsync: registerUser, isPending } = useMutation({
        mutationKey: ['registerUser'],
        mutationFn: async (user: RegisterFormType) => {
            ///// TODO: figure out how to use cookies instead of localStorage.
            await axios.post(`${API_URL}auth/register`, user)
            reset()
        }
    })
    const onsubmit = (user: RegisterFormType) => {
        registerUser(user, {
            onSuccess: () => {
                toast({
                    title: 'successfully registered',
                    position: 'top',
                    status: 'success',
                    isClosable: true,
                })
                handleFormChange(prev => prev = 'login')
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
    return (
        <Card variant='solid' border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit'>
            <CardHeader alignSelf='center'>
                <Text size='xl' fontWeight='bold'> {Title}</Text>
            </CardHeader>
            <CardBody alignSelf='center' w='80%'>
                <Stack justifyContent='center'>
                    <GoogleBtn icon={<FaGoogle />}>Register with Google</GoogleBtn>
                </Stack>
                <Box position='relative' padding='10'>
                    <Divider />
                    <AbsoluteCenter bg='inherit' px='4'>
                        OR
                    </AbsoluteCenter>
                </Box>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <FormControl isRequired mb='4'>
                        <FormLabel>User name</FormLabel>
                        <Input {...register('username')} type='text' placeholder='Example123' focusBorderColor='teal.500' />
                        {errors.username ?
                            <FormHelperText color='red'>{`${errors.username.message}`}</FormHelperText>
                            :
                            <FormHelperText>enter your cool user name.</FormHelperText>
                        }
                    </FormControl>
                    <FormControl isRequired mb='4'>
                        <FormLabel>Email address</FormLabel>
                        <Input {...register('email')} type='email' placeholder='example@emample.com' focusBorderColor='teal.500' />
                        {errors.email ?
                            <FormHelperText color='red'>{`${errors.email.message}`}</FormHelperText>
                            :
                            <FormHelperText>make sure to enter a valid email address.</FormHelperText>
                        }
                    </FormControl>
                    <FormControl isRequired mb='4'>
                        <FormLabel>Password</FormLabel>
                        <Input {...register('password')} type='password' placeholder='**********' focusBorderColor='teal.500' />
                        {errors.password ?
                            <FormHelperText color='red'>{`${errors.password.message}`}</FormHelperText>
                            :
                            <FormHelperText>make sure to enter a solid password with min length of 8 characters.</FormHelperText>
                        }
                    </FormControl>
                    <FormControl isRequired mb='4'>
                        <FormLabel>Confirm password</FormLabel>
                        <Input {...register('confirmPassword')} type='password' placeholder='**********' focusBorderColor='teal.500' />
                        {errors.confirmPassword ?
                            <FormHelperText color='red'>{`${errors.confirmPassword.message}`}</FormHelperText>
                            :
                            <FormHelperText>make sure to match your password.</FormHelperText>
                        }
                    </FormControl>
                    <FormControl>
                        <SubmitBtn loading={isPending} textloading='submitting'>Register</SubmitBtn>
                    </FormControl>
                </form>
                <SwitchFormBtn handleClick={() => { handleFormChange(prev => prev = 'login') }}>have an account already?</SwitchFormBtn>
            </CardBody>
        </Card>
    )
}

export default Register