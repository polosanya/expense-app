import * as Yup from 'yup'

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Your email is not valid')
    .required('Please enter your email')
})
