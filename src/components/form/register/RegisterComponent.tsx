import { AbsoluteCenter, Box, Card, CardBody, CardHeader, Divider, Stack, Text } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import GoogleBtn from '../../GoogleBtn'
import SwitchFormBtn from '../SwitchFormBtn'
import Form from './RegisterForm'
import { useStore } from '../../../utils/store'

type RegisterType = {
    Title: string,
}

const RegisterComponent = ({ Title }: RegisterType) => {
    const setAuthType = useStore(store => store.setAuthType)
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
                <Form />
                <SwitchFormBtn handleClick={() => { setAuthType('login') }}>have an account already?</SwitchFormBtn>
            </CardBody>
        </Card>
    )
}

export default RegisterComponent