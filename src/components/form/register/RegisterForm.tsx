import { FormControl } from '@chakra-ui/react'
import SubmitBtn from '../../SubmitBtn'

import InputComponent from '../../formComponents/AuthInputComponent'
import { RegisterService } from '../../../services/authService'

const RegisterForm = () => {
    const { handleSubmit, register, onsubmit, isPending, errors } = RegisterService()

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <FormControl isRequired mb='4'>
                <InputComponent label='User Name' register={register} errors={errors} errorsMessage={errors.username?.message} placeholder='Example123' type='text' name='username' helper='enter your cool user name.' />
            </FormControl>
            <FormControl isRequired mb='4'>
                <InputComponent label='Email address' register={register} errors={errors} errorsMessage={errors.email?.message} placeholder='example@emample.com' type='email' name='email' helper='make sure to enter a valid email address.' />
            </FormControl>
            <FormControl isRequired mb='4'>
                <InputComponent label='Password' register={register} errors={errors} errorsMessage={errors.password?.message} placeholder='enter your password: **********' type='password' name='password' helper='make sure to enter a solid password with min length of 8 characters.' />
            </FormControl>
            <FormControl isRequired mb='4'>
                <InputComponent label='Confirm password' register={register} errors={errors} errorsMessage={errors.confirmPassword?.message} placeholder='enter your confirmed password: **********' type='password' name='confirmPassword' helper='make sure to match your password' />
            </FormControl>
            <FormControl>
                <SubmitBtn loading={isPending} textloading='submitting'>Register</SubmitBtn>
            </FormControl>
        </form>
    )
}

export default RegisterForm