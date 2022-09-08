import { styled } from '@mui/material/styles'
import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary'
import { CustomTitle } from 'components/CustomTitle/CustomTitle'
import { PasswordInput } from 'components/PasswordInput/PasswordInput'
import { FormikValues, useFormik } from 'formik'
import { FC } from 'react'
import laptopImage from '../../../assets/images/laptop.png'
import { validationSchema } from './schema'
import { NewPasswordProps } from './types'

export const NewPassword: FC<NewPasswordProps> = ({ changeScreen }) => {
  const initialValues = {
    password: '',
    confirmPassword: ''
  }

  const customHandleSubmit = (values: FormikValues) => {
    console.log(values)
    changeScreen('successScreen')
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

  return (
    <AuthContainer image={laptopImage}>
      <ResetForm onSubmit={handleSubmit}>
        <StyledCustomTitle>
          RESET
          <br />
          PASSWORD
        </StyledCustomTitle>

        <PasswordInput
          label="Enter New Password"
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
          label="Repeat New Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          messageType={'error'}
          message={touched.confirmPassword ? errors.confirmPassword : ''}
          hasError={touched.confirmPassword && !!errors.confirmPassword}
          placeholder="***************"
        />
        <ButtonPrimary type="submit" disabled={isSubmitting}>
          Save New Password
        </ButtonPrimary>
      </ResetForm>
    </AuthContainer>
  )
}

const ResetForm = styled('form')({
  width: '330px',
  display: 'flex',
  flexDirection: 'column'
})

const StyledCustomTitle = styled(CustomTitle)({
  fontSize: '48px'
})
