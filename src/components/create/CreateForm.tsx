import { Box, Card, CardBody, CardFooter, CardHeader, FormControl, FormHelperText, FormLabel, Heading, Input, Radio, RadioGroup, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Switch, Text, Tooltip } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SubmitBtn from '../SubmitBtn'

// TODO: optimize this component ui

type Props = {}

const CreateForm = (props: Props) => {
    const [isTone, setIsTone] = useState(false)
    const [sliderValue, setSliderValue] = useState(50)
    const [showTooltip, setShowTooltip] = useState(false)
    const handletonecheck = () => {
        setIsTone(!isTone)
    }
    return (
        <Box flex='1' minH='inherit' p='4'>
            <Card border='1px' borderRight='4px' borderBottom='4px' borderColor='inherit'>
                <CardHeader>
                    <Heading size='md'>Fill the form to generate the Content you need</Heading>
                </CardHeader>
                <CardBody>
                    <form>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Social media</FormLabel>
                            <RadioGroup defaultValue='facebook'>
                                <Stack spacing={5} direction='row' wrap='wrap'>
                                    <Radio colorScheme='teal' value='facebook'>
                                        <Stack alignItems='center' spacing={2} direction='row'>
                                            <FaFacebook /><Text>Facebook</Text>
                                        </Stack>
                                    </Radio>
                                    <Radio colorScheme='teal' value='instagram'>
                                        <Stack alignItems='center' spacing={2} direction='row'>
                                            <FaInstagram /><Text>Instagram</Text>
                                        </Stack>
                                    </Radio>
                                    <Radio colorScheme='teal' value='linkedin'>
                                        <Stack alignItems='center' spacing={2} direction='row'>
                                            <FaLinkedin /><Text>LinkedIn</Text>
                                        </Stack>
                                    </Radio>
                                    <Radio colorScheme='teal' value='twitter'>
                                        <Stack alignItems='center' spacing={2} direction='row'>
                                            <FaTwitter /><Text>Twitter X</Text>
                                        </Stack>
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Topic</FormLabel>
                            <Input type='text' min='3' max='35' placeholder='enter the topic...' focusBorderColor='teal.500' />
                            <FormHelperText>describe the topic you want to generate.</FormHelperText>
                        </FormControl>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Tone</FormLabel>
                            {
                                !isTone ?
                                    <>
                                        <Select focusBorderColor='teal.500'>
                                            <option disabled>select a ton</option>
                                            <option>Formal</option>
                                            <option>Casual</option>
                                            <option>Professional</option>
                                            <option>Humorous</option>
                                            <option>Inquisitive</option>
                                            <option>Encouraging</option>
                                            <option>Empathetic</option>
                                            <option>Assertive</option>
                                            <option>Optimistic</option>
                                            <option>Sincere</option>
                                        </Select>
                                        <FormHelperText>select the tone you want</FormHelperText>
                                    </>
                                    :
                                    <>
                                        <Input type='text' placeholder='enter your specific tone' focusBorderColor='teal.500' />
                                        <FormHelperText>enter the tone that you need for your generated content</FormHelperText>
                                    </>
                            }
                            <Stack direction='row' alignItems='center' spacing='4' mt='2'>
                                <Text>I want to enter a specific tone</Text>
                                <Switch colorScheme='teal' size='sm' onChange={handletonecheck} />
                            </Stack>
                        </FormControl>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Words</FormLabel>
                            <Slider
                                id='slider'
                                defaultValue={50}
                                min={50}
                                max={1000}
                                colorScheme='teal'
                                onChange={(v) => setSliderValue(v)}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <SliderTrack bg='teal.100'>
                                    <SliderFilledTrack bg='teal' />
                                </SliderTrack>
                                <Tooltip
                                    hasArrow
                                    bg='teal.500'
                                    color='white'
                                    placement='top'
                                    isOpen={showTooltip}
                                    label={`${sliderValue} word`}
                                >
                                    <SliderThumb />
                                </Tooltip>
                            </Slider>
                            <FormHelperText>select how much words you need</FormHelperText>
                        </FormControl>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Hashtag</FormLabel>
                            <Stack alignItems='center' direction='row' spacing='5'>
                                <Text>Include Hashtags</Text>
                                <Switch colorScheme='teal' />
                            </Stack>
                            <FormHelperText>activate if you need hashtags related to the topic.</FormHelperText>
                        </FormControl>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Emoji</FormLabel>
                            <Stack alignItems='center' direction='row' spacing='5'>
                                <Text>Include Emoji</Text>
                                <Switch colorScheme='teal' />
                            </Stack>
                            <FormHelperText>activate if you want emoji with the text generated.</FormHelperText>
                        </FormControl>
                        <FormControl isRequired mb='4'>
                            <FormLabel>Number of Posts</FormLabel>
                            <RadioGroup defaultValue='1'>
                                <Stack spacing={5} direction='row' wrap='wrap'>
                                    <Radio colorScheme='teal' value='1'>
                                        1
                                    </Radio>
                                    <Radio colorScheme='teal' value='2'>
                                        2
                                    </Radio>
                                    <Radio colorScheme='teal' value='3'>
                                        3
                                    </Radio>
                                    <Radio colorScheme='teal' value='4'>
                                        4
                                    </Radio>
                                    <Radio colorScheme='teal' value='5'>
                                        5
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                            <FormHelperText>select how much posts you need.</FormHelperText>
                        </FormControl>
                    </form>
                </CardBody>
                <CardFooter>
                    <SubmitBtn loading={false} textloading='generating' >Generate</SubmitBtn>
                </CardFooter>
            </Card>
        </Box>
    )
}

export default CreateForm