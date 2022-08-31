import { FC } from 'react';
import womanImage from '../../../assets/images/woman.png';
import AuthContainer from '../../../components/AuthContainer/AuthContainer';
import Box from '@mui/material/Box'
import { styled } from '@mui/system';

const SignIn: FC = () => {
    return (
        <AuthContainer image={womanImage}>
            <SignInComponent>
                Sign In Form
            </SignInComponent>
        </AuthContainer>
    )
};

const SignInComponent = styled(Box)(({ theme }) => ({
    width: '330px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    backgroundColor: theme.palette.red,
    color: theme.palette.white,
}));

export default SignIn;