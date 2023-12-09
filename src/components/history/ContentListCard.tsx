import ResultsCard from '../create/results/ResultsCard'
import useCopy from '../../hooks/useCopy'
import { Card, CardBody, CardHeader, Heading, Stack, Text } from '@chakra-ui/react'
import MyContentService from '../../services/myContentService'
import DeleteContent from '../../services/deleteContent'
import NoContentText from '../NoContentText'

type Props = {}

const ContentListCard = (props: Props) => {
    const { handleCopy, tooltipText } = useCopy()
    const { data, isPending, isError, error } = MyContentService()
    const { handleDelete, isPending: pendingdelete } = DeleteContent()
    return (
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' maxH='100vh' p={4}>
            <CardHeader>
                <Heading size='sm'>Content</Heading>
            </CardHeader>
            <Stack direction='column' spacing='4' overflowY={'scroll'}>
                {
                    isPending ?
                        <CardBody>
                            <Text>loading data ...</Text>
                        </CardBody>
                        :
                        isError ?
                            <CardBody>
                                <Text color='red.400'>{error?.message}</Text>
                            </CardBody>
                            :
                            (data && data.length > 0) ? data.map((content, index) => (
                                <ResultsCard loading={pendingdelete} handleCopy={handleCopy} handleDelete={handleDelete} id={content.id} del={true} tooltipText={tooltipText} index={index} post={content.body} topic={content.topic.topic} />
                            ))
                                :
                                <CardBody>
                                    <NoContentText />
                                </CardBody>
                }
            </Stack>
        </Card>
    )
}

export default ContentListCard