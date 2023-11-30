import { Box, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Progress, Stack, Text } from '@chakra-ui/react'
import mainImg from '../../../assets/mainimg.gif'
import generateImg from '../../../assets/generateimg.gif'
import { useEffect, useState } from 'react'
import SubmitBtn from '../../SubmitBtn'

// TODO: optimize this component ui

type Props = {}

const data = ["generating the content", "the AI is doing the magic 🪄", "cleaning the information", "making the content ready to use", "just a few seconds the magic will be ready soon"]

const Results = (props: Props) => {
    const [results, setResults] = useState(false)
    const [generating, setGenerating] = useState(false)
    const [finished, seIfinished] = useState(false)
    const [progress, setProgress] = useState(1)
    const [generatingText, setGeneratingText] = useState(data[0])
    useEffect(() => {
        if (generateImg) {
            const timer = setInterval(() => {
                setProgress(prev => {
                    if (finished) return 100
                    if (prev === 100) return 0
                    if (Math.random() < 0.1) return prev + 0.2
                    return prev + 0.5
                })
                if (progress >= 10 && progress < 25) {
                    setGeneratingText(data[1])
                } else if (progress >= 25 && progress < 40) {
                    setGeneratingText(data[1])
                }
                else if (progress >= 40 && progress < 55) {
                    setGeneratingText(data[2])
                }
                else if (progress >= 55 && progress < 70) {
                    setGeneratingText(data[3])
                }
                else if (progress >= 70) {
                    setGeneratingText(data[4])
                }
            }, 500)
            return () => clearInterval(timer)
        }
    }, [finished, progress])
    return (
        <Box flex='1' height='inherit' p='4'>
            <Card border='1px' borderRight='4px' borderBottom='4px' borderColor='inherit'>
                <CardHeader>
                    <Heading size='md'>The results will be displayed here</Heading>
                </CardHeader>
                <CardBody>
                    <Flex alignContent='center' justifyContent='center'>
                        {
                            results ?
                                <Card border='1px' borderColor='inherit' boxShadow='sm' >
                                    <CardHeader>
                                        <Heading size='sm'>Post 01</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, necessitatibus. <span style={{ color: 'teal' }}>#cool</span>, <span style={{ color: 'teal' }}>#nice</span></Text>
                                    </CardBody>
                                    <CardFooter>
                                        <ButtonGroup spacing='4'>
                                            <SubmitBtn variant='solid' size='sm'>Save</SubmitBtn>
                                            <SubmitBtn variant='ghost' size='sm'>Edit</SubmitBtn>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                                :
                                generating ?
                                    <Image
                                        src={generateImg}
                                        maxWidth='100%'
                                        width={{ base: '350px', lg: '450px' }}
                                        height={{ base: '350px', lg: '450px' }}
                                        objectFit='fill'
                                    />
                                    :
                                    <Image
                                        src={mainImg}
                                        maxWidth='100%'
                                        width={{ base: '350px', lg: '450px' }}
                                        height={{ base: '350px', lg: '450px' }}
                                        objectFit='fill'
                                    />
                        }
                    </Flex>
                </CardBody>
                <CardFooter>
                    {generating &&
                        <Stack spacing='4' width='full'>
                            <Progress colorScheme='teal' size='sm' value={progress} />
                            <Text textAlign='center'>{generatingText}</Text>
                        </Stack>
                    }
                </CardFooter>
            </Card>
        </Box>
    )
}

export default Results