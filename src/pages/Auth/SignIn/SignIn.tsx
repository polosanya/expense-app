import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';
import womanImage from 'assets/images/woman.png';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { PrimaryInput } from 'components/PrimaryInput/PrimaryInput';
import { PrimaryInputMessageType } from 'components/PrimaryInput/utils';
import { FormikValues, useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from "yup";

export const SignIn: FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(8, 'Password too short').required()
  });

  const initialValues = {
    email: '',
    password: '',
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
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <AuthContainer image={womanImage}>
      <SignInForm onSubmit={handleSubmit}>
        <Title>SIGN IN</Title>

        <PrimaryInput
          label='Email Address'
          name='email'
          type='text'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          messageType={PrimaryInputMessageType.Error}
          message={errors.email}
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
          placeholder='***************'
        />

        <PasswordDetails>
          <CustomCheckbox />

          <CustomLink href={process.env.REACT_APP_BASE_URL} variant='h3'>
            Reset Password?
          </CustomLink>
        </PasswordDetails>

        <ButtonPrimary type='submit' disabled={isSubmitting}>Login</ButtonPrimary>

        <FormFooter>
          Don&apos;t have account yet?&nbsp;&nbsp;
          <CustomLink href={process.env.REACT_APP_BASE_URL} variant='h3'>
            New Account
          </CustomLink>
        </FormFooter>
      </SignInForm>
    </AuthContainer>
  )
};

const SignInForm = styled('form')(({ theme }) => ({
  width: '330px',
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.white,
}));

const Title = styled(Typography)<TypographyProps>({
  fontSize: '56px',
  lineHeight: '1',
  fontWeight: '700',
  textAlign: 'center',
  paddingBottom: '32px',
});

const PasswordDetails = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '32px',
});

const FormFooter = styled(Box)<BoxProps>({
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '400',
  paddingTop: '24px',
});
