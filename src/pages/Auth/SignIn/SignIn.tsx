import { FC, useState } from 'react';
import womanImage from 'assets/images/woman.png';
import AuthContainer from 'components/AuthContainer/AuthContainer';
import { Typography, TypographyProps, Box, BoxProps, FormControlLabel, Checkbox, Link, CheckboxProps, FormControlLabelProps } from '@mui/material'
import { styled } from '@mui/system';
import { InputUnstyled, InputUnstyledProps, ButtonUnstyled, ButtonUnstyledProps } from '@mui/base/';
import { useFormik, FormikValues } from 'formik';
import * as Yup from "yup";
import eyeOff from 'assets/logos/eye-off.svg';
import eyeOn from 'assets/logos/eye-on.svg';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';

const SignIn: FC = () => {
    const [passwordIcon, setPasswordIcon] = useState(eyeOff);
    const [passwordType, setPasswordType] = useState('password'); 

    const changePasswordVisibility = () => {
        if (passwordIcon === eyeOff) {
            setPasswordIcon(eyeOn);
            setPasswordType('text');
        } else {
            setPasswordIcon(eyeOff);
            setPasswordType('password');
        }
    }

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
                <Title>SIGN IN</Title>

                <Label>
                    Email Address
                </Label>
                <Input
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                    <Error>{errors.email}</Error>
                )}


                <Label>Password</Label>
                <Input
                    name='password'
                    type={passwordType}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                        <IconButton onClick={changePasswordVisibility}>
                            <img src={passwordIcon} />
                        </IconButton>
                    }
                />
                {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                )}
                <PasswordDetails>
                    <CustomCheckboxLabel
                        control={<CustomCheckbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Link href={process.env.REACT_APP_BASE_URL}>
                        Reset Password?
                    </Link>
                </PasswordDetails>

                <ButtonPrimary type='submit' disabled={isSubmitting}>Login</ButtonPrimary>

                <FormFooter component='span'>
                    Don&apos;t have account yet?&nbsp;&nbsp;
                    <Link href={process.env.REACT_APP_BASE_URL}>
                        New Account
                    </Link>
                </FormFooter>
            </SignInForm>
        </AuthContainer>
    )
};

const SignInForm = styled('form')(({ theme }) => ({
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    color: theme.palette.white,
    fontFamily: 'Montserrat, sans-serif',
}));

const Title = styled(Typography)<TypographyProps>({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '56px',
    fontWeight: '700',
    textAlign: 'center',
});

const Label = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.white,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '400',
    fontSize: '14px',
}));

const Input = styled(InputUnstyled)<InputUnstyledProps>(({ theme }) => ({
    borderBottom: '1px solid white',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
        borderColor: theme.palette.green.main,
    },

    '&.Mui-focused': {
        borderColor: theme.palette.green.darker,
        borderSize: '2px',
    },

    '& .MuiInput-input': {
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
        border: 0,
        width: '80%',
        paddingBottom: '5px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '400',
        fontSize: '14px',

        '&:focus': {
            outline: 0,
        }
    },
}));

const Error = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.red,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
}));

const IconButton = styled(ButtonUnstyled)<ButtonUnstyledProps>({
    background: 0,
    border: 0,
    ':hover': {
        cursor: 'pointer',
    }
});

const CustomCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
    color: theme.palette.white,
}));

const CustomCheckboxLabel = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontFamily: 'Montserrat, sans-serif',
        color: theme.palette.bgr,
    }
}));

const PasswordDetails = styled(Box)<BoxProps>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const FormFooter = styled(Box)<BoxProps>({
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: '400',
});

export default SignIn;