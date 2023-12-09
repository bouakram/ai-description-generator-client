import { ButtonGroup, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { FaCopy, FaTrash } from 'react-icons/fa'

type ResultsCardPropsType = {
    del?: boolean,
    id?: string,
    index: number,
    post: string,
    topic?: string,
    tooltipText: string,
    loading?: boolean,
    handleCopy: (post: string) => Promise<void>
    handleDelete?: (id: string) => Promise<void>
}

const ResultsCard = ({ index, topic, post, tooltipText, handleCopy, del = false, handleDelete, id, loading }: ResultsCardPropsType) => {
    return (
        <Card key={index} border='1px' borderColor='inherit' boxShadow='sm' >
            <CardHeader>
                <Flex alignItems='center' justifyContent='space-between'>
                    {topic ? <Heading size='sm'>{topic}</Heading> : <Heading size='sm'>Post {index + 1}</Heading>}
                    <ButtonGroup>
                        {
                            (del && handleDelete && id) &&
                            <Tooltip hasArrow label={loading ? 'deleting' : 'delete'} bg='teal.300'>
                                <IconButton
                                    disabled={loading}
                                    onClick={() => handleDelete(id)}
                                    aria-label='Add to friends'
                                    icon={<FaTrash fill='red' />}
                                />
                            </Tooltip>
                        }
                        <Tooltip hasArrow label={tooltipText} bg='teal.300'>
                            <IconButton
                                onClick={() => handleCopy(post)}
                                aria-label='Add to friends'
                                icon={<FaCopy />}
                            />
                        </Tooltip>
                    </ButtonGroup>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{post}</Text>
            </CardBody>
        </Card>
    )
}

export default ResultsCard