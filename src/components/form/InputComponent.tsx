import { FormHelperText, Input, FormLabel } from '@chakra-ui/react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';

type InputComponentPropsTypes = {
    register: UseFormRegister<FormType>,
    errorsType?: FieldErrors<FormType> | undefined,
    errorsMessage: string | undefined,
    type: React.HTMLInputTypeAttribute,
    name: keyof FormType
    label: string
    placeholder: string,
    helper: string
}

const InputComponent = ({ label, errorsType, errorsMessage, register, name, type, placeholder, helper }: InputComponentPropsTypes) => {
    return (
        <>
            <FormLabel>{label}</FormLabel>
            <Input {...register(name, { required: true })} type={type} placeholder={placeholder} focusBorderColor='teal.500' />
            {errorsType && errorsType[name] ?
                <FormHelperText color='red'>{errorsMessage}</FormHelperText>
                :
                <FormHelperText>{helper}</FormHelperText>
            }
        </>
    )
}

export default InputComponent