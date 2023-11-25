import { Box, Button, IconButton, Spacer, Stack, Text, useColorMode, } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { API_URL } from '../constants'
import { useStore } from '../utils/store'
type Props = {}

const Navbar = (props: Props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    ///// TODO : figure out how to use the cookies instead of the localStorage
    const setToken = useStore(store => store.setToken)
    const token = useStore(store => store.token)
    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
        window.open(`${API_URL}auth/logout`, '_self')
    }
    return (
        <Box position='sticky' top={0} p='4' zIndex={10} backdropFilter='auto' backdropBlur='8px' shadow='sm'>
            <Stack alignItems='center' direction='row' >
                <Link to={'/'}><Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight='bold'
                    cursor='pointer'
                >
                    ContentGen
                </Text>
                </Link>
                <Spacer />
                <IconButton onClick={toggleColorMode} variant='ghost' aria-label='change theme' icon={colorMode === "light" ? <FaMoon fill='teal' /> : <FaSun fill='gold' />} />
                {token && <Button onClick={logout} rightIcon={<IoMdLogOut />}>Logout</Button>}
            </Stack>
        </Box >
    )
}

export default Navbar