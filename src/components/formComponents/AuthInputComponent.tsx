import { FormHelperText, Input, FormLabel } from '@chakra-ui/react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';

type AuthInputComponentPropsTypes = {
    register: UseFormRegister<FormType>,
    errors?: FieldErrors<FormType> | undefined,
    errorsMessage: string | undefined,
    type: React.HTMLInputTypeAttribute,
    name: keyof FormType,
    label: string,
    placeholder: string,
    helper: string
}

const AuthInputComponent = ({ label, errors, errorsMessage, register, name, type, placeholder, helper }: AuthInputComponentPropsTypes) => {
    return (
        <>
            <FormLabel>{label}</FormLabel>
            <Input {...register(name, { required: true })} type={type} placeholder={placeholder} focusBorderColor='teal.500' />
            {errors && errors[name] ?
                <FormHelperText color='red'>{errorsMessage}</FormHelperText>
                :
                <FormHelperText>{helper}</FormHelperText>
            }
        </>
    )
}

export default AuthInputComponent