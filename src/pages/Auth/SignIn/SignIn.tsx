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
import { FormikValues, useFormik } from 'formik';
import { FC } from 'react';
import { validationSchema } from './schema';

export const SignIn: FC = () => {
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
          messageType={'error'}
          message={touched.email ? errors.email : ''}
          hasError={touched.email && !!errors.email}
          placeholder='example@gmail.com'
        />

        <PasswordInput
          label='Password'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          messageType={'error'}
          message={touched.password ? errors.password : ''}
          hasError={touched.password && !!errors.password}
          placeholder='***************'
        />

        <PasswordDetails>
          <CustomCheckbox labelComponent='Remember me' />

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
