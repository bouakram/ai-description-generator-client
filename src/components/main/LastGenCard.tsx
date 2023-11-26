import { Card, CardHeader, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaList } from 'react-icons/fa'

type Props = {}

const LastGenCard = (props: Props) => {
    return (
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' h='full'>
            <CardHeader>
                <Stack alignContent='center' justifyContent='space-between' direction='row'>
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>Your Last Generated</Text>
                    <FaList style={{ height: 35, width: 35 }} />
                </Stack>
            </CardHeader>
            <Stack direction='column' spacing="2" p={6}>
                <Card p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                    <Stack direction='row' align='center' spacing='4'>
                        <FaFacebook />
                        <Text>Next Js for beginner</Text>
                    </Stack>
                </Card>
                <Card p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                    <Stack direction='row' align='center' spacing='4'>
                        <FaInstagram />
                        <Text size={{ base: 'sm', md: 'unset' }}>Next Js for beginner</Text>
                    </Stack>
                </Card>
                <Card p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                    <Stack direction='row' align='center' spacing='4'>
                        <FaLinkedin />
                        <Text size={{ base: 'sm', md: 'unset' }}>Next Js for beginner</Text>
                    </Stack>
                </Card>
                <Card p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                    <Stack direction='row' align='center' spacing='4'>
                        <FaFacebook />
                        <Text size={{ base: 'sm', md: 'unset' }}>Next Js for beginner</Text>
                    </Stack>
                </Card>
                <Card p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                    <Stack direction='row' align='center' spacing='4'>
                        <FaInstagram />
                        <Text size={{ base: 'sm', md: 'unset' }}>Next Js for beginner</Text>
                    </Stack>
                </Card>
            </Stack>
        </Card>
    )
}

export default LastGenCard