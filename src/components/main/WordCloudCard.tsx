import { Card, CardHeader, Stack, Text } from '@chakra-ui/react';
import WordCloud from 'react-d3-cloud';
import { FaSearchengin } from 'react-icons/fa';

type Props = {}

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
]

const WordCloudCard = (props: Props) => {
  return (
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
        // spiral="rectangular"
        rotate={(word) => word.value % 100}
        padding={8}
        random={Math.random}
      // onWordClick={(event, d) => {
      //   console.log(`onWordClick: ${d.text}`);
      // }}
      />
    </Card>
  )
}

export default WordCloudCard