import { styled } from '@mui/material/styles';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { CustomTitle } from 'components/CustomTitle/CustomTitle';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { PrimaryInputMessageType } from 'components/PrimaryInput/utils';
import { FormikValues, useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from "yup";
import laptopImage from '../../../assets/images/laptop.png';

export const NewPassword: FC = () => {
    const validationSchema = Yup.object({
        password: Yup.string()
            .min(8, 'Password too short. Minimum 8 symbols required.')
            .required('Please enter your password'),
        confirmPassword: Yup.string()
            .required('Please confirm your password')
            .oneOf([Yup.ref('password'), null], "Passwords don't match")
    });

    const initialValues = {
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
        <AuthContainer image={laptopImage}>
            <ResetForm onSubmit={handleSubmit}>
                <CustomTitle sx={{ fontSize: '48px' }}>RESET<br />PASSWORD</CustomTitle>

                <PasswordInput
                    label='Enter New Password'
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
                    label='Repeat New Password'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    messageType={PrimaryInputMessageType.Error}
                    message={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    placeholder='***************'
                />
                <ButtonPrimary type='submit' disabled={isSubmitting}>
                    Save New Password
                </ButtonPrimary>
            </ResetForm>
        </AuthContainer>
    )
}

const ResetForm = styled('form')({
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
})
