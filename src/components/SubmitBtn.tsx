import { Button } from '@chakra-ui/react'
import React from 'react'

// TODO: see what can add and what can remove from this component

type SubmitBtnType = {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    funcAction?: () => void,
    loading?: boolean,
    textloading?: string,
    variant?: 'solid' | 'outlined' | 'ghost' | 'link',
    size?: 'xs' | 'sm' | 'md' | 'lg',
}

const SubmitBtn = ({ children, loading, textloading, variant = 'solid', type = 'submit', size = 'md' }: SubmitBtnType) => {
    return (
        <Button type={type} size={{ base: 'sm', md: size }} mb='4' colorScheme='teal' variant={variant} isLoading={loading} loadingText={textloading} spinnerPlacement='end' border='1px' borderEnd='4px' borderBottom='4px' borderColor='teal'>
            {children}
        </Button>
    )
}

export default SubmitBtn