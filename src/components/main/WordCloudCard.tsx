import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react';
import WordCloud from 'react-d3-cloud';
import { FaSearchengin } from 'react-icons/fa';
import TopicServices from '../../services/topicServices';
import NoContentText from '../NoContentText';

type Props = {}

const WordCloudCard = (props: Props) => {
  const { data, isPending, isError, error } = TopicServices()
  return (
    <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' h='full'>
      <CardHeader>
        <Stack alignContent='center' justifyContent='space-between' direction='row'>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>Users Search</Text>
          <FaSearchengin style={{ height: 35, width: 35 }} />
        </Stack>
      </CardHeader>
      {
        isPending ?
          <CardBody>
            <Text>waiting for data ...</Text>
          </CardBody>
          :
          isError ?
            <CardBody>
              <Text color='red.400'>{error?.message}</Text>
            </CardBody>
            :
            (data && data.length > 0) ? <WordCloud
              data={data}
              height={280}
              font="Times"
              rotate={0}
              padding={10}
              fontSize={(word) => Math.log2(word.value) * 5}
            // onWordClick={(event, d) => {
            //   console.log(`onWordClick: ${d.text}`);
            // }}
            />
              :
              <CardBody>
                <NoContentText />
              </CardBody>
      }
    </Card>
  )
}

export default WordCloudCard