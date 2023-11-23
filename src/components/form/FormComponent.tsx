import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import { AuthType } from '../../types/types'

type Props = {}

const FormComponent = (props: Props) => {
    const [authType, setAuthType] = useState<AuthType>('register')
    return (
        <Stack maxW='768px' minH='calc(100vh - 6rem)' mx='auto' p='4' justifyContent='center' alignContent='center'>
            {
                authType === 'register' ?
                    <Register Title='Register to ContentGen 🤖' handleFormChange={setAuthType} />
                    :
                    <Login Title='Login to ContentGen 🤖' handleFormChange={setAuthType} />
            }
        </Stack>
    )
}

export default FormComponent