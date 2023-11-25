import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import type { IconType } from 'react-icons'
import { API_URL } from '../constants'

type GoogleBtnType = {
    children: React.ReactNode,
    icon: React.ReactElement<IconType, string | React.JSXElementConstructor<IconType>> | undefined
}

const GoogleBtn = ({ children, icon }: GoogleBtnType) => {
    const [isClicked, setIsClicked] = useState(false)
    const handelBtn = () => {
        setIsClicked(true)
        window.open(`${API_URL}auth/google`, '_self')
    }
    return (
        <Button onClick={handelBtn} disabled={isClicked} leftIcon={icon} mb='4' colorScheme='orange' variant='solid' borderStart='1px' borderTop='1px' borderEnd='4px' borderBottom='4px' borderColor='orange' size={{ base: 'sm', md: 'md' }}> {children} </Button>
    )
}

export default GoogleBtn