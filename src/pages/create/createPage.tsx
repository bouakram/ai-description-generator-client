import { Box, Flex, Heading } from '@chakra-ui/react'
import Create from '../../components/create/Create'
import Results from '../../components/create/Results'

// TODO: make all the components work dynamically

type Props = {}

const CreatePage = (props: Props) => {
    return (
        <Box p='4' width='full' minH='calc(100vh - 6rem)'>
            <Heading mb={6} size={{ base: 'lg', md: 'xl' }}>Generate new Content 🤖📝</Heading>
            <Flex direction={{ base: 'column', lg: 'row' }} minH='inherit' gap='6'>
                <Create />
                <Results />
            </Flex>
        </Box>
    )
}

export default CreatePage