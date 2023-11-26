import WelcomeMain from '../../components/welcome/WelcomeMain'
import { Stack } from '@chakra-ui/react'

function WelcomePage() {
    return (
        <Stack width='100%' height='calc(100vh - 7rem)' p='4' alignContent='center' justifyContent='center'>
            <WelcomeMain />
        </Stack>
    )
}

export default WelcomePage