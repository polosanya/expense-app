import React from 'react';
import logo from '../../assets/logos/logo.svg';
import { Box, Link } from '@mui/material';

type Props = {
    image: string
    children: React.ReactNode
}

const AuthContainer: React.FC<Props> = ({ image, children }) => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#1D283A',
                    position: 'relative',
                    height: '100vh',
                }}
            >
                <Link href="https://www.incode-group.com/" sx={{
                    position: 'absolute',
                    left: 60,
                    top: 48,
                }}>
                    <img src={logo} alt='Incode Group logo' />
                </Link>

                <Box sx={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    backgroundSize: 'cover',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    width: '50%',
                }}>
                </Box>
            </Box>

            {children}
        </>
    );
};

export default AuthContainer;