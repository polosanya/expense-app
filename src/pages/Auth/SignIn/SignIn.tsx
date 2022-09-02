import { Box, BoxProps, Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps, Link, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';
import womanImage from 'assets/images/woman.png';
import AuthContainer from 'components/AuthContainer/AuthContainer';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { PrimaryInput } from 'components/PrimaryInput/PrimaryInput';
import { PrimaryInputMessageType } from 'components/PrimaryInput/utils';
import { FormikValues, useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from "yup";

const SignIn: FC = () => {
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
        validateOnChange: false,
        onSubmit: customHandleSubmit,
    })

    const {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = formik;

    return (
        <AuthContainer image={womanImage}>
            <SignInForm onSubmit={handleSubmit}>
                <Title>SIGN IN</Title>

                <PrimaryInput 
                  label='Email Address'
                  name='email'
                  type='text'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  messageType={PrimaryInputMessageType.Error}
                  message={errors.email}
                />

                <PasswordInput
                  label='Password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  messageType={PrimaryInputMessageType.Error}
                  message={errors.password}
                />

                {/* <Label>
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
                            {
                                passwordType === 'password'
                                  ? <EyeOffIcon />
                                  : <EyeOnIcon />
                            }
                        </IconButton>
                    }
                />
                {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                )} */}
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