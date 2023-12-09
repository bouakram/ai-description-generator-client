import { FormHelperText, FormLabel, Stack, Switch, Text } from '@chakra-ui/react'
import type { UseFormRegister } from 'react-hook-form'
import { GenerateType } from '../../types/types'

type Props = {
    register: UseFormRegister<GenerateType>,
    name: keyof GenerateType,
    helper: string,
    isRequired: boolean
}

const SwitchComponent = ({ register, name, helper, isRequired }: Props) => {
    return (
        <>
            <FormLabel>{name}</FormLabel>
            <Stack alignItems='center' direction='row' spacing='5'>
                <Text>Include {name}</Text>
                <Switch {...register(name)} colorScheme='teal' isRequired={isRequired} />
            </Stack>
            <FormHelperText>{helper}</FormHelperText>
        </>
    )
}

export default SwitchComponent