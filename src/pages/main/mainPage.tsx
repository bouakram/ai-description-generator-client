import { Box, Card, CardBody, CardHeader, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import WordCloud from 'react-d3-cloud'
import { FaBrain, FaFacebook, FaHistory, FaInstagram, FaLinkedin, FaList, FaSearchengin } from 'react-icons/fa'

type Props = {}

const Main = (props: Props) => {
  const data = [
    { text: 'first impression', value: 800 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 2000 },
    { text: 'first impression', value: 800 },
    { text: 'lol', value: 20 },
    { text: 'very cool', value: 100 },
    { text: 'Hey', value: 10000 },
    { text: 'duck', value: 10 },
    { text: 'very cool', value: 1000 },
    { text: 'duck', value: 1000 },
    { text: 'duck', value: 10 },
  ];

  return (
    <Box p='4' width='full' minHeight='calc(100vh - 6rem)'>
      <Heading mb={6} size={{ base: 'lg', md: 'xl' }}>Welcome Back User 👋</Heading>
      <Stack alignContent='center' justifyContent='space-between' spacing={6} direction={{ base: 'column', md: 'row' }} maxW='1024px' margin='auto'>
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: 'all .1s ease-in-out' }}>
          <CardHeader>
            <Stack alignContent='center' justifyContent='space-between' direction='row'>
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>Create Your Content</Text>
              <FaBrain style={{ height: 35, width: 35 }} />
            </Stack>
          </CardHeader>
          <CardBody>
            <Text size={{ base: 'sm', md: 'unset' }}>Create your Content with ease and the power of AI 🤖🔥.</Text>
          </CardBody>
        </Card>
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' _hover={{ cursor: 'pointer', transform: 'translateY(-5px)', transition: 'all .1s ease-in-out' }}>
          <CardHeader>
            <Stack alignContent='center' justifyContent='space-between' direction='row'>
              <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>See all your History</Text>
              <FaHistory style={{ height: 35, width: 35 }} />
            </Stack>
          </CardHeader>
          <CardBody>
            <Text size={{ base: 'sm', md: 'unset' }}>see all your past created posts.</Text>
          </CardBody>
        </Card>
      </Stack>
      <Grid maxW='1020px' m='auto' mt='6' mb='4' templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(3, 1fr)' }} gap={6}>
        <GridItem colSpan={{ md: 2 }} w='100%' h='full' >
          <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' h='full'>
            <CardHeader>
              <Stack alignContent='center' justifyContent='space-between' direction='row'>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>Users Search</Text>
                <FaSearchengin style={{ height: 35, width: 35 }} />
              </Stack>
            </CardHeader>
            <WordCloud
              data={data}
              height={280}
              font="Times"
              // fontStyle="italic"
              fontWeight="bold"
              fontSize={(word) => Math.log2(word.value) * 5}
              spiral="rectangular"
              rotate={(word) => word.value % 100}
              padding={5}
              random={Math.random}
              onWordClick={(event, d) => {
                console.log(`onWordClick: ${d.text}`);
              }}
            />,
          </Card>
        </GridItem>
        <GridItem w='100%' h='full' >
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
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Main