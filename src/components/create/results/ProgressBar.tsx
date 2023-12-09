import { Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type ProgressBarPropsType = {
    progress: number,
    generatingText: string
}

const ProgressBar = ({ progress, generatingText }: ProgressBarPropsType) => {
    return (
        <Stack spacing='4' width='full'>
            <Progress colorScheme='teal' size='sm' value={progress} />
            <Text textAlign='center'>{generatingText}</Text>
        </Stack>
    )
}

export default ProgressBar