import { FormControl, Stack, Switch, Text } from '@chakra-ui/react'
import SubmitBtn from '../../SubmitBtn'
import { useState } from 'react'
import { createFormData } from '../../../constants/data'
import { GenerateContentService } from '../../../services/generateContentService'
import RadioComponent from '../../formComponents/RadioComponent'
import InputComponent from '../../formComponents/GenerateInputComponent'
import SelectComponents from '../../formComponents/SelectComponents'
import SliderComponent from '../../formComponents/SliderComponent'
import SwitchComponent from '../../formComponents/SwitchComponent'

// TODO: make all inputs disabled when generating the content

const Form = () => {
    const [isTone, setIsTone] = useState(false)
    const { register, handleSubmit, onsubmit, isPending, setValue, errors } = GenerateContentService()

    const handletonecheck = () => {
        setIsTone(!isTone)
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <FormControl isRequired mb='4' isDisabled={isPending}>
                <RadioComponent data={createFormData} attr='platform' register={register} errors={errors} errorsMessage={errors.Social_Media_Platform?.message} name='Social_Media_Platform' helper='select the social media you want to generate for.' />
            </FormControl>
            <FormControl isRequired mb='4' isDisabled={isPending}>
                <InputComponent name='Role' register={register} type='text' label='Role' placeholder='e.g: Software engineering | CopyWrite expert ....' errors={errors} errorsMessage={errors.Role?.message} helper='enter the role that uou want the generator to act like.' />
            </FormControl>
            <FormControl isRequired mb='4' isDisabled={isPending}>
                <InputComponent name='Topic' register={register} type='text' label='Topic' placeholder='e.g: create strawberry cake | road to a good developer ....' errors={errors} errorsMessage={errors.Topic?.message} helper='describe the topic you want to generate.' />
            </FormControl>
            <FormControl isRequired mb='4' isDisabled={isPending}>
                <InputComponent name='Audience' register={register} type='text' label='Audience' placeholder='e.g: mothers over 45 years old | girls | boys | students ....' errors={errors} errorsMessage={errors.Audience?.message} helper='select the audience you want to target.' />
            </FormControl>
            <FormControl isRequired mb='4' isDisabled={isPending}>
                {
                    !isTone ?
                        <SelectComponents register={register} name='Tone' data={createFormData} attr='tone' errors={errors} errorsMessage={errors.Tone?.message} helper='select the tone you want' />
                        :
                        <InputComponent name='Tone' register={register} type='text' label='Tone' placeholder='e.g: Angry | Funny | Formal ....' errors={errors} errorsMessage={errors.Tone?.message} helper='enter the tone that you need for your generated content' />
                }
                <Stack direction='row' alignItems='center' spacing='4' mt='2'>
                    <Text>I want to enter a specific tone</Text>
                    <Switch colorScheme='teal' size='sm' onChange={handletonecheck} isRequired={false} />
                </Stack>
            </FormControl>
            <FormControl isRequired mb='4' isDisabled={isPending}>
                <SliderComponent register={register} name='Number_of_Words' setValue={setValue} errors={errors} errorsMessage={errors.Number_of_Words?.message} helper='select how much words you need' />
            </FormControl>
            <FormControl mb='4' isDisabled={isPending}>
                <SwitchComponent register={register} name='Hashtags' helper='activate if you need hashtags related to the topic.' isRequired={false} />
            </FormControl>
            {/* <FormControl mb='4'>
                <SwitchComponent register={register} name='Emoji' helper='activate if you want emoji with the text generated.' isRequired={false} />
            </FormControl> */}
            <FormControl isRequired mb='4' isDisabled={isPending}>
                <RadioComponent register={register} name='Number_of_Posts_to_Generate' data={createFormData} attr='pages' errors={errors} errorsMessage={errors.Number_of_Posts_to_Generate?.message} helper='select the number of posts you want to generate' />
            </FormControl>
            <FormControl>
                <SubmitBtn loading={isPending} textloading='generating' >Generate</SubmitBtn>
            </FormControl>
        </form>
    )
}

export default Form