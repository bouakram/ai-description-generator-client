import { Stack } from '@chakra-ui/react'
import RegisterComponent from './register/RegisterComponent'
import LoginComponent from './login/LoginComponent'
import { useStore } from '../../utils/store'

type Props = {}

const FormComponent = (props: Props) => {
    const authType = useStore(store => store.authType)
    return (
        <Stack maxW='768px' minH='calc(100vh - 6rem)' mx='auto' p='4' justifyContent='center' alignContent='center'>
            {
                authType === 'register' ?
                    <RegisterComponent Title='Register to ContentGen 🤖' />
                    :
                    <LoginComponent Title='Login to ContentGen 🤖' />
            }
        </Stack>
    )
}

export default FormComponent