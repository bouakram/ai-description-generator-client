import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WelcomeMain from '../../components/welcome/WelcomeMain'
import { Stack } from '@chakra-ui/react'

function Welcome() {
    return (
        <div>
            <Navbar />
            <Stack width='100%' height='calc(100vh - 7rem)' p='4' alignContent='center' justifyContent='center'>
                <WelcomeMain />
            </Stack>
            <Footer />
        </div>
    )
}

export default Welcome