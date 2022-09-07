import * as Yup from "yup";

export const validationSchema = Yup.object({
    password: Yup.string()
        .min(8, 'Password too short. Minimum 8 symbols required.')
        .required('Please enter your password'),
    confirmPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password'), null], "Passwords don't match")
});