import { FormControl } from '@chakra-ui/react'
import SubmitBtn from '../../SubmitBtn'
import InputComponent from '../../formComponents/AuthInputComponent';
import { LoginService } from '../../../services/authService';

const LoginForm = () => {
    const { handleSubmit, onsubmit, register, isPending, errors } = LoginService()
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <FormControl isRequired mb='4'>
                <InputComponent label='Email Address' register={register} errors={errors} errorsMessage={errors.email?.message} placeholder='example@example.com' type='email' name='email' helper='please make sure to enter a valid email address' />
            </FormControl>
            <FormControl isRequired mb='4'>
                <InputComponent label='Password' register={register} errors={errors} errorsMessage={errors.password?.message} placeholder='enter your password: ******' type='password' name='password' helper='please make sure to enter the correct password' />
            </FormControl>
            <FormControl isRequired mb='4'>
                <SubmitBtn loading={isPending} textloading='logging in' >Login</SubmitBtn>
            </FormControl>
        </form>
    )
}

export default LoginForm