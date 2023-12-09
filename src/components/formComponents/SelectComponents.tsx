import { FormHelperText, FormLabel, Select, } from '@chakra-ui/react'
import { GenerateType } from '../../types/types'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import { createFormData } from '../../constants/data'

type SelectComponentsPropsType = {
    register: UseFormRegister<GenerateType>,
    errors?: FieldErrors<GenerateType> | undefined,
    errorsMessage: string | undefined,
    name: keyof GenerateType,
    data: typeof createFormData,
    attr: keyof typeof createFormData,
    helper: string,
}

const SelectComponents = ({ register, name, attr, errors, errorsMessage, data, helper }: SelectComponentsPropsType) => {
    return (
        <>
            <FormLabel>{name}</FormLabel>
            <Select {...register(name)} focusBorderColor='teal.500'>
                {
                    data[attr].map(attr => (
                        <option key={attr} value={attr}>{attr}</option>
                    ))
                }
            </Select>
            {
                errors && errors[name] ?
                    <FormHelperText>{errorsMessage}</FormHelperText>
                    :
                    <FormHelperText>{helper}</FormHelperText>
            }
        </>
    )
}

export default SelectComponents