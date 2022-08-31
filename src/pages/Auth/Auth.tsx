import { FC } from 'react';
import { styled } from '@mui/system';
import SignIn from './SignIn/SignIn';
import Box from '@mui/material/Box';

const Auth: FC = () => {
  return (
    <AuthComponent>
      <SignIn />
    </AuthComponent>
  );
}

const AuthComponent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.black,
}));

export default Auth;