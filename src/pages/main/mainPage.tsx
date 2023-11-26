import { Box, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import CreateCard from '../../components/main/CreateCard'
import HistoryCard from '../../components/main/HistoryCard'
import WordCloudCard from '../../components/main/WordCloudCard'
import LastGenCard from '../../components/main/LastGenCard'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <Box p='4' width='full' minHeight='calc(100vh - 6rem)'>
      <Heading mb={6} size={{ base: 'lg', md: 'xl' }}>Welcome Back User 👋</Heading>
      <Stack alignContent='center' justifyContent='space-between' spacing={6} direction={{ base: 'column', md: 'row' }} maxW='1024px' margin='auto'>
        <CreateCard />
        <HistoryCard />
      </Stack>
      <Grid maxW='1020px' m='auto' mt='6' mb='4' templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(3, 1fr)' }} gap={6}>
        <GridItem colSpan={{ md: 2 }} w='100%' h='full' >
          <WordCloudCard />
        </GridItem>
        <GridItem w='100%' h='full' >
          <LastGenCard />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default MainPage