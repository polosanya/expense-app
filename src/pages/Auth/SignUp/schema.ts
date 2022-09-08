import * as Yup from 'yup'

export const validationSchema = Yup.object({
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
})
