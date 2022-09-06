import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { CustomTitle } from 'components/CustomTitle/CustomTitle';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { PrimaryInput } from 'components/PrimaryInput/PrimaryInput';
import { PrimaryInputMessageType } from 'components/PrimaryInput/utils';
import { FormikValues, useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from "yup";
import duckImage from '../../../assets/images/duck.png';

export const SignUp: FC = () => {
    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Please enter your full name')
            .max(35, 'Too long'),
        userName: Yup.string()
            .required('Please enter your user name')
            .max(35, 'Too long'),
        email: Yup.string()
            .email('Your email is not valid')
            .required('Please enter your email'),
        password: Yup.string()
            .min(8, 'Password too short. Minimum 8 symbols required.')
            .required('Please enter your password'),
        confirmPassword: Yup.string()
            .required('Please confirm your password')
            .oneOf([Yup.ref('password'), null], "Passwords don't match")
    });

    const initialValues = {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const customHandleSubmit = (values: FormikValues) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: customHandleSubmit,
    })

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = formik;

    return (
        <AuthContainer image={duckImage}>
            <SignInForm onSubmit={handleSubmit}>
                <CustomTitle>SIGN UP</CustomTitle>

                <PrimaryInput
                    label='Full Name'
                    name='fullName'
                    type='text'
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    messageType={PrimaryInputMessageType.Error}
                    message={errors.fullName}
                    touched={touched.fullName}
                    placeholder='Example Name'
                />

                <PrimaryInput
                    label='User Name'
                    name='userName'
                    type='text'
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    messageType={PrimaryInputMessageType.Error}
                    message={errors.userName}
                    touched={touched.userName}
                    placeholder='Example1488'
                />

                <PrimaryInput
                    label='Email Address'
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    messageType={PrimaryInputMessageType.Error}
                    message={errors.email}
                    touched={touched.email}
                    placeholder='example@gmail.com'
                />

                <PasswordInput
                    label='Password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    messageType={PrimaryInputMessageType.Error}
                    message={errors.password}
                    touched={touched.password}
                    placeholder='***************'
                />

                <PasswordInput
                    label='Confirm Password'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    messageType={PrimaryInputMessageType.Error}
                    message={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    placeholder='***************'
                />

                <PasswordDetails>
                    <CustomCheckbox label={(<>
                        By creating an account you agree to the&nbsp;
                        <CustomLink href={process.env.REACT_APP_BASE_URL} variant='h3'>
                            terms of use
                        </CustomLink>
                        &nbsp;and&nbsp;
                        <CustomLink href={process.env.REACT_APP_BASE_URL} variant='h3'>
                            our privacy policy.
                        </CustomLink>
                    </>)} />

                </PasswordDetails>

                <ButtonPrimary type='submit' disabled={isSubmitting}>
                    Sign Up
                </ButtonPrimary>
            </SignInForm>
        </AuthContainer>
    );
};

const SignInForm = styled('form')(({ theme }) => ({
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.white,
}));

const PasswordDetails = styled(Box)<BoxProps>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '32px',
});


