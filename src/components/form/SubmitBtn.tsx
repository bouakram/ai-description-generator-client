import { Button } from '@chakra-ui/react'
import React from 'react'

type SubmitBtnType = {
    children: React.ReactNode,
    loading: boolean,
    textloading: string
}

const SubmitBtn = ({ children, loading, textloading }: SubmitBtnType) => {
    return (
        <Button type='submit' mb='4' colorScheme='teal' variant='solid' isLoading={loading} loadingText={textloading} spinnerPlacement='end' borderStart='1px' borderTop='1px' borderEnd='4px' borderBottom='4px' borderColor='teal' size={{ base: 'sm', md: 'md' }}>
            {children}
        </Button>
    )
}

export default SubmitBtn