import { FormControl, FormHelperText, FormLabel, Input, Radio, RadioGroup, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Switch, Text, Tooltip } from '@chakra-ui/react'
import SubmitBtn from '../../SubmitBtn'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createFormData } from '../../../constants/data'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

type Props = {}

const Form = (props: Props) => {
    const [isTone, setIsTone] = useState(false)
    const [sliderValue, setSliderValue] = useState(50)
    const [showTooltip, setShowTooltip] = useState(false)
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm()
    const handletonecheck = () => {
        setIsTone(!isTone)
    }
    const getPlatform = (socialMediaPlatform: string) => {
        switch (socialMediaPlatform.toLowerCase()) {
            case 'facebook':
                return <FaFacebook />
            case 'instagram':
                return <FaInstagram />
            case 'linkedin':
                return <FaLinkedin />
            case 'twitter':
                return <FaTwitter />
            default:
                break;
        }
    }

    const onsubmit = (data: any) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <FormControl isRequired mb='4'>
                <FormLabel>Social media</FormLabel>
                <RadioGroup defaultValue={createFormData.platform[0]}>
                    <Stack spacing={5} direction='row' wrap='wrap'>
                        {
                            createFormData.platform.map(socialMediaPlatform => (
                                <Radio key={socialMediaPlatform} {...register('Social_Media_Platform')} colorScheme='teal' value={socialMediaPlatform}>
                                    <Stack alignItems='center' spacing={2} direction='row'>
                                        {getPlatform(socialMediaPlatform)}
                                        <Text>{socialMediaPlatform}</Text>
                                    </Stack>
                                </Radio>
                            ))
                        }
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl isRequired mb='4'>
                <FormLabel>Role</FormLabel>
                <Input {...register('Role', { minLength: 3, maxLength: 35 })} type='text' placeholder='enter the role...' focusBorderColor='teal.500' />
                <FormHelperText>select a role for generator.</FormHelperText>
            </FormControl>
            <FormControl isRequired mb='4'>
                <FormLabel>Topic</FormLabel>
                <Input {...register('Topic', { minLength: 3, maxLength: 35 })} type='text' placeholder='enter the topic...' focusBorderColor='teal.500' />
                <FormHelperText>describe the topic you want to generate.</FormHelperText>
            </FormControl>
            <FormControl isRequired mb='4'>
                <FormLabel>Tone</FormLabel>
                {
                    !isTone ?
                        <>
                            <Select {...register('Tone')} focusBorderColor='teal.500'>
                                {
                                    createFormData.tone.map(tone => (
                                        <option key={tone} value={tone}>{tone}</option>
                                    ))
                                }
                            </Select>
                            <FormHelperText>select the tone you want</FormHelperText>
                        </>
                        :
                        <>
                            <Input {...register('Tone', { minLength: 3, maxLength: 35 })} type='text' placeholder='enter your specific tone' focusBorderColor='teal.500' />
                            <FormHelperText>enter the tone that you need for your generated content</FormHelperText>
                        </>
                }
                <Stack direction='row' alignItems='center' spacing='4' mt='2'>
                    <Text>I want to enter a specific tone</Text>
                    <Switch colorScheme='teal' size='sm' onChange={handletonecheck} isRequired={false} />
                </Stack>
            </FormControl>
            <FormControl isRequired mb='4'>
                <FormLabel>Words</FormLabel>
                <Slider
                    {...register('Number_of_Words')}
                    id='slider'
                    defaultValue={50}
                    min={50}
                    max={1000}
                    colorScheme='teal'
                    onChange={(v) => {
                        setValue('Number_of_Words', v)
                        setSliderValue(v)
                    }
                    }
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
            <FormControl mb='4'>
                <FormLabel>Hashtag</FormLabel>
                <Stack alignItems='center' direction='row' spacing='5'>
                    <Text>Include Hashtags</Text>
                    <Switch {...register('Hashtags')} colorScheme='teal' isRequired={false} />
                </Stack>
                <FormHelperText>activate if you need hashtags related to the topic.</FormHelperText>
            </FormControl>
            <FormControl mb='4'>
                <FormLabel>Emoji</FormLabel>
                <Stack alignItems='center' direction='row' spacing='5'>
                    <Text>Include Emoji</Text>
                    <Switch {...register('Emoji')} colorScheme='teal' isRequired={false} />
                </Stack>
                <FormHelperText>activate if you want emoji with the text generated.</FormHelperText>
            </FormControl>
            <FormControl isRequired mb='4'>
                <FormLabel>Number of Posts</FormLabel>
                <RadioGroup defaultValue={String(createFormData.pages[0])}>
                    <Stack spacing={5} direction='row' wrap='wrap'>
                        {
                            createFormData.pages.map((value) => (
                                <Radio
                                    key={value}
                                    value={String(value)}
                                    colorScheme='teal'
                                    {...register('Number_of_Posts_to_Generate')}
                                >
                                    {value}
                                </Radio>
                            ))
                        }
                    </Stack>
                </RadioGroup>
                <FormHelperText>select how much posts you need.</FormHelperText>
            </FormControl>

            <SubmitBtn loading={false} textloading='generating' >Generate</SubmitBtn>
        </form>
    )
}

export default Form