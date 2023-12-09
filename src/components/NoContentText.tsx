import { Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type Props = {}

const NoContentText = (props: Props) => {
    return (
        <Text>No Content to display. <Link to={'/create'}><Button variant='link' colorScheme='teal'>click here to create a content !</Button></Link></Text>
    )
}

export default NoContentText