import { Box, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import Form from './form/Form'

///// TODO: optimize this component ui

const Create = () => {

    return (
        <Box flex='1' minH='inherit' p='4'>
            <Card border='1px' borderRight='4px' borderBottom='4px' borderColor='inherit'>
                <CardHeader>
                    <Heading size='md'>Fill the form to generate the Content you need</Heading>
                </CardHeader>
                <CardBody>
                    <Form />
                </CardBody>
            </Card>
        </Box>
    )
}

export default Create