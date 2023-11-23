import { Avatar, Box, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Stack, Text, useColorMode, useToast, } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../constants'
import { useStore } from '../utils/store'
type Props = {}

const Navbar = (props: Props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const navigate = useNavigate()
    const toast = useToast()
    ///// TODO : figure out how to use the cookies instead of the localStorage
    const setToken = useStore(store => store.setToken)
    const token = useStore(store => store.token)
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
                {
                    token &&
                    <Menu>
                        {/* 
                        // TODO: handle the avatar image.
                        */}
                        <MenuButton as={Avatar} name='User Name' src='https://bit.ly/dan-abramov' size='sm' cursor='pointer' />
                        <MenuList>
                            <MenuGroup title='Profile'>
                                <MenuItem>User@example.com</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title='Setting'>
                                {/* 
                                // TODO: create handle logout function.
                                */}
                                <MenuItem
                                    onClick={async () => await axios.get(`${API_URL}auth/logout`).then(res => {
                                        setToken(null)
                                        localStorage.removeItem('token')
                                        navigate('/')
                                    }).catch((error) => {
                                        toast({
                                            title: `${error.response?.data?.message || 'something went wrong'}`,
                                            position: 'top',
                                            status: 'error',
                                            isClosable: true,
                                        })
                                    })
                                    }
                                >
                                    <IoMdLogOut style={{ marginRight: 2 }} />
                                    Logout
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                }
            </Stack>
        </Box >
    )
}

export default Navbar