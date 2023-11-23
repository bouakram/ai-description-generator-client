import { Button } from '@chakra-ui/react'
import React from 'react'

type SwitchFormBtnType = {
    children: React.ReactNode,
    loading?: boolean,
    handleClick: () => void
}

const SwitchFormBtn = ({ children, handleClick, loading }: SwitchFormBtnType) => {
    return (
        <Button isLoading={loading} spinnerPlacement='end' alignSelf='flex-end' colorScheme='teal' variant='link' onClick={handleClick}>
            {children}
        </Button>
    )
}

export default SwitchFormBtn