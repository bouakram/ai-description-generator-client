import { FormHelperText, Input, FormLabel } from '@chakra-ui/react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { GenerateType } from '../../types/types';

type GenerateInputComponentPropsTypes = {
    register: UseFormRegister<GenerateType>,
    errors?: FieldErrors<GenerateType> | undefined,
    errorsMessage: string | undefined,
    type: React.HTMLInputTypeAttribute,
    name: keyof GenerateType,
    label: string,
    placeholder: string,
    helper: string
}

const GenerateInputComponent = ({ errors, errorsMessage, register, name, type, placeholder, helper }: GenerateInputComponentPropsTypes) => {
    return (
        <>
            <FormLabel>{name}</FormLabel>
            <Input {...register(name, { required: true })} type={type} placeholder={placeholder} focusBorderColor='teal.500' />
            {errors && errors[name] ?
                <FormHelperText color='red'>{errorsMessage}</FormHelperText>
                :
                <FormHelperText>{helper}</FormHelperText>
            }
        </>
    )
}

export default GenerateInputComponent