import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import womanImage from 'assets/images/woman.png';
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

export const SignIn: FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Your email is not valid')
      .required('Please enter your email'),
    password: Yup.string()
      .min(8, 'Password too short. Minimum 8 symbols required.')
      .required('Please enter your password')
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
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <AuthContainer image={womanImage}>
      <SignInForm onSubmit={handleSubmit}>
        <CustomTitle>SIGN IN</CustomTitle>

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

        <PasswordDetails>
          <CustomCheckbox label='Remember me' />

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

const PasswordDetails = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '32px',
});

const FormFooter = styled(Box)<BoxProps>(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '400',
  color: theme.palette.bgr,
  paddingTop: '24px',
}));
