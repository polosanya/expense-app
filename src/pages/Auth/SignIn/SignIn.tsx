import { FC } from 'react';
import womanImage from '../../../assets/images/woman.png';
import AuthContainer from '../../../components/AuthContainer/AuthContainer';
import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/system';
import { InputUnstyled, InputUnstyledProps, ButtonUnstyled, ButtonUnstyledProps } from '@mui/base/';
import { useFormik } from 'formik';
import * as Yup from "yup";
import eyeOff from '../../../assets/logos/eye-off.svg';

const SignIn: FC = () => {
    const validationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(8, 'Password too short').required()
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
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
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                            <IconButton>
                                <img src={eyeOff} />
                            </IconButton>
                    }
                />
                {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                )}
                <ButtonPrimary type='submit' disabled={isSubmitting}>Login</ButtonPrimary>
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

const ButtonPrimary = styled(ButtonUnstyled)<ButtonUnstyledProps>(({ theme }) => ({
    color: theme.palette.white,
    backgroundColor: theme.palette.green.darker,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    padding: '9.5px',
    borderRadius: '2px',
    border: `1px solid ${theme.palette.green.darker}`,
    ':hover': {
        borderColor: theme.palette.green.main,
    },
    ':active': {
        backgroundColor: theme.palette.green.main,
        borderColor: theme.palette.bgr,
    }
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

export default SignIn;