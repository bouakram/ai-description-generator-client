import { Box, Heading, Stack } from '@chakra-ui/react'
import FilterCard from '../../components/history/FilterCard'
import ContentListCard from '../../components/history/ContentListCard'

type Props = {}

const HistoryPage = (props: Props) => {
    return (
        <Box p='4' width='full' minHeight='calc(100vh - 6rem)'>
            <Heading mb={6} size={{ base: 'lg', md: 'xl' }}>Your generated content history</Heading>
            <Stack alignContent='center' justifyContent='space-between' spacing={6} direction='column' maxW='1024px' margin='auto'>
                <FilterCard />
                <ContentListCard />
            </Stack>
        </Box>
    )
}

export default HistoryPage