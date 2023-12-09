import { Alert, AlertIcon, FormHelperText, FormLabel, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import { GenerateType } from '../../types/types'
import type { createFormData } from '../../constants/data'
import usePlatformSelector from '../../hooks/usePlatformSelector'

type RadioPropsType = {
    register: UseFormRegister<GenerateType>,
    name: keyof GenerateType,
    data: typeof createFormData,
    errors?: FieldErrors<GenerateType> | undefined,
    errorsMessage: string | undefined,
    helper: string,
    attr: keyof typeof createFormData
}

const RadioComponent = ({ register, name, data, attr, errors, errorsMessage, helper }: RadioPropsType) => {
    const { getPlatform } = usePlatformSelector()
    return (
        <>
            <FormLabel>{name}</FormLabel>
            <RadioGroup defaultValue={String(data[attr][0])}>
                <Stack spacing={5} direction='row' wrap='wrap'>
                    {
                        attr === 'platform' ? data[attr].map(attr => (
                            <Radio key={attr} {...register(name)} colorScheme='teal' value={String(attr)}>
                                <Stack alignItems='center' spacing={2} direction='row'>
                                    {getPlatform(String(attr))}
                                    <Text>{attr}</Text>
                                </Stack>
                            </Radio>
                        ))
                            :
                            attr === 'pages' ? data[attr].map(attr => (
                                <Radio key={attr} {...register(name)} colorScheme='teal' value={String(attr)}>
                                    <Stack alignItems='center' spacing={2} direction='row'>
                                        <Text>{attr}</Text>
                                    </Stack>
                                </Radio>
                            ))
                                :
                                <Alert status='warning'>
                                    <AlertIcon />
                                    Seems your attribute is not supported
                                </Alert>
                    }
                </Stack>
            </RadioGroup>
            {
                errors && errors[name] ?
                    <FormHelperText color='red'>{errorsMessage}</FormHelperText>
                    :
                    <FormHelperText>{helper}</FormHelperText>
            }
        </>
    )
}

export default RadioComponent