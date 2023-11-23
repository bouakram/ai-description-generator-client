import { Button } from '@chakra-ui/react'
import React from 'react'
import type { IconType } from 'react-icons'

type GoogleBtnType = {
    children: React.ReactNode,
    icon: React.ReactElement<IconType, string | React.JSXElementConstructor<IconType>> | undefined
}

const GoogleBtn = ({ children, icon }: GoogleBtnType) => {
    const handelBtn = () => {
        window.open('')
    }
    return (
        <Button onClick={handelBtn} leftIcon={icon} mb='4' colorScheme='orange' variant='solid' borderStart='1px' borderTop='1px' borderEnd='4px' borderBottom='4px' borderColor='orange' size={{ base: 'sm', md: 'md' }}> {children} </Button>
    )
}

export default GoogleBtn