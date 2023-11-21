import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer>
            <Stack align='center' p='2'>
                <Text>&copy; 2023 - created by Boughazi Akram.</Text>
            </Stack>
        </footer>
    )
}

export default Footer