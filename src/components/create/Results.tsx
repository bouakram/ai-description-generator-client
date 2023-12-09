import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, useToast } from '@chakra-ui/react'
import mainImg from '../../assets/mainimg.gif'
import generateImg from '../../assets/generateimg.gif'
import { useEffect, useState } from 'react'
import { useStore } from '../../utils/store'
import ResultsActions from './results/ResultsActions'
import ProgressBar from './results/ProgressBar'
import ImgComponent from './results/ImgComponent'
import ResultsCard from './results/ResultsCard'
import useCopy from '../../hooks/useCopy'

///// TODO: optimize this component ui

const data = ["generating the content", "the AI is doing the magic 🪄", "cleaning the information", "making the content ready to use", "just a few seconds the magic will be ready soon"]

const Results = () => {
    const toast = useToast()
    const { handleCopy, tooltipText } = useCopy()
    const contentGenerated = useStore(store => store.contentGenerated)
    const generating = useStore(store => store.generating)
    const completed = useStore(store => store.completed)
    const issue = useStore(store => store.issue)
    const [progress, setProgress] = useState(1)
    const [generatingText, setGeneratingText] = useState(data[0])

    useEffect(() => {
        if (generating) {
            const timer = setInterval(() => {
                setProgress(prev => {
                    if (completed) return 100
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
    }, [generating, completed, progress])



    if (issue) {
        toast({
            title: 'something went wrong',
            position: 'top',
            status: 'error',
            isClosable: true,
        })
    }
    return (
        <Box flex='1' height='inherit' p='4'>
            <Card border='1px' borderRight='4px' borderBottom='4px' borderColor='inherit'>
                <CardHeader>
                    <Heading size='md'>The results will be displayed here</Heading>
                </CardHeader>
                <CardBody>
                    {
                        contentGenerated.length > 0 ?
                            <Flex direction='column' alignContent='center' justifyContent='center' gap={4}>
                                {contentGenerated.map((post, index) => (
                                    <ResultsCard key={index} index={index} post={post} tooltipText={tooltipText} handleCopy={handleCopy} />
                                ))}
                            </Flex>
                            :
                            <Flex alignContent='center' justifyContent='center'>
                                {
                                    generating ?
                                        <ImgComponent imgSrc={generateImg} />
                                        :
                                        <ImgComponent imgSrc={mainImg} />
                                }
                            </Flex>
                    }
                </CardBody>
                <CardFooter>
                    {
                        generating && <ProgressBar progress={progress} generatingText={generatingText} />
                    }
                    {
                        contentGenerated.length > 0 && <ResultsActions />
                    }
                </CardFooter>
            </Card>
        </Box>
    )
}

export default Results