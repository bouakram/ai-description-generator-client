import { Image } from '@chakra-ui/react'
import React from 'react'

type ImgComponentPropsType = {
    imgSrc: string
}

const ImgComponent = ({ imgSrc }: ImgComponentPropsType) => {
    return (
        <Image
            src={imgSrc}
            maxWidth='100%'
            width={{ base: '350px', lg: '450px' }}
            height={{ base: '350px', lg: '450px' }}
            objectFit='fill'
        />
    )
}

export default ImgComponent