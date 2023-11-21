import { Avatar, Box, Button, ButtonGroup, Container, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Spacer, Stack, Text, useColorMode, } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'
type Props = {}

const Navbar = (props: Props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const token: { token: string } = cookie.load('token')
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
                    token ?
                        <Menu>
                            <MenuButton as={Avatar} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' cursor='pointer' />
                            <MenuList>
                                <MenuGroup title='Profile'>
                                    <MenuItem>User@example.com</MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup title='Setting'>
                                    <MenuItem><IoMdLogOut style={{ marginRight: 2 }} /> Logout</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                        :
                        <ButtonGroup gap='2'>
                            <Button colorScheme={'teal'} variant={'outline'} size={{ base: 'sm', md: 'md' }}>Log In</Button>
                            <Button colorScheme={'teal'} variant={'solid'} size={{ base: 'sm', md: 'md' }}>Register</Button>
                        </ButtonGroup>
                }
            </Stack>
        </Box>
    )
}

export default Navbar