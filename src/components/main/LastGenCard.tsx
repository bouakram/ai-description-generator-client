import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LastContentService from '../../services/lastContentService'
import usePlatformSelector from '../../hooks/usePlatformSelector'
import { FaList } from 'react-icons/fa'
import NoContentText from '../NoContentText'

type Props = {}

const LastGenCard = (props: Props) => {
    const { data, isPending, isError, error } = LastContentService()
    const { getPlatform } = usePlatformSelector()
    return (
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' h='full'>
            <CardHeader>
                <Stack alignContent='center' justifyContent='space-between' direction='row'>
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontFamily='bold'>Your Last Generated</Text>
                    <FaList style={{ height: 35, width: 35 }} />
                </Stack>
            </CardHeader>
            <Stack direction='column' spacing="2" p={6}>
                {
                    isPending ?
                        <Card p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                            <Text>waiting for data ...</Text>
                        </Card>
                        :
                        isError ?
                            <Card p='2' bgColor='red.400' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                                <Text>{error?.message}</Text>
                            </Card>
                            :
                            (data && data.length > 0) ? data.map((lastContent) => (
                                <Card key={lastContent.topic.id} p='2' _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease-in-out', shadow: 'md', cursor: 'pointer' }}>
                                    <Stack direction='row' align='center' spacing='4'>
                                        {getPlatform(lastContent.plateformname)}
                                        <Text isTruncated>{lastContent.topic.topic}</Text>
                                    </Stack>
                                </Card>
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

export default LastGenCard