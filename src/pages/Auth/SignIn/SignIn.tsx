import React from 'react';
import womanImage from '../../../assets/images/woman.png';
import AuthContainer from '../../../components/AuthContainer/AuthContainer';
import { Box } from '@mui/material';

const SignIn: React.FC = () => {
    return (
        <AuthContainer image={womanImage}>
            <Box sx={{
                position: 'absolute',
                left: 150,
                top: 200,
                width: 400,
                height: 400,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                backgroundColor: 'aqua',
            }}>
                Sign In Form
            </Box>
        </AuthContainer>
    )
};

export default SignIn;