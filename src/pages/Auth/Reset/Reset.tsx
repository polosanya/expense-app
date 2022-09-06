import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { CustomTitle } from 'components/CustomTitle/CustomTitle';
import { PrimaryInput } from 'components/PrimaryInput/PrimaryInput';
import { PrimaryInputMessageType } from 'components/PrimaryInput/utils';
import { FormikValues, useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from "yup";
import laptopImage from '../../../assets/images/laptop.png';

export const Reset: FC = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Your email is not valid')
            .required('Please enter your email'),
    });

    const initialValues = {
        email: '',
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
                <CustomTitle sx={{fontSize: '48px'}}>RESET<br />PASSWORD</CustomTitle>
                <StyledText variant='h5'>
                    Enter your email and we will send you an email with simple steps
                    to reset your password and reset it
                </StyledText>

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

                <ButtonPrimary type='submit' disabled={isSubmitting}>
                    Reset Password
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

const StyledText = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.white,
    fontSize: '16px',
    textAlign: 'center',
    width: '100%',
    paddingBottom: '32px',
}))