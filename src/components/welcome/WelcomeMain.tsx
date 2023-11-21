import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const WelcomeMain = (props: Props) => {
    return (
        <Card maxW='768px' alignItems='center' margin='auto' border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit'>
            <CardHeader>
                <Heading as='h1' size={{ base: 'sm', md: 'md' }} textAlign='center'>ContentGen🤖: AI-Powered Content Creation for Effortless Creativity</Heading>
            </CardHeader>
            <CardBody>
                <Text align='center' fontSize={{ base: 'small', md: 'unset' }}>Explore ContentGen, where AI meets content creation. Unleash your creativity effortlessly with personalized and high-quality posts generated to suit your unique style. Perfect for bloggers, influencer, and marketers, ContentGen transforms your content creation process, saving you time and elevating your online presence.</Text>
            </CardBody>
            <CardFooter alignContent='center'>
                <Button colorScheme='teal' variant='solid' borderStart='1px' borderTop='1px' borderEnd='4px' borderBottom='4px' borderColor='teal' size={{ base: 'sm', md: 'md' }}>Start Now!</Button>
            </CardFooter>
        </Card>
    )
}

export default WelcomeMain