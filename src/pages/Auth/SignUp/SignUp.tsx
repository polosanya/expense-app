import { Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAppDispatch } from 'app/hooks'
import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary'
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox'
import { CustomLink } from 'components/CustomLink/CustomLink'
import { CustomTitle } from 'components/CustomTitle/CustomTitle'
import { PasswordInput } from 'components/PasswordInput/PasswordInput'
import { PrimaryInput } from 'components/PrimaryInput/PrimaryInput'
import { signUp } from 'features/register/registerSlice'
import { FormikValues, useFormik } from 'formik'
import { FC, useState } from 'react'
import duckImage from '../../../assets/images/duck.png'
import { Success } from '../Success/Success'
import { validationSchema } from './schema'
import { SignUpScreens } from './types'

export const SignUp: FC = () => {
  const [screen, setScreen] = useState<SignUpScreens>('initialScreen')
  const dispatch = useAppDispatch()

  const initialValues = {
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const customHandleSubmit = async (values: FormikValues) => {
    const requestData = {
      password: values.confirmPassword,
      username: values.userName,
      displayName: values.fullName
    }
    const { payload } = await dispatch(signUp(requestData))
    console.log(payload)
    setScreen('successScreen')
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: customHandleSubmit
  })

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = formik

  switch (screen) {
    case 'initialScreen':
      return (
        <AuthContainer image={duckImage}>
          <SignInForm onSubmit={handleSubmit}>
            <CustomTitle>SIGN UP</CustomTitle>

            <PrimaryInput
              label="Full Name"
              name="fullName"
              type="text"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              messageType={'error'}
              message={touched.fullName ? errors.fullName : ''}
              hasError={touched.fullName && !!errors.fullName}
              placeholder="Example Name"
            />

            <PrimaryInput
              label="User Name"
              name="userName"
              type="text"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              messageType={'error'}
              message={touched.userName ? errors.userName : ''}
              hasError={touched.userName && !!errors.userName}
              placeholder="Example1488"
            />

            <PrimaryInput
              label="Email Address"
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              messageType={'error'}
              message={touched.email ? errors.email : ''}
              hasError={touched.email && !!errors.email}
              placeholder="example@gmail.com"
            />

            <PasswordInput
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              messageType={'error'}
              message={touched.password ? errors.password : ''}
              hasError={touched.password && !!errors.password}
              placeholder="***************"
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              messageType={'error'}
              message={touched.confirmPassword ? errors.confirmPassword : ''}
              hasError={touched.confirmPassword && !!errors.confirmPassword}
              placeholder="***************"
            />

            <PasswordDetails>
              <CustomCheckbox
                labelComponent={
                  <>
                    By creating an account you agree to the&nbsp;
                    <CustomLink
                      href={process.env.REACT_APP_BASE_URL}
                      variant="h3"
                    >
                      terms of use
                    </CustomLink>
                    &nbsp;and&nbsp;
                    <CustomLink
                      href={process.env.REACT_APP_BASE_URL}
                      variant="h3"
                    >
                      our privacy policy.
                    </CustomLink>
                  </>
                }
              />
            </PasswordDetails>

            <ButtonPrimary type="submit" disabled={isSubmitting}>
              Sign Up
            </ButtonPrimary>
          </SignInForm>
        </AuthContainer>
      )
    case 'successScreen':
      return (
        <Success buttonLabel="Let's start">
          Your account <br />
          successfully created
        </Success>
      )
  }
}

const SignInForm = styled('form')(({ theme }) => ({
  width: '330px',
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.white
}))

const PasswordDetails = styled(Box)<BoxProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '32px'
})
