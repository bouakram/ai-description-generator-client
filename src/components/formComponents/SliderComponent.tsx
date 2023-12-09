import { FormHelperText, FormLabel, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { GenerateType } from '../../types/types'
import { useState } from 'react'

type SliderComponentPropsType = {
    register: UseFormRegister<GenerateType>,
    errors?: FieldErrors<GenerateType> | undefined,
    setValue: UseFormSetValue<GenerateType>,
    errorsMessage: string | undefined,
    name: keyof GenerateType,
    helper: string,
}

const SliderComponent = ({ register, name, setValue, errors, errorsMessage, helper }: SliderComponentPropsType) => {
    const [sliderValue, setSliderValue] = useState(50)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <>
            <FormLabel>{name}</FormLabel>
            <Slider
                {...register(name)}
                id='slider'
                defaultValue={50}
                min={50}
                max={1000}
                colorScheme='teal'
                onChange={(v) => {
                    setValue(name, v)
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
            {
                errors && errors[name] ?
                    <FormHelperText color='red'>{errorsMessage}</FormHelperText>
                    :
                    <FormHelperText>{helper}</FormHelperText>
            }
        </>
    )
}

export default SliderComponent