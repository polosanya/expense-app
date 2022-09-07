import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Your email is not valid')
        .required('Please enter your email'),
    password: Yup.string()
        .min(8, 'Password too short. Minimum 8 symbols required.')
        .required('Please enter your password')
});