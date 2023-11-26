import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {}

const CreateCard = (props: Props) => {
    return (
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: 'all .1s ease-in-out' }}>
            <Link to={'/create'}>
                <CardHeader>
                    <Stack alignContent='center' justifyContent='space-between' direction='row'>
                        <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>Create Your Content</Text>
                        <FaBrain style={{ height: 35, width: 35 }} />
                    </Stack>
                </CardHeader>
                <CardBody>
                    <Text size={{ base: 'sm', md: 'unset' }}>Create your Content with ease and the power of AI 🤖🔥.</Text>
                </CardBody>
            </Link>
        </Card>
    )
}

export default CreateCard